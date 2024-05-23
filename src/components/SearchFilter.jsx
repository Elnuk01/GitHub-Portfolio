import { Box, Input } from '@chakra-ui/react';

const SearchFilter = ({ search, handleSearch }) => {
  return (
    <Box mb={4}>
      <Input
        placeholder="Search Repositories..."
        value={search}
        onChange={handleSearch}
        size="lg"
      />
    </Box>
  );
};

export default SearchFilter;
