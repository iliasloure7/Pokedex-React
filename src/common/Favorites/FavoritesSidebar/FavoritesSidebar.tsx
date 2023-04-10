import Overlay from '../../Overlay';
import Avatar from '../../Avatar/Avatar';
import { AiOutlineClose } from 'react-icons/ai';
import { usePokemonContext } from '../../../context/PokemonProvider/PokemonProvider';

function FavoritesSidebar() {
  const {
    toggleSidebar,
    setToggleSidebar,
    favoritesPokemons,
    removeFromFavorites,
  } = usePokemonContext();

  return toggleSidebar ? (
    <Overlay alignItems='' justifyContent='flex-end'>
      <div className='bg-white w-80 p-6 overflow-auto'>
        <AiOutlineClose
          size={30}
          className='relative left-full -translate-x-12 cursor-pointer'
          onClick={() => setToggleSidebar(false)}
        />
        <div className='flex flex-col gap-6 mt-6'>
          <h2 className='text-2xl font-bold'>
            Favorites ({favoritesPokemons.length})
          </h2>
          {favoritesPokemons.map((p) => {
            return (
              <div key={p.name} className='flex gap-4'>
                <Avatar pokemon={p} size='w-36' />
                <div className='self-center'>
                  <p className='font-bold mb-2'>{p.name}</p>
                  <button
                    className='btn btn-primary'
                    onClick={() => removeFromFavorites(p)}
                  >
                    remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Overlay>
  ) : null;
}

export default FavoritesSidebar;
