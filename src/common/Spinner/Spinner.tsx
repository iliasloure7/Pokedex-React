import Overlay from '../Overlay';
import spinner from '../../assets/images/svg/spinner.svg';

function Spinner() {
  return (
    <Overlay alignItems='items-center' justifyContent='justify-center'>
      <img src={spinner} alt='spinner' />
    </Overlay>
  );
}

export default Spinner;
