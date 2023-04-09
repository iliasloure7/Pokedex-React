import { Link } from 'react-router-dom';
import { Paths } from '../../constants';
import { FcHome } from 'react-icons/fc';

function NotFound() {
  return (
    <div className='h-screen flex items-center justify-center text-center flex-col gap-8'>
      <h2 className='text-4xl md:text-5xl'>404 - PAGE NOT FOUND</h2>
      <Link
        to={Paths.HOME}
        className='flex flex-row items-center gap-4 justify-center px-6 py-4 bg-teal-800 rounded-lg text-white hover:bg-teal-700'
      >
        Back To Home <FcHome size={25} />
      </Link>
    </div>
  );
}

export default NotFound;
