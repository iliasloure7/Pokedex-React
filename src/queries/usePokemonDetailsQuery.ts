import { useQuery } from '@tanstack/react-query';
import { getPokemonDetails } from '../api/PokemonApi';
import { Details } from '../api/PokemonApi/types';

export const usePokemonDetailsQuery = (id: string) =>
  useQuery<Details, Error>({
    queryKey: ['details', id],
    queryFn: () => getPokemonDetails(id),
    retry: 1,
  });
