import React from "react";
import renderer from "react-test-renderer";
import serializer from "jest-emotion";
import Page from "@app/components/Page";
import "../__mocks__/router";

expect.addSnapshotSerializer(serializer);

test("renders with correct styles", () => {
  expect(
    renderer
      .create(
        <Page>
          <h1>Hello</h1>
        </Page>
      )
      .toJSON()
  ).toMatchSnapshot();
});
