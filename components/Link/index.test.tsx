import React from "react";
import renderer from "react-test-renderer";
import serializer from "jest-emotion";
import Link, { match } from "@app/components/Link";

expect.addSnapshotSerializer(serializer);

test("renders with correct styles", () => {
  expect(
    renderer
      .create(
        <Link href="/">
          <a>hello world</a>
        </Link>
      )
      .toJSON()
  ).toMatchSnapshot();
});

test("renders partial with correct styles", () => {
  expect(
    renderer
      .create(
        <Link href="/" partial>
          <a>hello world</a>
        </Link>
      )
      .toJSON()
  ).toMatchSnapshot();
});

test("matcher works", () => {
  const exact = match(false);
  const partial = match(true);

  expect(exact("/", "/")).toBe(true);
  expect(exact("/", "/asd")).toBe(false);

  expect(partial("/blog", "/blog")).toBe(true);
  expect(partial("/blog", "/blog/post")).toBe(true);
});
