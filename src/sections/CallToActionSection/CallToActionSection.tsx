import "./CallToActionSection.scss";

function CallToActionSection() {
  return (
    <section className="cta-section ">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">CTA</div>
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
