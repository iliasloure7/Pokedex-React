import { useState, useEffect } from 'react';
import { Pokemon } from '../api/PokemonApi/types';

export const useLocalStorage = (key: string, defaultValue: Array<Pokemon>) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key) === null) return defaultValue;
    return JSON.parse(localStorage.getItem(key)!);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
