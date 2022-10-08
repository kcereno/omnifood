import React from "react";
import "./HeroSection.scss";
import image from "../../assets/images/hero.png";

function HeroSection() {
  return (
    <section className="section-hero bg-tint">
      <div className="hero center">
        <div className="hero-text-box">
          <h1 className="heading-primary margin-bottom-md">
            A healthy meal delivered to your door, every single day!
          </h1>
          <p className="hero-description margin-bottom-lg ">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. We have delivered 250,000+ meals last year!
          </p>
          <a href="/" className="btn btn-full margin-right-sm">
            Start eating well
          </a>
          <a href="/" className="btn btn-outline">
            Learn More &darr;
          </a>
        </div>

        <div className="hero-img-box">
          <img src={image} className="hero-img" alt="hero " />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
