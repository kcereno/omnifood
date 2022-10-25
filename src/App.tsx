import "./App.scss";
import CallToActionSection from "./sections/CallToActionSection/CallToActionSection";
import FeaturedInSection from "./sections/FeaturedInSection/FeaturedInSection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection/HowItWorksSection";
import MealsSection from "./sections/MealsSection/MealsSection";
import PricingFeatureSection from "./sections/PricingFeatureSection/PricingFeatureSection";
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
        <PricingFeatureSection />
        <CallToActionSection />
      </main>
    </div>
  );
}

export default App;
