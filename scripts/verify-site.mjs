import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const base = process.argv[2] || "http://127.0.0.1:3001";
const sitemap = await fetch(`${base}/sitemap.xml`).then((r) => r.text());
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (x) => new URL(x[1]).pathname,
);
const failures = [];
let passed = 0;
const allImages = new Set();
for (let offset = 0; offset < routes.length; offset += 4) {
  await Promise.all(
    routes.slice(offset, offset + 4).map(async (route) => {
      try {
        const response = await fetch(base + route);
        assert.equal(response.status, 200, `${route} status`);
        const html = await response.text();
        assert.match(html, /<h1[ >]/, `${route} h1`);
        assert.match(html, /name="description"/, `${route} description`);
        assert.match(html, /rel="canonical"/, `${route} canonical`);
        assert.ok(
          !html.includes("NEXT_HTTP_ERROR_FALLBACK;500"),
          `${route} server error`,
        );
        for (const m of html.matchAll(/<img[^>]+src="([^" ]+)"/g))
          allImages.add(m[1].replaceAll("&amp;", "&"));
        passed++;
      } catch (error) {
        failures.push(error.message);
      }
    }),
  );
}
for (const url of allImages) {
  const response = await fetch(base + url);
  if (!response.ok) failures.push(`Image ${url}: ${response.status}`);
}
for (const [from, to] of [
  ["/products", "/properties"],
  ["/about-us", "/about"],
  ["/contact-us", "/contact"],
  ["/blog", "/insights"],
  [
    "/products/luxury-residential-apartments-patia-nandankanan",
    "/properties/luxury-residential-apartments-patia-nandankanan",
  ],
]) {
  const r = await fetch(base + from, { redirect: "manual" });
  assert.equal(r.status, 308);
  assert.ok(r.headers.get("location")?.endsWith(to));
}
for (const path of [
  "/this-page-does-not-exist",
  "/properties/not-a-listing",
  "/projects/not-a-project",
  "/services/not-a-service",
  "/insights/not-an-article",
]) {
  const r = await fetch(base + path);
  assert.equal(r.status, 404, `${path} should 404`);
}
const filtered = await fetch(
  base + "/properties?category=residential-plots&location=raghunathpur",
).then((r) => r.text());
const main = filtered.split("<main")[1]?.split("</main>")[0] || "";
assert.match(main, /Residential Plots in Raghunathpur/);
assert.ok(
  !main.includes("Luxury Residential Apartments</a>"),
  "Search server render should be filtered",
);
const contact = await fetch(base + "/contact").then((r) => r.text());
assert.match(contact, /Prepare WhatsApp Inquiry/);
assert.match(contact, /Prepare Site Visit Request/);
assert.ok(
  !contact.includes('action="https://manish01-1.onrender.com/enquiry"'),
);
const source = readFileSync("src/data/articles.json", "utf8");
assert.equal(JSON.parse(source).length, 2);
console.log(
  JSON.stringify(
    {
      routesPassed: passed,
      imagesChecked: allImages.size,
      redirectsPassed: 5,
      notFoundChecksPassed: 5,
      searchRender: "passed",
      contactForms: "passed",
      failures,
    },
    null,
    2,
  ),
);
if (failures.length) process.exitCode = 1;
