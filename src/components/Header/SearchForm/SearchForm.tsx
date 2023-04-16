import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../constants';
import { AiOutlineSearch } from 'react-icons/ai';

type InputProps = {
  search: string;
};

function SearchForm() {
  const { register, handleSubmit, resetField } = useForm<InputProps>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<InputProps> = ({ search }) => {
    resetField('search');
    navigate(`${Paths.SEARCH}/${search.trim().toLowerCase()}`);
  };

  return (
    <form
      className='flex gap-4 items-center justify-center lg:basis-2/5 relative'
      onSubmit={handleSubmit(onSubmit)}
      autoComplete='off'
    >
      <label
        htmlFor='search'
        className='absolute top-1/2 -translate-y-1/2 left-2'
      >
        <AiOutlineSearch size={25} className=' text-neutral-400' />
      </label>
      <input
        id='search'
        type='text'
        placeholder='Search pokemon'
        className='border-2 border-neutral-300 rounded-md pl-10 py-2 w-full focus:outline-none focus:border-teal-700'
        {...register('search', {
          required: true,
        })}
      />
      <button className='btn btn-primary tracking-wider'>Search</button>
    </form>
  );
}

export default SearchForm;
