// external
import renderer from "react-test-renderer";

// internal
import { dark } from "lib/themes";
import CardTitle from "../CardTitle";

describe("CardTitle", () => {
  it("CardTitle", () => {
    const title = renderer
      .create(<CardTitle theme={dark}>Hello</CardTitle>)
      .toJSON();

    expect(title).toMatchSnapshot();
  });
});
