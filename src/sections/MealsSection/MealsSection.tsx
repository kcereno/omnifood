import MealCard from "../../components/MealCard/MealCard";
import "./MealsSection.scss";
import meal1 from "../../assets/images/meals/meal-1.jpg";
import meal2 from "../../assets/images/meals/meal-2.jpg";
import image from "/src/assets/images/app/app-screen-1.png";

function MealsSection() {
  return (
    <section className="section-meals">
      <div className="container">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid-col-3">
        <MealCard
          image={{ src: meal1, alt: "meal" }}
          data={{
            title: "Japanese Gyozas",
            category: "Vegetarian",
            calories: "650",
            score: "74",
            rating: "4.9",
            reviews: "537",
          }}
        />
        <MealCard
          image={{ src: meal2, alt: "meal" }}
          data={{
            title: "Avocado Salad",
            category: "Vegetarian",
            calories: "650",
            score: "74",
            rating: "4.9",
            reviews: "537",
          }}
        />
      </div>
    </section>
  );
}

export default MealsSection;
