import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '../api/PokemonApi';

export const usePokemonsQuery = (limit: number, offset: number) =>
  useQuery({
    queryKey: ['pokemons', limit, offset],
    queryFn: () => getPokemons(limit, offset),
  });
