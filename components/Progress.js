// external
import NProgress from "nprogress";

// internal
import { themed } from "../providers/Theme";
import { Router } from "../routes";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeError = () => NProgress.done();
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();

export default themed(({ theme }) => (
  <style global jsx>{`
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${theme.loading};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${theme.loading}, 0 0 5px ${theme.loading};
      opacity: 1;
      transform: rotate(3deg) translate(0px, -4px);
    }
  `}</style>
));
