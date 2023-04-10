export type State = {
  limit: number;
  offset: number;
  setLimit: (limit: number) => void;
  setOffset: (offset: number) => void;
};

export type Props = {
  children: React.ReactNode;
};
