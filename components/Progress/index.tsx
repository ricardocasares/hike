import progress from "nprogress";
import { Component } from "react";

export default class extends Component {
  componentWillMount() {
    // why??
    setTimeout(progress.start, 0);
  }

  componentWillUnmount() {
    console.log("done");
    progress.done();
  }

  render() {
    return null;
  }
}
