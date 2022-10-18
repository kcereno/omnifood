import "./App.scss";
import FeaturedInSection from "./sections/FeaturedInSection/FeaturedInSection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection/HowItWorksSection";
import MealsSection from "./sections/MealsSection/MealsSection";
import TestimonialsSection from "./sections/TestimonialsSection/TestimonialsSection";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <main>
        <HeroSection />
        <FeaturedInSection />
        <HowItWorksSection />
        <MealsSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}

export default App;
