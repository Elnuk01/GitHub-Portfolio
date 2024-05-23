import { Container } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container maxW="container.xl" mt={4}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
