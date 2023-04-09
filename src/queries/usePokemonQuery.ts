import { useQuery } from '@tanstack/react-query';
import { getPokemon } from '../api/PokemonApi';

export const usePokemonQuery = (name: string) =>
  useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => getPokemon(name),
    retry: 1,
  });
