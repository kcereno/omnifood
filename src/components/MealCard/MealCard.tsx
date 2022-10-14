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
    category: string;
    calories: string;
    score: string;
    rating: string;
    reviews: string;
  };
}

function MealCard({
  image: { src, alt },
  data: { title, category, calories, score, reviews, rating },
}: Props) {
  return (
    <div className="meal pb-xl">
      <img src={src} className="w-100" alt={alt} />
      <div className="pt-md px-lg pb-lg">
        <div className="meal-tags mb-xs">
          <span className="tag">{category}</span>
        </div>
        <p className="meal-title mb-md">{title}</p>
        <ul className="meal-attributes flex flex-column gap-sm">
          <li>
            <HiOutlineFire className="meal-icon" />
            <span>
              <strong>{calories}</strong> calories
            </span>
          </li>
          <li>
            <BiRestaurant className="meal-icon" />
            <span>
              Nutriscore &reg; <strong>{score}</strong>{" "}
            </span>
          </li>
          <li>
            <HiOutlineStar className="meal-icon" />
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
