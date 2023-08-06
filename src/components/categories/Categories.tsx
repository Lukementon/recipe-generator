import { Category } from '@/types/types';
import CategoryCard from './CategoryCard';

interface Props {
  categories: Category[];
}

const Categories = ({ categories }: Props) => {
  return (
    <div className='p-4 w-full flex flex-col items-center lg:items-start'>
      <div className='mt-6'>
        <h3 className='font-bold text-lg'>Categories</h3>
      </div>

      <div className='mt-2 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-3 grid-flow-row-dense'>
        {categories.slice(0, 4)?.map(category => (
          <CategoryCard key={category.idCategory} category={category} />
        ))}
        {categories.slice(4, 5)?.map(category => (
          <div key={category.idCategory} className='col-span-2'>
            <CategoryCard category={category} />
          </div>
        ))}
        {categories.slice(5, 9)?.map(category => (
          <CategoryCard key={category.idCategory} category={category} />
        ))}
        {categories.slice(9, 12)?.map(category => (
          <CategoryCard key={category.idCategory} category={category} />
        ))}
        {categories.slice(12, 13)?.map(category => (
          <div key={category.idCategory} className='col-span-2'>
            <CategoryCard category={category} />
          </div>
        ))}
        {categories.slice(13, categories.length)?.map(category => (
          <CategoryCard key={category.idCategory} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
