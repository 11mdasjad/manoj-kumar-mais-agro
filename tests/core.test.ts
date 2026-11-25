import test from "node:test";
import assert from "node:assert/strict";
import { calculateEMI } from "../src/lib/calculator.ts";
import { filterProperties, minimumTotalPrice } from "../src/lib/search.ts";
import { properties } from "../src/data/properties.ts";
import {
  validateInquiry,
  inquiryMessage,
  todayInIndia,
} from "../src/lib/inquiry.ts";
test("EMI matches an independently known loan example", () => {
  const r = calculateEMI(100000, 12, 1);
  assert.ok(Math.abs(r.monthly - 8884.8789) < 0.01);
  assert.ok(Math.abs(r.total - r.monthly * 12) < 0.001);
  assert.ok(Math.abs(r.interest - (r.total - 100000)) < 0.001);
});
test("zero interest and invalid inputs remain finite", () => {
  assert.deepEqual(calculateEMI(120000, 0, 1), {
    monthly: 10000,
    interest: 0,
    total: 120000,
  });
  for (const a of [NaN, Infinity, -1])
    assert.equal(calculateEMI(a, 8, 20).monthly, 0);
  assert.equal(calculateEMI(100000, 8, 0).monthly, 0);
});
test("budget uses parcel cost and keeps unknown commercial prices separate", () => {
  assert.equal(minimumTotalPrice(properties[1]), 2340000);
  assert.equal(minimumTotalPrice(properties[2]), 900000);
  const result = filterProperties(properties, { budget: "under-50" });
  assert.equal(result.length, 3);
  assert.ok(result.every((p) => p.priceUnit !== "request"));
  assert.equal(
    filterProperties(properties, { budget: "request" })[0].category,
    "investment-properties",
  );
});
test("combined filters and area boundaries narrow actual listings", () => {
  assert.equal(
    filterProperties(properties, {
      category: "residential-plots",
      location: "raghunathpur",
      area: "under-2000",
    }).length,
    1,
  );
  assert.equal(
    filterProperties(properties, {
      category: "apartments-residential",
      location: "agro-corridor",
    }).length,
    0,
  );
  assert.equal(filterProperties(properties, { budget: "over-100" }).length, 0);
  assert.equal(filterProperties(properties, { status: "ready" }).length, 2);
  assert.equal(
    filterProperties(properties, { sort: "price" })[0].category,
    "farm-land-investment",
  );
});
test("form validates missing contacts and site visit dates", () => {
  assert.ok(validateInquiry({ name: "", phone: "12" }).name);
  assert.ok(
    validateInquiry({ name: "Alex", phone: "8008007062", email: "invalid" })
      .email,
  );
  assert.ok(
    validateInquiry(
      {
        name: "Alex",
        phone: "8008007062",
        date: "2020-01-01",
        time: "9 AM",
        property: "Apartments",
      },
      true,
    ).date,
  );
  assert.deepEqual(
    validateInquiry(
      {
        name: "Alex",
        phone: "+91 80080 07062",
        date: todayInIndia(),
        time: "9 AM",
        property: "Apartments",
      },
      true,
    ),
    {},
  );
});
test("prepared messages include visit preferences without implying booking", () => {
  const text = inquiryMessage(
    {
      name: "Asha",
      phone: "8008007062",
      property: "Residential Plots",
      date: "2027-01-01",
      time: "9 AM",
    },
    true,
  );
  assert.match(text, /request a site visit/);
  assert.match(text, /Please confirm availability/);
  assert.match(text, /2027-01-01/);
});
