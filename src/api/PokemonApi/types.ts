export type Pokemon = {
  name: string;
  url: string;
};

export type PaginatedPokemons<T> = {
  count: string;
  next: string;
  previous: string | null;
  results: T;
};

export type Details = {
  id: string;
  name: string;
  weight: number;
  height: number;
  stats: Array<{ base_stat: number }>;
  types: Array<{ type: { name: string } }>;
  forms: Array<Pokemon>;
};
