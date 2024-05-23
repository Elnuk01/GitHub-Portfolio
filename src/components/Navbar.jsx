import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Heading color="white">GitHub Portfolio</Heading>
        <Flex>
          <Link to="/">Home</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
