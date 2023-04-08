import { Link } from 'react-router-dom';
import { Paths } from '../../constants';

function NotFound() {
  return (
    <div className='h-screen flex items-center justify-center flex-col gap-8'>
      <h2 className='text-5xl'>404 - PAGE NOT FOUND</h2>
      <Link
        to={Paths.HOME}
        className='inline-block px-6 py-4 bg-teal-800 rounded-lg text-white hover:bg-teal-700'
      >
        Back To Home
      </Link>
    </div>
  );
}

export default NotFound;
