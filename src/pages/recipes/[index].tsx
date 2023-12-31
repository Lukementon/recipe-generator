import Header from '@/components/header/Header';
import { Recipe, RecipeResponse } from '@/types/types';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import axios from '../../instances/axios';

interface Props {
  recipe: Recipe;
}

const Recipe = ({ recipe }: Props) => {
  const instructions = makeInstructionsList(recipe);
  const ingredients = makeIngredientsList(recipe);

  function makeIngredientsList(recipe: Recipe) {
    const ingredients: string[] = [];
    for (let [key, value] of Object.entries(recipe)) {
      if (key.includes('strIngredient') && Boolean(value)) {
        ingredients.push(value);
      }
    }
    return ingredients;
  }

  function makeInstructionsList(recipe: Recipe) {
    const instructionLines = recipe.strInstructions.split('\n');
    const filteredInstructions = instructionLines
      .filter(line => !line.includes('STEP') && !line.includes('DIRECTIONS:')) // Some data includes a line for each step, removing this to improve UI
      .map(line => line.trim())
      .filter(line => line !== '') // Remove any empty lines
      .map(inst => inst.replace(/^\s*((\d+|[Ss]tep)\s*)?[-.) ]/gm, '')) // Replace strings like "Step 1, 1), 1-" etc
      .filter(char => char !== ''); // Remove any empty lines after .replace method
    return filteredInstructions;
  }

  return (
    <div>
      <Header />

      <main data-cy='recipe-page' className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col justify-center'>
          <div className='mt-4 px-4 py-2 bg-gray-100'>
            <h4 className='font-semibold mr-2'>{recipe.strMeal}</h4>
          </div>

          <div className='flex flex-col items-center lg:flex-row lg:justify-start lg:items-start lg:space-x-4 mt-4'>
            <div className='flex-1 w-40 h-40 flex bg-blue-200 justify-center lg:w-full lg:h-full'>
              <div className='w-full h-full bg-blue-50'>
                <Image
                  data-cy='recipe-image'
                  src={recipe?.strMealThumb}
                  alt={recipe?.strMeal}
                  height={800}
                  width={1200}
                />
              </div>
            </div>
            <div className='flex-1 mt-4 lg:mt-0'>
              <div className='bg-gray-100 py-2 px-4'>Ingredients</div>
              <div className='mt-2'>
                {ingredients.map((el, i) => (
                  <li key={i} className=''>
                    {el}
                  </li>
                ))}
              </div>

              <div className='bg-gray-100 mt-4 py-2 px-4'>Recipe</div>
              <div className='mt-2 mb-4'>
                {instructions.map((instruction, i) => (
                  <div
                    key={i}
                    className='flex bg-gray-50 p-2 my-2 rounded-md shadow-sm'
                  >
                    <p className='text-sm font-medium'>{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recipe;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { index: id } = query;
  const {
    data: { meals: recipe },
  } = await axios.get<RecipeResponse>(`/lookup.php?i=${id}`);

  return {
    props: {
      recipe: recipe[0],
    },
  };
}
