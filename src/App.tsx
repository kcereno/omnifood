import "./App.scss";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import HeroSection from "./sections/HeroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
