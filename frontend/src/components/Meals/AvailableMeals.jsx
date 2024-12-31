import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Menchet',
    description: 'Meaty and Healthy',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Mekoroni',
    description: 'Healthy!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Pasta',
    description: 'Healthy',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Beyaynet',
    description: 'Healthy',
    price: 18.99,
  },
];
function AvailableMeals(){
  const mealsList = DUMMY_MEALS.map(meal=> {
    return (<MealItem 
      key={meal.id} 
      id={meal.id}
      name={meal.name} 
      description={meal.description} 
      price={meal.price} 
    />);
  })
  return (
  <section className={classes.meals}>
    <Card>
      <ul>{mealsList}</ul>
    </Card>
    
  </section>
  );
}
export default AvailableMeals;