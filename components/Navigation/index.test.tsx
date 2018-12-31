import React from "react";
import renderer from "react-test-renderer";
import serializer from "jest-emotion";
import Navigation from "@app/components/Navigation";

expect.addSnapshotSerializer(serializer);

test("renders with correct styles", () => {
  expect(renderer.create(<Navigation />).toJSON()).toMatchSnapshot();
});
