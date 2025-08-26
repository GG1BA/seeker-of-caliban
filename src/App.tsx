import Hero from "./components/Hero.tsx";
import Legion from "./components/Legion.tsx";
import Structure from "./components/Structure.tsx";
import Characters from "./components/Characters.tsx";
import Campaigns from "./components/Campaigns.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <>
      <main className="main">
        <section className="hero">
          <div className="container">
            <Hero />
          </div>
        </section>
        <section className="legion">
          <div className="container">
            <div id="legion"></div>
            <Legion />
          </div>
        </section>
        <section className="structure">
          <div className="container">
            <div id="structure"></div>
            <Structure />
          </div>
        </section>
        <section className="characters">
          <div className="container">
            <div id="characters"></div>
            <Characters />
          </div>
        </section>
        <section className="campaigns">
          <div className="container">
            <div id="campaigns"></div>
            <Campaigns />
          </div>
        </section>
        <section className="authors"></section>
        <section className="feedback"></section>
      </main>
      <header className="header">
        <div className="container">
          <Header />
        </div>
      </header>
    </>
  );
}

export default App;
