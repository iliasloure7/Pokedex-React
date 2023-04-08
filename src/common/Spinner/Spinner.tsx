import spinner from '../../assets/images/svg/spinner.svg';

function Spinner() {
  return (
    <div className='absolute top-0 left-0 w-full h-screen bg-gray-950 opacity-60 flex items-center justify-center'>
      <img src={spinner} alt='spinner' />
    </div>
  );
}

export default Spinner;
