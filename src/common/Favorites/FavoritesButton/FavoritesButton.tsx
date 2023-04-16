import { MdFavorite } from 'react-icons/md';
import { useSidebarContext } from '../../../context/SidebarProvider/SidebarProvider';

function FavoritesButton() {
  const { setToggleSidebar } = useSidebarContext();

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
