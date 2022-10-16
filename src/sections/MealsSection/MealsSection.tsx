import MealCard from "../../components/MealCard/MealCard";
import "./MealsSection.scss";
import meal1 from "../../assets/images/meals/meal-1.jpg";
import meal2 from "../../assets/images/meals/meal-2.jpg";

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
            categories: ["Vegetarian"],
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
            categories: ["Vegan", "Paleo"],
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
