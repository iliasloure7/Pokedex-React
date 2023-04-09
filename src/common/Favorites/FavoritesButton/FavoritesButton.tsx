import { MdFavorite } from 'react-icons/md';

function FavoritesButton() {
  return (
    <button className='fixed w-16 h-16 right-8 bottom-8 bg-red-500 rounded-full text-white flex items-center justify-center'>
      <MdFavorite size={30} />
    </button>
  );
}

export default FavoritesButton;
