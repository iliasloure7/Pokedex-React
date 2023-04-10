import { createContext, useContext, useState } from 'react';
import { State, Props } from './types';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Pokemon } from '../../api/PokemonApi/types';

const FavoritesPokemonsContext = createContext<State | undefined>(undefined);

const FavoritesPokemonsProvider = ({ children }: Props) => {
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
    favoritesPokemons,
    setFavoritesPokemons,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <FavoritesPokemonsContext.Provider value={values}>
      {children}
    </FavoritesPokemonsContext.Provider>
  );
};

export const useFavoritesPokemonsContext = () => {
  const context = useContext(FavoritesPokemonsContext);

  if (context === undefined) {
    throw new Error(
      'useFavoritesPokemonsContext must be used within an FavoritesPokemonsProvider'
    );
  }

  return context;
};

export default FavoritesPokemonsProvider;
