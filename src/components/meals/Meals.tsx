import { Meal } from '@/types/types';
import MealCard from './MealCard';

type Props = {
  meals: Meal[];
};

const Meals = ({ meals }: Props) => {
  return (
    <div className='p-4 w-full flex flex-col items-center lg:items-start'>
      <div className='mt-6'>
        <h3 className='font-bold text-lg'>Meals</h3>
      </div>

      <div className='mt-2 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3 grid-flow-row-dense'>
        {meals?.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
