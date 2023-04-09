import Avatar from '../../common/Avatar';
import Card from '../../common/Card';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Pokemon } from '../../api/PokemonApi/types';
import { useState } from 'react';

type Props = {
  pokemon: Pokemon;
};

function PokemonItem({ pokemon }: Props) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <li>
      <Card>
        <Avatar {...pokemon} />
        <div className='flex items-center justify-between p-4'>
          <h2 className='text-xl'>{pokemon.name}</h2>
          {!isFavorite && (
            <MdFavoriteBorder
              size={24}
              className='cursor-pointer text-red-500'
              onClick={() => setIsFavorite(true)}
            />
          )}
          {isFavorite && (
            <MdFavorite
              size={24}
              className='cursor-pointer text-red-500'
              onClick={() => setIsFavorite(false)}
            />
          )}
        </div>
      </Card>
    </li>
  );
}

export default PokemonItem;
