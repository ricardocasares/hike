import { Link } from "../routes";
import { BLACK, LIGHT_GRAY } from "../lib/colors";

export default props => (
  <span>
    <Link {...props}>
      <a>{props.children}</a>
    </Link>
  </span>
);
