// external
import renderer from "react-test-renderer";

// internal
import Card from "../Card";
import { dark } from "lib/themes";

describe("Carding", () => {
  it("Card", () => {
    const card = renderer.create(<Card theme={dark}>Hello</Card>).toJSON();

    expect(card).toMatchSnapshot();
  });
});
