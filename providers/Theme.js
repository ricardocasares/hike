// external
import PropTypes from "prop-types";
import { Component, Children } from "react";

export class ThemeProvider extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired
  };

  static childContextTypes = {
    theme: PropTypes.object.isRequired
  };

  getChildContext() {
    return { theme: this.props.theme };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export const themed = Cmp =>
  class Themed extends Component {
    static contextTypes = {
      theme: PropTypes.object.isRequired
    };

    render() {
      return <Cmp {...this.props} theme={this.context.theme} />;
    }
  };
