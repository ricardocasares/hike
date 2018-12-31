import React from "react";
import renderer from "react-test-renderer";
import serializer from "jest-emotion";
import Box from "@app/components/Box";

expect.addSnapshotSerializer(serializer);

test("renders with correct styles", () => {
  expect(
    renderer.create(<Box p={[1, 2]}>hello world</Box>).toJSON()
  ).toMatchSnapshot();
});
