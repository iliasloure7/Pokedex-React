import PokemonItem from '../PokemonItem';
import Pagination from '../Pagination/Pagination';
import { usePokemonsQuery } from '../../queries/usePokemonsQuery';
import { usePokemonContext } from '../../context/PokemonProvider';

function PokemonList() {
  const { limit, offset } = usePokemonContext();
  const { data, isLoading, isError } = usePokemonsQuery(limit, offset);

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>error</h3>;

  return (
    <div>
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.results.map((pokemon) => {
          return <PokemonItem key={pokemon.name} pokemon={pokemon} />;
        })}
      </ul>
      <Pagination />
    </div>
  );
}

export default PokemonList;
