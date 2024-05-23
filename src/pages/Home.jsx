import { useState, useEffect } from 'react';
import { Box, SimpleGrid, Spinner, Button, Input, Heading } from '@chakra-ui/react';
import axios from 'axios';
import RepoCard from '../components/RepoCard';
import SearchFilter from '../components/SearchFilter';
import CreateRepoModal from '../components/CreateRepoModal';
import UpdateRepoModal from '../components/UpdateRepoModal';

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const username = 'Elnuk01'; // Replace with your GitHub username

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`,
        {
          headers: {
            Authorization: `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`
          }
        }
      );
      setRepos(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching repositories', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [page]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const openUpdateModal = (repo) => {
    setSelectedRepo(repo);
    setUpdateModalOpen(true);
  };

  return (
    <Box>
      <Heading color="teal.500" fontWeight="bold">
        Home
      </Heading>
      <Button colorScheme="teal" onClick={() => setCreateModalOpen(true)} mt={4}>
        Create New Repository
      </Button>
      <SearchFilter search={search} handleSearch={handleSearch} />
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing="8">
          {repos
            .filter((repo) =>
              repo.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((repo) => (
              <RepoCard
                key={repo.id}
                repo={repo}
                refreshRepos={fetchRepos} // Pass fetchRepos here
                openUpdateModal={openUpdateModal}
              />
            ))}
        </SimpleGrid>
      )}
      <Box mt={4} display="flex" justifyContent="center">
        <Button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
          Previous
        </Button>
        <Button ml={2} onClick={() => setPage((prev) => prev + 1)}>
          Next
        </Button>
      </Box>
      <CreateRepoModal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        refreshRepos={fetchRepos} // Pass fetchRepos here
      />
      <UpdateRepoModal
        isOpen={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
        repo={selectedRepo}
        refreshRepos={fetchRepos} // Pass fetchRepos here
      />
    </Box>
  );
};

export default Home;
