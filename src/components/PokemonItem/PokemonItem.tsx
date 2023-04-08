import Avatar from '../../common/Avatar';
import Card from '../../common/Card';
import { Pokemon } from '../../api/PokemonApi/types';

type Props = {
  pokemon: Pokemon;
};

function PokemonItem({ pokemon }: Props) {
  return (
    <li>
      <Card>
        <Avatar {...pokemon} />
        <h2 className='p-4 text-xl'>{pokemon.name}</h2>
      </Card>
    </li>
  );
}

export default PokemonItem;
