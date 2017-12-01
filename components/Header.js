import Logo from "./Logo";
import Navigation from "./Navigation";

export default () => (
  <header>
    <Logo />
    <Navigation />
    <style jsx>{`
      header {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
        margin-bottom: 20px;
      }

      @media (min-width: 400px) {
        header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-items: stretch;
        }
      }
    `}</style>
  </header>
);
