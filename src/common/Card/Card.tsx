type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      {children}
    </div>
  );
}

export default Card;
