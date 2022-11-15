import image from "../../assets/images/hero.png";
import DeliveredMeals from "../../components/DeliveredMeals/DeliveredMeals";

import "./HeroSection.scss";

function HeroSection() {
  return (
    <section className="hero-section bg-tint pb-lg pt-md ">
      <div className="hero container align-items-center grid grid-col-2 grid-gap-col-lg  grid-gap-row-xl px-md">
        <div className="hero-text-box">
          <h1 className="heading-primary mb-md">
            A healthy meal delivered to your door, every single day!
          </h1>
          <p className="hero-description mb-md">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>

          <div className="">
            <a href="#cta" className="btn btn-full mr-sm">
              Start Eating Well
            </a>
            <a href="/" className="btn btn-outline">
              Learn More &darr;
            </a>
          </div>

          <DeliveredMeals />
        </div>

        <div className="hero-img-box">
          <img src={image} className="hero-img" alt="hero " />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
