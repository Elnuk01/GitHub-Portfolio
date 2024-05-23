import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Spinner } from '@chakra-ui/react';
import axios from 'axios';

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async () => {
      setLoading(true);
      const { data } = await axios.get(`https://api.github.com/repos/Elnuk01/${repoName}`, {
        headers: {
          Authorization: `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`
        }
      });
      setRepo(data);
      setLoading(false);
    };
    fetchRepo();
  }, [repoName]);

  return (
    <Box>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <Box>
          <Heading>{repo.name}</Heading>
          <Text mt={2}>{repo.description}</Text>
          <Text mt={2}>Stars: {repo.stargazers_count}</Text>
          <Text mt={2}>Forks: {repo.forks_count}</Text>
          <Text mt={2}>Open Issues: {repo.open_issues_count}</Text>
        </Box>
      )}
    </Box>
  );
};

export default RepoDetails;
