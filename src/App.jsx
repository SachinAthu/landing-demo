import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        <Hero />

        <Benefits />

        <Collaboration />

        <Services />

        <Pricing />

        <RoadMap />

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
