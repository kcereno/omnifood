import "./Testimonial.scss";

interface Props {
  image: string;
  text: string;
  name: string;
}

function Testimonial({ image, text, name }: Props) {
  return (
    <figure className="testimonial pb-xs">
      <img src={image} className="testimonial-img img-circle mb-xs" alt="Ben" />
      <blockquote className="testimonial-text mb-xs">{text}</blockquote>
      <p className="testimonial-name ">&mdash; {name}</p>
    </figure>
  );
}

export default Testimonial;
