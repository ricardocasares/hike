import Card from "../Card";
import { dark } from "../../../lib/themes";
import renderer from "react-test-renderer";

describe("Carding", () => {
  it("Card", () => {
    const card = renderer.create(<Card theme={dark}>Hello</Card>).toJSON();

    expect(card).toMatchSnapshot();
  });
});
