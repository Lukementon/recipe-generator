import { GetServerSidePropsContext } from 'next';
import React from 'react';
import axios from '../../instances/axios';
import { Meal, SearchMealResponse } from '@/types/types';
import Meals from '@/components/meals/Meals';

type Props = {
  meals: Meal[];
};

const Meal = ({ meals }: Props) => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Meals meals={meals} />
    </div>
  );
};

export default Meal;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { index: categoryName } = query;

  const {
    data: { meals },
  } = await axios.get<SearchMealResponse>(`filter.php?c=${categoryName}`);

  return {
    props: {
      meals,
    },
  };
}
