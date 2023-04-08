import { createContext, useContext, useState } from 'react';

type State = {
  limit: number;
  offset: number;
  setLimit: (limit: number) => void;
  setOffset: (offset: number) => void;
};

const PokemonContext = createContext<State | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

const PokemonProvider = ({ children }: Props) => {
  const [limit, setLimit] = useState<number>(12);
  const [offset, setOffset] = useState<number>(0);

  return (
    <PokemonContext.Provider value={{ limit, offset, setLimit, setOffset }}>
      {children}
    </PokemonContext.Provider>
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
