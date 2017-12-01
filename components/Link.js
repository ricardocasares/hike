import { Link } from "../routes";

export default props => (
  <span>
    <Link {...props}>
      <a>{props.children}</a>
    </Link>
  </span>
);
