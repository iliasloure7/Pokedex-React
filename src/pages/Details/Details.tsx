import Container from '../../common/Container';
import Avatar from '../../common/Avatar';
import PokemonDetails from '../../components/PokemonDetails';
import Spinner from '../../common/Spinner';
import Error from '../../common/Error';
import { useParams } from 'react-router-dom';
import { usePokemonDetailsQuery } from '../../queries/usePokemonDetailsQuery';
import { usePokemonContext } from '../../context/PokemonProvider/PokemonProvider';
import { useEffect } from 'react';

function Details() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = usePokemonDetailsQuery(id!);
  const { toggleSidebar, setToggleSidebar } = usePokemonContext();

  useEffect(() => {
    if (!toggleSidebar) return;
    setToggleSidebar(false);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  return (
    <Container>
      <div className='grid grid-cols-1 gap-4 items-center justify-center lg:grid-cols-2'>
        <Avatar pokemon={{ name: data.name, url: data.forms[0].url }} />
        <PokemonDetails data={data} />
      </div>
    </Container>
  );
}

export default Details;
