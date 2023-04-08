import Container from '../../common/Container';
import Avatar from '../../common/Avatar';
import PokemonDetails from '../../components/PokemonDetails';
import { useParams } from 'react-router-dom';
import { usePokemonDetailsQuery } from '../../queries/usePokemonDetailsQuery';

function Details() {
  const { id } = useParams();
  const { data, isLoading, isError } = usePokemonDetailsQuery(id!);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error...</h3>;
  }

  return (
    <Container>
      <div className='grid grid-cols-1 gap-4 items-center justify-center lg:grid-cols-2'>
        <Avatar name={data.name} url={data.forms[0].url} />
        <PokemonDetails data={data} />
      </div>
    </Container>
  );
}

export default Details;
