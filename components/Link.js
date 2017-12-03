// internal
import { Link } from "../routes";

export default props => (
  <Link {...props}>
    <a>{props.children}</a>
  </Link>
);
