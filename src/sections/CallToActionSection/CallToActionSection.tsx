import Button from "../../components/UI/Button/Button";
import "./CallToActionSection.scss";

function CallToActionSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box pt-lg px-xl">
            <h2 className="heading-secondary mb-md">
              Get Your First Meal For Free!
            </h2>
            <p className="cta-text mb-lg">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form
              action=""
              className="cta-form grid-col-2 grid-gap-col-md grid-gap-row-sm"
            >
              <div className="">
                <label htmlFor="full-name">Full Name</label>
                <input
                  type="text"
                  name=""
                  id="full-name"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div className="">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="me@example.com"
                  required
                />
              </div>

              <div className="">
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select name="" id="select-where" required>
                  <option value="">Please choose and option</option>
                  <option value="friends">Friends and family</option>
                  <option value="facebook">Facebook Ad</option>
                  <option value="podcast">Podcast</option>
                  <option value="other">Others</option>
                </select>
              </div>

              <button className="btn btn-form">Sign Up Now</button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          >
            Image
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
