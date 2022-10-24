import { FiCheck } from "react-icons/fi";
import "./MealList.scss";

interface Props {
  types: string[];
}

function MealList({ types }: Props) {
  return (
    <div className="diets ">
      <h3 className="heading-tertiary mb-xs">Works with any diet:</h3>
      <ul className="list d-flex flex-column flex-gap-xs">
        {types.map((type) => (
          <li className="list-item d-flex align-items-center flex-gap-xs">
            <FiCheck className="icon color-primary" /> <span>{type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealList;
