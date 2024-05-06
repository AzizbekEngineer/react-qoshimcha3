import { Fragment } from "react";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <section>
          <Hero />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
