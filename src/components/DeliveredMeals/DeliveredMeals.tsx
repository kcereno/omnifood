import "./DeliveredMeals.scss";
import image1 from "../../assets/images/customers/customer-1.jpg";
import image2 from "../../assets/images/customers/customer-2.jpg";
import image3 from "../../assets/images/customers/customer-3.jpg";
import image4 from "../../assets/images/customers/customer-4.jpg";
import image5 from "../../assets/images/customers/customer-5.jpg";
import image6 from "../../assets/images/customers/customer-6.jpg";

function DeliveredMeals() {
  return (
    <div className="delivered-meals flex align-items-center gap-sm mt-l">
      <div className="delivered-imgs flex">
        <img src={image1} alt="customer profile pic" />
        <img src={image2} alt="customer profile pic" />
        <img src={image3} alt="customer profile pic" />
        <img src={image4} alt="customer profile pic" />
        <img src={image5} alt="customer profile pic" />
        <img src={image6} alt="customer profile pic" />
      </div>
      <p className="delivered-text">
        <span className="text-color-shade">250,000+ </span>meals delivered last
        year!
      </p>
    </div>
  );
}

export default DeliveredMeals;
