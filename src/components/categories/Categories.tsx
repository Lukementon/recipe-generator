import { Category } from '@/types/types';
import { useRouter } from 'next/router';
import Card, { Item } from '../card/Card';
import { ButtonProps, Button as UIButton } from '../ui/button';

interface Props {
  categories: Category[];
}

const Categories = ({ categories }: Props) => {
  const router = useRouter();
  const mappedCategories = makeCategoriesGeneric(categories);

  function handleCategorySelect(categoryName: string) {
    router.push(`/meals/${categoryName}`);
  }

  const Button = <T extends ButtonProps>(props: T) => {
    return <UIButton {...props}>View Meals</UIButton>;
  };

  return (
    <div
      data-cy='categories'
      className='p-4 w-full flex flex-col items-center lg:items-start'
    >
      <div className='mt-6'>
        <h3 className='font-bold text-lg'>Categories</h3>
      </div>

      <div
        data-cy='category-list'
        className='mt-2 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3 grid-flow-row-dense'
      >
        {mappedCategories.slice(0, 4)?.map(category => (
          <Card
            button={Button}
            key={category.id}
            item={category}
            handleSelect={handleCategorySelect}
            queryString={category.name}
          />
        ))}
        {mappedCategories.slice(4, 5)?.map(category => (
          <div key={category.id} className='col-span-2'>
            <Card
              button={Button}
              item={category}
              handleSelect={handleCategorySelect}
              queryString={category.name}
            />
          </div>
        ))}
        {mappedCategories.slice(5, 9)?.map(category => (
          <Card
            button={Button}
            key={category.id}
            item={category}
            handleSelect={handleCategorySelect}
            queryString={category.name}
          />
        ))}
        {mappedCategories.slice(9, 12)?.map(category => (
          <Card
            button={Button}
            key={category.id}
            item={category}
            handleSelect={handleCategorySelect}
            queryString={category.name}
          />
        ))}
        {mappedCategories.slice(12, 13)?.map(category => (
          <div key={category.id} className='col-span-2'>
            <Card
              button={Button}
              item={category}
              handleSelect={handleCategorySelect}
              queryString={category.name}
            />
          </div>
        ))}
        {mappedCategories.slice(13, categories.length)?.map(category => (
          <Card
            button={Button}
            key={category.id}
            item={category}
            handleSelect={handleCategorySelect}
            queryString={category.name}
          />
        ))}
      </div>
    </div>
  );
};

export function makeCategoriesGeneric(categories: Category[]): Item[] {
  return categories.map(category => ({
    id: category.idCategory,
    name: category.strCategory,
    thumbnail: category.strCategoryThumb,
  }));
}

export default Categories;
