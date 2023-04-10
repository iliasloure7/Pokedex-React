export type State = {
  toggleSidebar: boolean;
  setToggleSidebar: (toggleSidebar: boolean) => void;
};

export type Props = {
  children: React.ReactNode;
};
