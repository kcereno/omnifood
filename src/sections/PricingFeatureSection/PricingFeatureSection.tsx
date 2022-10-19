import "./PricingFeatureSection.scss";
import { FiCheck, FiX } from "react-icons/fi";
import Button from "../../components/UI/Button/Button";

function PricingFeatureSection() {
  return (
    <section className="pricing-section py-l">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary mb-l">
          Eating well without breaking the bank
        </h2>
      </div>
      {/* PRICING PLANS */}
      <div className="container grid grid-col-2 grid-gap-l mb-l">
        <div className="pricing-plan starter  w-75">
          <header className="plan-header text-center mb-m">
            <p className="plan-name mb-s">Starter</p>
            <p className="plan-price mb-xs">
              <span className="mr-xxs">$</span>399
            </p>
            <p className="plan-text">per month. That's just $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>1 meal per day</span>
            </li>
            <li className="list-item flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>Order between 11am and 9pm</span>
            </li>
            <li className="list-item flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>Delivery is free</span>
            </li>
            <li className="list-item flex center-items-y flex-gap-xs mb-xxs">
              <FiX className="icon color-primary" />
            </li>
          </ul>
          <div className="text-center mt-m">
            <Button href="/">Start eating well</Button>
          </div>
        </div>

        <div className="pricing-plan complete bg-tint p-l w-75 ">
          <header className="plan-header text-center mb-m">
            <p className="plan-name mb-s ">Complete</p>
            <p className="plan-price mb-xs">
              <span className="mr-xxs">$</span>649
            </p>
            <p className="plan-text">per month. That's just $11 per meal!</p>
          </header>

          <ul className="list">
            <li className="list-item flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>
                <strong>2 meals </strong> per day
              </span>
            </li>
            <li className="list-item flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>Delivery is free</span>
            </li>
            <li className="list-item flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="text-center mt-m">
            <Button href="/">Start eating well</Button>
          </div>
        </div>
      </div>

      {/* Feat */}
      <div className="container grid-col-4">
        <div className="">feature1</div>
        <div className="">feature1</div>
        <div className="">feature1</div>
        <div className="">feature1</div>
      </div>
    </section>
  );
}

export default PricingFeatureSection;
