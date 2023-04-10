import { MdFavorite } from 'react-icons/md';
import { usePokemonContext } from '../../../context/PokemonProvider/PokemonProvider';

function FavoritesButton() {
  const { setToggleSidebar } = usePokemonContext();

  return (
    <button
      className='fixed w-14 h-14 right-8 bottom-8 bg-red-500 rounded-full text-white flex items-center justify-center cursor-pointer'
      onClick={() => setToggleSidebar(true)}
    >
      <MdFavorite size={30} />
    </button>
  );
}

export default FavoritesButton;
