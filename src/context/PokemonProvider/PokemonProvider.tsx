import { createContext, useContext, useState } from 'react';
import { State, Props } from './types';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Pokemon } from '../../api/PokemonApi/types';

const PokemonContext = createContext<State | undefined>(undefined);

const PokemonProvider = ({ children }: Props) => {
  const [limit, setLimit] = useState<number>(12);
  const [offset, setOffset] = useState<number>(0);
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const [favoritesPokemons, setFavoritesPokemons] = useLocalStorage(
    'favorites',
    []
  );

  const addToFavorites = (pokemon: Pokemon) => {
    setFavoritesPokemons([
      ...favoritesPokemons,
      { name: pokemon.name, url: pokemon.url },
    ]);
  };

  const removeFromFavorites = (pokemon: Pokemon) => {
    setFavoritesPokemons(
      favoritesPokemons.filter((p: Pokemon) => {
        return p.name !== pokemon.name;
      })
    );
  };

  const values = {
    limit,
    offset,
    toggleSidebar,
    favoritesPokemons,
    setLimit,
    setOffset,
    setToggleSidebar,
    setFavoritesPokemons,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <PokemonContext.Provider value={values}>{children}</PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);

  if (context === undefined) {
    throw new Error('usePokemoContext must be used within an PokemonProvider');
  }

  return context;
};

export default PokemonProvider;
