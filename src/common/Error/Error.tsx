import Container from '../Container';

type Props = {
  children: React.ReactNode;
};

function Error({ children }: Props) {
  return (
    <Container>
      <h2 className='text-3xl'>{children}</h2>
    </Container>
  );
}

export default Error;
