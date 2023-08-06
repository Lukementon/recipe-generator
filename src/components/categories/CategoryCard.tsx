import { Category } from '@/types/types';
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

type Props = {
  category: Category;
};

const CategoryCard = ({ category }: Props) => {
  const { strCategory, strCategoryThumb } = category;
  return (
    <Card>
      <CardHeader>
        <CardTitle className='w-full flex justify-center'>
          {strCategory}
        </CardTitle>
      </CardHeader>
      <CardContent className='m-0 p-0'>
        <div className='flex items-center space-x-4 rounded-md p-4'>
          <div className='flex flex-1 space-y-1 space-x-4 items-center justify-center'>
            <Image
              src={strCategoryThumb}
              alt={strCategory}
              height={200}
              width={200}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>View Meals</Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
