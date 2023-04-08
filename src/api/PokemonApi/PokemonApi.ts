import axios from 'axios';
import { Details, PaginatedPokemons, Pokemon } from './types';

export const getPokemons = async (
  limit: number,
  offset: number
): Promise<PaginatedPokemons<Pokemon[]>> => {
  const { data } = await axios.get<PaginatedPokemons<Pokemon[]>>(
    `${import.meta.env.VITE_POKEMON_API_URL}?limit=${limit}&offset=${offset}`
  );

  return data;
};

export const getPokemon = async (name: string) => {
  const { data } = await axios.get<Details>(
    `${import.meta.env.VITE_POKEMON_API_URL}/${name}`
  );

  return data;
};

export const getPokemonDetails = async (id: string) => {
  const { data } = await axios.get<Details>(
    `${import.meta.env.VITE_POKEMON_API_URL}/${id}`
  );

  return {
    id: data.id,
    name: data.name,
    weight: data.weight,
    height: data.height,
    stats: data.stats,
    types: data.types,
    forms: data.forms,
  };
};
