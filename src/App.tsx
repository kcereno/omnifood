import "./App.scss";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection/HowItWorksSection";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <main>
        <HeroSection />
        <HowItWorksSection />
      </main>
    </div>
  );
}

export default App;
