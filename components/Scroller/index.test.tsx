import React from "react";
import renderer from "react-test-renderer";
import serializer from "jest-emotion";
import Scroller from "@app/components/Scroller";

expect.addSnapshotSerializer(serializer);

test("renders with correct styles", () => {
  expect(
    renderer
      .create(
        <Scroller>
          <a>hello world</a>
        </Scroller>
      )
      .toJSON()
  ).toMatchSnapshot();
});
