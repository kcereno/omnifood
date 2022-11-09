import image1 from "../../assets/images/customers/ben.jpg";
import image2 from "../../assets/images/customers/dave.jpg";
import image3 from "../../assets/images/customers/hannah.jpg";
import image4 from "../../assets/images/customers/steve.jpg";

import galleryImage1 from "../../assets/images/gallery/gallery-1.jpg";
import galleryImage2 from "../../assets/images/gallery/gallery-2.jpg";
import galleryImage3 from "../../assets/images/gallery/gallery-3.jpg";
import galleryImage4 from "../../assets/images/gallery/gallery-4.jpg";
import galleryImage5 from "../../assets/images/gallery/gallery-5.jpg";
import galleryImage6 from "../../assets/images/gallery/gallery-6.jpg";
import galleryImage7 from "../../assets/images/gallery/gallery-7.jpg";
import galleryImage8 from "../../assets/images/gallery/gallery-8.jpg";
import galleryImage9 from "../../assets/images/gallery/gallery-9.jpg";
import galleryImage10 from "../../assets/images/gallery/gallery-10.jpg";
import galleryImage11 from "../../assets/images/gallery/gallery-11.jpg";
import galleryImage12 from "../../assets/images/gallery/gallery-12.jpg";

import Testimonial from "../../components/Testimonial/Testimonial";
import "./TestimonialsSection.scss";

function TestimonialsSection() {
  return (
    <section className="testomonials-section grid grid-col-2  grid-gap-row-xs grid-gap-col-xs bg-tint px-md align-items-center">
      <div className="testimonials-container p-lg">
        <span className="subheading mb-xs">Testimonials</span>
        <h2 className="heading-secondary mb-md">
          Once your try it, you can't go back
        </h2>

        <div className="testimonials grid  grid-col-2 grid-gap-md">
          <Testimonial
            image={image1}
            text="Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical."
            name="Dave Bryson"
          />
          <Testimonial
            image={image2}
            text="The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!"
            name="Ben Hadley"
          />
          <Testimonial
            image={image4}
            text="Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!"
            name="Steve Miller"
          />
          <Testimonial
            image={image3}
            text="I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic."
            name="Hannah Smith"
          />
        </div>
      </div>

      <div className="gallery p-sm grid grid-col-3 grid-gap-xxs ">
        <figure className="gallery-item">
          <img src={galleryImage1} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage2} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage3} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage4} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage5} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage6} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage7} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage8} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage9} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage10} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage11} alt="gallery" />
        </figure>
        <figure className="gallery-item">
          <img src={galleryImage12} alt="gallery" />
        </figure>
      </div>
    </section>
  );
}

export default TestimonialsSection;
