import { Meal } from '@/types/types';
import { useRouter } from 'next/router';
import Card, { Item } from '../card/Card';
import { ButtonProps, Button as UIButton } from '../ui/button';

type Props = {
  meals: Meal[];
};

const Meals = ({ meals }: Props) => {
  const router = useRouter();
  const mappedMeals = makeMealsGeneric(meals);

  function handleSelectMeal(mealId: string) {
    router.push(`/recipes/${mealId}`);
  }

  const Button = <T extends ButtonProps>(props: T) => {
    return <UIButton {...props}>View Recipe</UIButton>;
  };

  return (
    <div
      data-cy='meals'
      className='p-4 w-full flex flex-col items-center lg:items-start'
    >
      <div className='mt-6'>
        <h3 className='font-bold text-lg'>Meals</h3>
      </div>

      <div className='mt-2 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3 grid-flow-row-dense'>
        {mappedMeals?.map(meal => (
          <Card
            button={Button}
            key={meal.id}
            item={meal}
            handleSelect={handleSelectMeal}
            queryString={meal.id}
          />
        ))}
      </div>
    </div>
  );
};

export function makeMealsGeneric(meals: Meal[]): Item[] {
  return meals.map(meal => ({
    id: meal.idMeal,
    name: meal.strMeal,
    thumbnail: meal.strMealThumb,
  }));
}

export default Meals;
