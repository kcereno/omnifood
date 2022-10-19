import MealCard from "../../components/MealCard/MealCard";
import "./MealsSection.scss";
import meal1 from "../../assets/images/meals/meal-1.jpg";
import meal2 from "../../assets/images/meals/meal-2.jpg";
import MealList from "../../components/MealList/MealList";

function MealsSection() {
  return (
    <section className="section-meals py-l">
      <div className="container">
        <span className="subheading text-center">Meals</span>
        <h2 className="heading-secondary text-center pb-m">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid-col-3 grid-gap-column-l grid-gap-row-xl mb-m">
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

        <MealList
          types={[
            "Vegetarian",
            "Vegan",
            "Pescatarian",
            "Gluten-free",
            "Lactose-free",
            "Keto",
            "Paleo",
            "Low FODMAP",
            "Kid-friendly",
          ]}
        />
      </div>

      <div className="container text-center font-size-sm ">
        <a href="/" className="link">
          See All Recipes &rarr;
        </a>
      </div>
    </section>
  );
}

export default MealsSection;
