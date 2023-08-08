import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

interface Props {
  queryFn?: (queryString: string) => Promise<void>;
  showSearchBar?: boolean;
}

const Header = ({ queryFn, showSearchBar = false }: Props) => {
  const [queryString, setQueryString] = useState<string>('');
  const isButtonDisabled = !queryString.length;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    queryFn?.(queryString);
  }
  return (
    <header className='text-gray-500 bg-gray-100 py-4 text-2xl shadow-md'>
      <form
        onSubmit={e => handleSubmit(e)}
        className='flex flex-col items-center justify-center text-center md:flex md:flex-row md:items-center md:justify-between max-w-screen-2xl mx-auto py-2 px-4'
      >
        <Link href={'/'}>
          <h1 data-cy='title' className='cursor-pointer'>
            Recipe Genie
          </h1>
        </Link>

        <div className='flex w-3/4 sm:w-1/2 justify-center bg-white mt-2 md:mt-0 rounded-md items-center overflow-hidden'>
          {showSearchBar && (
            <>
              <input
                data-cy='search-bar'
                className='w-full px-2 bg-white text-sm outline-none text-gray-500'
                type='text'
                placeholder='Search recipes...'
                onChange={e => setQueryString(e.target.value)}
              />
              <button
                type='submit'
                disabled={isButtonDisabled}
                className={`bg-gray-200 ${
                  isButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
                } px-2 overflow-visible text-gray-500`}
              >
                <MagnifyingGlassIcon
                  className={`h-6 w-6 ${isButtonDisabled && 'text-gray-300'}`}
                />
              </button>
            </>
          )}
        </div>

        <div></div>
      </form>
    </header>
  );
};

export default Header;
