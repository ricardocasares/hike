import React from "react";
import renderer from "react-test-renderer";
import serializer from "jest-emotion";
import Logo from "@app/components/Logo";

expect.addSnapshotSerializer(serializer);

test("renders with correct styles", () => {
  expect(renderer.create(<Logo />).toJSON()).toMatchSnapshot();
});
