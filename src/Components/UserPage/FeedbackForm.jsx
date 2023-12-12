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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
import axios from 'axios';
import BACKEND_URL from '../../constant';

const FeedbackForm = ({ emailId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(emailId);
  const [feedback, setFeedback] = useState('');
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleImageChange = e => {
    // Handle file uploads
    const fileList = e.target.files;
    const imageArray = Array.from(fileList);
    setImages(imageArray);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('emailID', email);
      formData.append('FeedbackText', feedback);
      formData.append('FeedbackImage', images);

      await axios.post(BACKEND_URL + 'api/feedback', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Set success message
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setFeedback('');
      setImages([]);
    } catch (error) {
      // Set error message
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeAlert = () => {
    setSubmitSuccess(null);
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
      {submitSuccess !== null && (
        <Alert status={submitSuccess ? 'success' : 'error'} mt={4}>
          <AlertIcon />
          <VStack spacing={1} align="start">
            <AlertTitle>{submitSuccess ? 'Success!' : 'Error!'}</AlertTitle>
            <AlertDescription>
              {submitSuccess
                ? 'Feedback submitted successfully!'
                : 'Failed to submit feedback. Please try again.'}
            </AlertDescription>
          </VStack>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={closeAlert}
          />
        </Alert>
      )}
    </Container>
  );
};

export default FeedbackForm;
