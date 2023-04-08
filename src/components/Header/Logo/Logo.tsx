import pokeball from '../../../assets/images/png/pokeball.png';
import { Link } from 'react-router-dom';
import { Paths } from '../../../constants';

function Logo() {
  return (
    <Link to={Paths.HOME} draggable={false}>
      <img
        src={pokeball}
        alt='pokeball'
        className='w-14 h-14'
        draggable={false}
      />
    </Link>
  );
}

export default Logo;
