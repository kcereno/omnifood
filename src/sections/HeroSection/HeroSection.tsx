import React from "react";
import "./HeroSection.scss";
import image from "../../assets/images/hero.png";
import DeliveredMeals from "../../components/DeliveredMeals/DeliveredMeals";
import Button from "../../components/UI/Button/Button";

function HeroSection() {
  return (
    <section className="hero-section bg-tint">
      <div className="hero-container align-center padding-x-md">
        <div className="hero-text-box">
          <h1 className="heading-primary margin-bottom-md">
            A healthy meal delivered to your door, every single day!
          </h1>
          <p className="hero-description margin-bottom-lg ">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Button href="/" className="margin-right-sm">
            Start eating well
          </Button>

          <Button variant="outline" href="/">
            Learn More &darr;
          </Button>

          <DeliveredMeals />
        </div>

        <div className="hero-img-box">
          <img src={image} className="width-100" alt="hero " />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
