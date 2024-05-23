import { Box, Heading, Text, Link, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const RepoCard = ({ repo, refreshRepos, openUpdateModal }) => {
    const handleDelete = async () => {
        try {
          await axios.delete(`https://api.github.com/repos/Elnuk01/${repo.name}`, {
            headers: {
              Authorization: `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`,
            },
          });
          refreshRepos();
        } catch (error) {
          console.error('Error deleting repository', error);
        }
      };
    
      return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Heading size="md">{repo.name}</Heading>
          <Text mt={2}>{repo.description}</Text>
          <Link as={RouterLink} to={`/repo/${repo.name}`} color="teal.500" marginRight={10} mt={2}>
            View Details
          </Link>
          <Button colorScheme="red" mt={2} onClick={handleDelete}>
            Delete
          </Button>
          <Button colorScheme="yellow" mt={2} ml={2} onClick={() => openUpdateModal(repo)}>
            Update
          </Button>
        </Box>
      );
    }; 
//   return (
//     <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
//       <Heading size="md">{repo.name}</Heading>
//       <Text mt={2}>{repo.description}</Text>
//       <Link as={RouterLink} to={`/repo/${repo.name}`} color="teal.500" mt={2}>
//         View Details
//       </Link>
//     </Box>
//   );



// const RepoCard = ({ repo, refreshRepos, openUpdateModal }) => {
//     const handleDelete = async () => {
//       try {
//         await axios.delete(`https://api.github.com/repos/YOUR_USERNAME/${repo.name}`, {
//           headers: {
//             Authorization: `token YOUR_GITHUB_PERSONAL_ACCESS_TOKEN`,
//           },
//         });
//         refreshRepos();
//       } catch (error) {
//         console.error('Error deleting repository', error);
//       }
//     };
  
//     return (
//       <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
//         <Heading size="md">{repo.name}</Heading>
//         <Text mt={2}>{repo.description}</Text>
//         <Link as={RouterLink} to={`/repo/${repo.name}`} color="teal.500" mt={2}>
//           View Details
//         </Link>
//         <Button colorScheme="red" mt={2} onClick={handleDelete}>
//           Delete
//         </Button>
//         <Button colorScheme="yellow" mt={2} ml={2} onClick={() => openUpdateModal(repo)}>
//           Update
//         </Button>
//       </Box>
//     );
//   };

export default RepoCard;
