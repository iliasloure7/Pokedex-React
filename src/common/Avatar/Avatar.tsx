import { Link } from 'react-router-dom';
import { extractIdFromUrl } from '../../utils';
import { Paths } from '../../constants';
import { Pokemon } from '../../api/PokemonApi/types';

type Props = {
  pokemon: Pokemon;
  size?: string;
};

function Avatar({ pokemon, size = 'w-auto' }: Props) {
  const pokemonId = extractIdFromUrl(pokemon.url);

  return (
    <Link to={`${Paths.DETAILS}/${pokemonId}`} draggable={false}>
      <img
        className={`rounded-t-lg bg-gray-200 block mx-auto ${size}`}
        src={`${import.meta.env.VITE_POKEMON_API_IMAGE_URL}/${pokemonId}.png`}
        alt={pokemon.name}
        draggable={false}
      />
    </Link>
  );
}

export default Avatar;
