import "./App.scss";
import FeaturedInSection from "./sections/FeaturedInSection/FeaturedInSection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection/HowItWorksSection";
import MealsSection from "./sections/MealsSection/MealsSection";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <main>
        <HeroSection />
        <FeaturedInSection />
        <HowItWorksSection />
        <MealsSection />
      </main>
    </div>
  );
}

export default App;
