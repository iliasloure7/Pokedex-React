import Container from '../../common/Container';
import Avatar from '../../common/Avatar';
import Card from '../../common/Card';
import Error from '../../common/Error';
import Spinner from '../../common/Spinner';
import { useParams } from 'react-router-dom';
import { usePokemonQuery } from '../../queries/usePokemonQuery';

function Search() {
  const { name } = useParams();
  const { data, isError, isLoading } = usePokemonQuery(name!);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error>No results found for pokemon: {`"${name}"`}</Error>;
  }

  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <Card>
          <Avatar name={name!} url={data?.forms[0].url!} />
          <h2 className='p-4 text-xl'>{name}</h2>
        </Card>
      </div>
    </Container>
  );
}

export default Search;
