import Categories from '@/components/categories/Categories';
import Header from '@/components/header/Header';
import Meals from '@/components/meals/Meals';
import {
  CategoriesReponse,
  Category,
  Meal,
  SearchRecipeResponse,
} from '@/types/types';
import { useState } from 'react';
import axios from '../instances/axios';

interface Props {
  categories: Category[];
}

export default function Home({ categories }: Props) {
  const [meals, setMeals] = useState<Meal[]>();
  const [errorMessage, setErrorMessage] = useState<string>();

  async function searchRecipies(queryString: string) {
    if (Boolean(errorMessage)) {
      setErrorMessage(undefined);
    }
    const {
      data: { meals },
    } = await axios.get<SearchRecipeResponse>(`/filter.php?i=${queryString}`);
    if (!meals) {
      setErrorMessage('Oops, couldnt find anything!');
    }
    setMeals(meals);
  }

  return (
    <main>
      <Header showSearchBar queryFn={searchRecipies} />

      <div className='max-w-7xl mx-auto'>
        {!meals && errorMessage && (
          <div className='p-4'>
            <div className='mt-6 py-2 px-4 bg-red-50 text-red-900'>
              <p>{errorMessage}</p>
            </div>
          </div>
        )}

        {meals && <Meals meals={meals} />}
        <Categories categories={categories} />
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    async function getCategories() {
      const {
        data: { categories },
      } = await axios.get<CategoriesReponse>('/categories.php');
      return categories;
    }

    const categories = await getCategories();

    return {
      props: { categories },
    };
  } catch (error) {
    console.error(error);
  }
}
