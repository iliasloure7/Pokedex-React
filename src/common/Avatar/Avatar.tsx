import { Link } from 'react-router-dom';
import { extractIdFromUrl } from '../../utils';
import { Paths } from '../../constants';
import { useLocation } from 'react-router-dom';

type Props = {
  name: string;
  url: string;
};

function Avatar({ name, url }: Props) {
  const pokemonId = extractIdFromUrl(url);
  const location = useLocation();
  return (
    <Link to={`${Paths.DETAILS}/${pokemonId}`}>
      <img
        className={
          location.pathname !== `${Paths.DETAILS}/${pokemonId}`
            ? `rounded-t-lg bg-gray-200`
            : 'block mx-auto'
        }
        src={`${import.meta.env.VITE_POKEMON_API_IMAGE_URL}/${pokemonId}.png`}
        alt={name}
      />
    </Link>
  );
}

export default Avatar;
