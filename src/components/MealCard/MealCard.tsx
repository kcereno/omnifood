import "./MealCard.scss";
import { HiOutlineFire, HiOutlineStar } from "react-icons/hi";
import { BiRestaurant } from "react-icons/bi";

interface Props {
  image: {
    src: string;
    alt: string;
  };
  data: {
    title: string;
    categories: string[];
    calories: string;
    score: string;
    rating: string;
    reviews: string;
  };
}

function MealCard({
  image: { src, alt },
  data: { title, categories, calories, score, reviews, rating },
}: Props) {
  return (
    <div className="meal-card">
      <img src={src} className="w-100" alt={alt} />
      <div className="pt-md px-lg pb-lg">
        <div className="d-flex flex-gap-xxs mb-xs">
          {categories.map((category) => (
            <span className={`tag tag-${category.toLowerCase()} `}>
              {category}
            </span>
          ))}
        </div>
        <p className="meal-card-title mb-md">{title}</p>
        <ul className="meal-card-attributes d-flex flex-column flex-gap-sm">
          <li>
            <HiOutlineFire className="meal-card-icon" />
            <span>
              <strong>{calories}</strong> calories
            </span>
          </li>
          <li>
            <BiRestaurant className="meal-card-icon" />
            <span>
              Nutriscore &reg; <strong>{score}</strong>{" "}
            </span>
          </li>
          <li>
            <HiOutlineStar className="meal-card-icon" />
            <span>
              <strong>{rating}</strong> ratings <strong>({reviews})</strong>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MealCard;
