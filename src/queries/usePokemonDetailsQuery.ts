import { useQuery } from '@tanstack/react-query';
import { getPokemonDetails } from '../api/PokemonApi';

export const usePokemonDetailsQuery = (id: string) =>
  useQuery({
    queryKey: ['details', id],
    queryFn: () => getPokemonDetails(id),
  });
