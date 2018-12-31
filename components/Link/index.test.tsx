import React from "react";
import renderer from "react-test-renderer";
import serializer from "jest-emotion";
import Link from "@app/components/Link";

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
