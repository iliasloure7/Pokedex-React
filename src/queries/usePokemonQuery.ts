import { useQuery } from '@tanstack/react-query';
import { getPokemon } from '../api/PokemonApi';
import { Details } from '../api/PokemonApi/types';

export const usePokemonQuery = (name: string) =>
  useQuery<Details, Error>({
    queryKey: ['pokemon', name],
    queryFn: () => getPokemon(name),
    retry: 1,
  });
