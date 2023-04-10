import { createContext, useContext, useState } from 'react';
import { State, Props } from './types';

const SidebarContext = createContext<State | undefined>(undefined);

function SidebarProvider({ children }: Props) {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  const values = { toggleSidebar, setToggleSidebar };

  return (
    <SidebarContext.Provider value={values}>{children}</SidebarContext.Provider>
  );
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error('useSidebarContext must within SidebarProvider');
  }

  return context;
};

export default SidebarProvider;
