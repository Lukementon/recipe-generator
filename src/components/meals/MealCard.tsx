import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Meal } from '@/types/types';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useRouter } from 'next/router';

type Props = {
  meal: Meal;
};

const MealCard = ({ meal }: Props) => {
  const router = useRouter();
  const { strMeal, strMealThumb } = meal;

  function handleRecipeSelect(mealId: string) {
    router.push(`/recipes/${mealId}`);
  }
  return (
    <Card>
      <CardHeader className='h-[5rem] mb-2'>
        <CardTitle className='w-full flex justify-center'>{strMeal}</CardTitle>
      </CardHeader>
      <CardContent className='m-0 p-0 flex items-center'>
        <div className='flex items-center space-x-4 rounded-md p-4 h-full w-full'>
          <div className='flex flex-1 space-y-1 space-x-4 items-center justify-center'>
            <Image src={strMealThumb} alt={strMeal} height={200} width={200} />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className='w-full'
          onClick={() => handleRecipeSelect(meal.idMeal)}
        >
          View Recipe
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MealCard;
