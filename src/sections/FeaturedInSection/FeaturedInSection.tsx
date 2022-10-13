import logo1 from "../../assets/images/logos/techcrunch.png";
import logo2 from "../../assets/images/logos/business-insider.png";
import logo3 from "../../assets/images/logos/forbes.png";
import logo4 from "../../assets/images/logos/the-new-york-times.png";
import logo5 from "../../assets/images/logos/usa-today.png";
import "./FeaturedInSection.scss";

function FeaturedInSection() {
  return (
    <section className="section-featured py-lg">
      <div className="container">
        <h2 className="featured-heading text-center mb-sm">As Featured In</h2>
        <div className="featured-logos flex flex-center-x justify-content-around ">
          <img src={logo1} alt="logo1" />
          <img src={logo2} alt="logo1" />
          <img src={logo3} alt="logo1" />
          <img src={logo4} alt="logo1" />
          <img src={logo5} alt="logo1" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedInSection;
