import Avatar from '../../common/Avatar';
import Card from '../../common/Card';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Pokemon } from '../../api/PokemonApi/types';
import { useFavoritesPokemonsContext } from '../../context/FavoritesPokemonsProvider/FavoritesPokemonsProvider';

type Props = {
  pokemon: Pokemon;
};

function PokemonItem({ pokemon }: Props) {
  const { favoritesPokemons, addToFavorites, removeFromFavorites } =
    useFavoritesPokemonsContext();

  return (
    <li>
      <Card>
        <Avatar pokemon={pokemon} size='w-auto' />
        <div className='flex items-center justify-between p-4'>
          <h2 className='text-xl'>{pokemon.name}</h2>
          {favoritesPokemons.find((p) => p.name === pokemon.name) ? (
            <MdFavorite
              size={24}
              className='cursor-pointer text-red-500'
              onClick={() => removeFromFavorites(pokemon)}
            />
          ) : (
            <MdFavoriteBorder
              size={24}
              className='cursor-pointer text-red-500'
              onClick={() => addToFavorites(pokemon)}
            />
          )}
        </div>
      </Card>
    </li>
  );
}

export default PokemonItem;
