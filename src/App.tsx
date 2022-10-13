import "./App.scss";
import FeaturedInSection from "./sections/FeaturedInSection/FeaturedInSection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection/HowItWorksSection";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <main>
        <HeroSection />
        <FeaturedInSection />
        <HowItWorksSection />
      </main>
    </div>
  );
}

export default App;
