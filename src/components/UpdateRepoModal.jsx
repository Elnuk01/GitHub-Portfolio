import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import axios from 'axios';

const UpdateRepoModal = ({ isOpen, onClose, repo, refreshRepos }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (repo) {
      setName(repo.name);
      setDescription(repo.description);
    }
  }, [repo]);

  const handleUpdate = async () => {
    try {
      await axios.patch(
        `https://api.github.com/repos/Elnuk01/${repo.name}`,
        {
          name,
          description,
        },
        {
          headers: {
            Authorization: `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`,
          },
        }
      );
      refreshRepos();
      onClose();
    } catch (error) {
      console.error('Error updating repository', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Repository</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Repository Name"
            />
          </FormControl>
          <FormControl id="description" mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Repository Description"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateRepoModal;
