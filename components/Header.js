import Logo from "./Logo";
import Navigation from "./Navigation";

export default () => (
  <header>
    <Logo />
    <Navigation />
    <style jsx>{`
      header {
        margin-bottom: 20px;
      }

      @media (min-width: 400px) {
        header {
          display: flex;
          justify-content: space-between;
        }
      }
    `}</style>
  </header>
);
