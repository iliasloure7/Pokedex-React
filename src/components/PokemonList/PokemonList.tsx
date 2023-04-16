import PokemonItem from '../PokemonItem';
import Pagination from '../Pagination/Pagination';
import Spinner from '../../common/Spinner';
import Error from '../../common/Error';
import { usePokemonsQuery } from '../../queries/usePokemonsQuery';
import { usePaginationContext } from '../../context/PaginationProvider/PaginationProvider';

function PokemonList() {
  const { limit, offset } = usePaginationContext();
  const { data, isLoading, isError, error } = usePokemonsQuery(limit, offset);

  if (isLoading) return <Spinner />;

  if (isError) return <Error>{error.message}</Error>;

  return (
    <section>
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.results.map((pokemon) => {
          return <PokemonItem key={pokemon.name} pokemon={pokemon} />;
        })}
      </ul>
      <Pagination />
    </section>
  );
}

export default PokemonList;
