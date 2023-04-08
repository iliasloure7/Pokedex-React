import Logo from './Logo';
import SearchForm from './SearchForm';
import Container from '../../common/Container';

function Header() {
  return (
    <header className='bg-white'>
      <Container>
        <nav className='flex flex-col items-center justify-between gap-4 md:flex-row '>
          <Logo />
          <SearchForm />
        </nav>
      </Container>
    </header>
  );
}

export default Header;
