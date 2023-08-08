import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as UICard,
} from '@/components/ui/card';
import Image from 'next/image';

export interface Item {
  id: string;
  name: string;
  thumbnail: string;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  item: Item;
  handleSelect: (str: string) => void;
  queryString: string;
  button: React.ComponentType<ButtonProps>;
};

const Card = ({ item, queryString, handleSelect, button: Button }: Props) => {
  const { thumbnail, name } = item;
  return (
    <UICard data-cy='card'>
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
        <Button
          data-cy='view-btn'
          className='w-full'
          onClick={() => handleSelect(queryString)}
        />
      </CardFooter>
    </UICard>
  );
};

export default Card;
