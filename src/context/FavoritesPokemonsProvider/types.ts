import { Pokemon } from '../../api/PokemonApi/types';

export type State = {
  favoritesPokemons: Array<Pokemon>;
  setFavoritesPokemons: (pokemons: Array<Pokemon>) => void;
  addToFavorites: (pokemon: Pokemon) => void;
  removeFromFavorites: (pokemon: Pokemon) => void;
};

export type Props = {
  children: React.ReactNode;
};
