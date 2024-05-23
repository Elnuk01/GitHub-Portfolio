import React, { useState } from 'react';
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

const CreateRepoModal = ({ isOpen, onClose, refreshRepos }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = async () => {
    try {
      await axios.post(
        'https://api.github.com/user/repos',
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
      console.error('Error creating repository', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a New Repository</ModalHeader>
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
          <Button colorScheme="blue" mr={3} onClick={handleCreate}>
            Create
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateRepoModal;
