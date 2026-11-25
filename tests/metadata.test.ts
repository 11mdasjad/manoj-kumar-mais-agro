import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { pageMetadata } from "../src/lib/metadata.ts";
import { socialPreviewImage } from "../src/lib/site.ts";

test("general-page share metadata uses the actual logo PNG and its dimensions", () => {
  const metadata = pageMetadata("Home", "Company description", "/");
  assert.deepEqual(metadata.openGraph?.images, [socialPreviewImage]);
  assert.deepEqual(metadata.twitter?.images, [socialPreviewImage]);
  const png = readFileSync(new URL(`../public${socialPreviewImage.url}`, import.meta.url));
  assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.equal(png.readUInt32BE(16), socialPreviewImage.width);
  assert.equal(png.readUInt32BE(20), socialPreviewImage.height);
});

test("detail-page images still override the general logo preview", () => {
  const metadata = pageMetadata("Property", "Description", "/properties/example", "/images/property.jpg");
  const expected = [{ url: "/images/property.jpg", alt: "Property" }];
  assert.deepEqual(metadata.openGraph?.images, expected);
  assert.deepEqual(metadata.twitter?.images, expected);
});
