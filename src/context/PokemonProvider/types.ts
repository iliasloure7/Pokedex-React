import { Pokemon } from '../../api/PokemonApi/types';

export type State = {
  limit: number;
  offset: number;
  toggleSidebar: boolean;
  favoritesPokemons: Array<Pokemon>;
  setLimit: (limit: number) => void;
  setOffset: (offset: number) => void;
  setToggleSidebar: (toggleSidebar: boolean) => void;
  setFavoritesPokemons: (pokemons: Array<Pokemon>) => void;
  addToFavorites: (pokemon: Pokemon) => void;
  removeFromFavorites: (pokemon: Pokemon) => void;
};

export type Props = {
  children: React.ReactNode;
};
