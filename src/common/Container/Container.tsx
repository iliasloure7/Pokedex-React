type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return <div className='container max-w-7xl mx-auto p-4'>{children}</div>;
}

export default Container;
