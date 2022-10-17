import { FiCheck } from "react-icons/fi";
import "./MealList.scss";

interface Props {
  types: string[];
}

function MealList({ types }: Props) {
  return (
    <div className="diets">
      <h3 className="heading-tertiary">Works with any diet:</h3>
      <ul className="list flex flex-column gap-sm">
        {types.map((type) => (
          <li className="list-item flex align-items-center gap-sm">
            <FiCheck className="icon color-primary" /> <span>{type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealList;
