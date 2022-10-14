import React from "react";
import "./HeroSection.scss";
import image from "../../assets/images/hero.png";
import DeliveredMeals from "../../components/DeliveredMeals/DeliveredMeals";
import Button from "../../components/UI/Button/Button";

function HeroSection() {
  return (
    <section className="hero-section bg-tint">
      <div className="hero-container grid grid-col-2 center-x px-md">
        <div className="hero-text-box">
          <h1 className="heading-primary mb-md">
            A healthy meal delivered to your door, every single day!
          </h1>
          <p className="hero-description mb-lg">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Button href="/" className="mr-sm">
            Start eating well
          </Button>

          <Button variant="outline" href="/">
            Learn More &darr;
          </Button>

          <DeliveredMeals />
        </div>

        <div className="hero-img-box">
          <img src={image} className="w-100" alt="hero " />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
