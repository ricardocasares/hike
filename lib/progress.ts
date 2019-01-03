import progress from "nprogress";
import Router from "next/router";

export default function configureProgressBar() {
  Router.onRouteChangeStart = () => progress.start();
  Router.onRouteChangeError = () => progress.done();
  Router.onRouteChangeComplete = () => progress.done();
}
