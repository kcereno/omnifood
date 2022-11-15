import "./PricingFeatureSection.scss";
import { FiCheck, FiX } from "react-icons/fi";
import {
  IoInfiniteOutline,
  IoPauseOutline,
  IoLeafOutline,
  IoNutritionOutline,
} from "react-icons/io5";
import Button from "../../components/UI/Button/Button";

function PricingFeatureSection() {
  return (
    <section id="pricing" className="pricing-section py-lg">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary mb-lg">
          Eating well without breaking the bank
        </h2>
      </div>
      {/* PRICING PLANS */}
      <div className="container grid  grid-col-2 grid-gap-lg mb-lg">
        <div className="pricing-plan starter ">
          <header className="plan-header text-center mb-md">
            <p className="plan-name mb-sm">Starter</p>
            <p className="plan-price mb-xs">
              <span className="mr-xxs">$</span>399
            </p>
            <p className="plan-text">per month. That's just $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item d-flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>1 meal per day</span>
            </li>
            <li className="list-item d-flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>Order between 11am and 9pm</span>
            </li>
            <li className="list-item d-flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>Delivery is free</span>
            </li>
            <li className="list-item d-flex center-items-y flex-gap-xs mb-xxs">
              <FiX className="icon color-primary" />
            </li>
          </ul>
          <div className="text-center mt-md">
            <Button href="/">Start eating well</Button>
          </div>
        </div>

        <div className="pricing-plan complete bg-tint p-lg">
          <header className="plan-header text-center mb-md">
            <p className="plan-name mb-sm ">Complete</p>
            <p className="plan-price mb-xs">
              <span className="mr-xxs">$</span>649
            </p>
            <p className="plan-text">per month. That's just $11 per meal!</p>
          </header>

          <ul className="list">
            <li className="list-item d-flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>
                <strong>2 meals </strong> per day
              </span>
            </li>
            <li className="list-item d-flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item d-flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>Delivery is free</span>
            </li>
            <li className="list-item d-flex center-items-y flex-gap-xs mb-xxs">
              <FiCheck className="icon color-primary" />
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="text-center mt-md">
            <Button href="/">Start eating well</Button>
          </div>
        </div>
      </div>

      <div className="container pb-xl">
        <aside className="plan-details text-center">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

      {/* Feature */}
      <div className="pricing-feature container grid grid-col-4 grid-gap-col-xs">
        <div className="feature">
          <IoInfiniteOutline className="feature-icon mb-sm" />
          <p className="feature-title mb-xs">Never cook again!</p>
          <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="feature">
          <IoNutritionOutline className="feature-icon mb-sm" />
          <p className="feature-title mb-xs">Local and Organic</p>
          <p className="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="feature">
          <IoLeafOutline className="feature-icon mb-sm" />
          <p className="feature-title mb-xs">No waste</p>
          <p className="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="feature">
          <IoPauseOutline className="feature-icon mb-sm" />
          <p className="feature-title mb-xs">Pause anytime</p>
          <p className="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingFeatureSection;
