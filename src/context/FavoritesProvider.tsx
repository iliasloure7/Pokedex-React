import { createContext, useContext, useState } from 'react';

type State = {
  isFavoritesVisible: boolean;
  setIsFavoritesVisible: (isFavoritesVisible: boolean) => void;
};

const FavoritesContext = createContext<State | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

const FavoritesProvider = ({ children }: Props) => {
  const [isFavoritesVisible, setIsFavoritesVisible] = useState<boolean>(false);

  return (
    <FavoritesContext.Provider
      value={{ isFavoritesVisible, setIsFavoritesVisible }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error(
      'useFavoritesContext must be used within an FavoritesProvider'
    );
  }

  return context;
};

export default FavoritesProvider;
