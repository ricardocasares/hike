import React from "react";
import renderer from "react-test-renderer";
import serializer from "jest-emotion";
import Footer from "@app/components/Footer";

expect.addSnapshotSerializer(serializer);

test("renders with correct styles", () => {
  expect(renderer.create(<Footer />).toJSON()).toMatchSnapshot();
});
