import { Category } from '@/types/types';
import React from 'react';
import {
  Card as UICard,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

export interface Item {
  id: string;
  name: string;
  thumbnail: string;
}

type Props = {
  buttonContent: string;
  item: Item;
  handleSelect: (str: string) => void;
  queryString: string;
};

const Card = ({ buttonContent, item, queryString, handleSelect }: Props) => {
  const { thumbnail, name } = item;
  return (
    <UICard>
      <CardHeader className='h-[5rem] mb-2'>
        <CardTitle className='w-full flex justify-center'>{name}</CardTitle>
      </CardHeader>
      <CardContent className='m-0 p-0 flex items-center'>
        <div className='flex items-center space-x-4 rounded-md p-4 h-full w-full'>
          <div className='flex flex-1 space-y-1 space-x-4 items-center justify-center'>
            <Image src={thumbnail} alt={name} height={200} width={200} />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full' onClick={() => handleSelect(queryString)}>
          {buttonContent}
        </Button>
      </CardFooter>
    </UICard>
  );
};

export default Card;
