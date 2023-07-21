import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Hyderabadi Chicken Biryani",
    description: "Delicious Chicken Biryani in Hyderabadi spicy flavour served with Raita and fresh vegetable salad.",
    price: 280,
  },
  {
    id: "m2",
    name: "French Fries",
    description: "Spicy French Fries flavoured with red chilly hotness served with cheese and tangy orange sauce.",
    price: 180,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Raw, meaty and served with mayonees.",
    price: 200,
  },
  {
    id: "m4",
    name: "Chicken stew",
    description: "Healthy, yummy and low caloric treat for fitness freaks.",
    price: 230,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
