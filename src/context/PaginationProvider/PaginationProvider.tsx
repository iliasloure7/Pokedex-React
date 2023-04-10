import { createContext, useContext, useState } from 'react';
import { State, Props } from './types';

const PaginationContext = createContext<State | undefined>(undefined);

function PaginationProvider({ children }: Props) {
  const [limit, setLimit] = useState<number>(12);
  const [offset, setOffset] = useState<number>(0);

  const values = { limit, offset, setLimit, setOffset };

  return (
    <PaginationContext.Provider value={values}>
      {children}
    </PaginationContext.Provider>
  );
}

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);

  if (context === undefined) {
    throw new Error('usePaginationContext must be within a PaginationProvider');
  }

  return context;
};

export default PaginationProvider;
