import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import FavoritesSidebar from './common/Favorites/FavoritesSidebar';
import FavoritesButton from './common/Favorites/FavoritesButton';
import { Routes, Route } from 'react-router-dom';
import { Paths } from './constants';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={Paths.HOME} element={<Home />} />
          <Route path={`${Paths.DETAILS}/:id`} element={<Details />} />
          <Route path={`${Paths.SEARCH}/:name`} element={<Search />} />
          <Route path={Paths.NOTFOUND} element={<NotFound />} />
        </Routes>
        <FavoritesSidebar />
        <FavoritesButton />
      </main>
    </>
  );
}

export default App;
