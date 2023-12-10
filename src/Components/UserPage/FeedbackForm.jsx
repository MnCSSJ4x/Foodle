import React from 'react';
import { useState } from 'react';
import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Box,
} from '@chakra-ui/react';
const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('dummy@example.com');
  const [feedback, setFeedback] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = e => {
    // Handle file uploads
    const fileList = e.target.files;
    const imageArray = Array.from(fileList);
    setImages(imageArray);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);
    console.log('Images:', images);
  };

  return (
    <Container maxW="xl" centerContent>
      <VStack spacing={8} align="stretch">
        <FormControl id="name">
          <FormLabel>Name (Optional)</FormLabel>
          <Input
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            isReadOnly
          />
        </FormControl>

        <FormControl id="feedback" isRequired>
          <FormLabel>Feedback</FormLabel>
          <Textarea
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
          />
        </FormControl>

        <FormControl id="images">
          <FormLabel>Upload Images</FormLabel>
          <Input type="file" multiple onChange={handleImageChange} />
        </FormControl>

        <Button colorScheme="blackAlpha" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
      {images.length > 0 && (
        <Box mt={4}>
          <strong>Selected Images:</strong>
          <ul>
            {images.map((image, index) => (
              <li key={index}>{image.name}</li>
            ))}
          </ul>
        </Box>
      )}
    </Container>
  );
};

export default FeedbackForm;
