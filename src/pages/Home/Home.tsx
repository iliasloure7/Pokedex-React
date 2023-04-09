import Container from '../../common/Container';
import PokemonList from '../../components/PokemonList';
import FavoritesButton from '../../common/Favorites/FavoritesButton';

function Home() {
  return (
    <>
      <Container>
        <PokemonList />
      </Container>
      <FavoritesButton />
    </>
  );
}

export default Home;
