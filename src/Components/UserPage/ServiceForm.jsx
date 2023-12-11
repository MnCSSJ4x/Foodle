import React, { useState } from 'react';
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
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
import axios from 'axios';
import BACKEND_URL from '../../constant';
const ServiceForm = ({ emailId }) => {
  const [requestTitle, setRequestTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState(emailId);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [status, setStatus] = useState('active');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('requestType', requestTitle);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phoneNumber', phoneNumber);
      formData.append('additionalInfo', additionalInfo);
      formData.append('resolved', status);

      const response = await axios.post(
        BACKEND_URL + 'api/service-requests',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        // Set success message
        setSubmitSuccess(true);

        // Reset form state
        setRequestTitle('');
        setName('');
        setEmail('');
        setPhoneNumber('');
        setAdditionalInfo('');
      } else {
        throw new Error('Failed to submit request');
      }
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
        <FormControl id="requestTitle" isRequired>
          <FormLabel>Request Title</FormLabel>
          <Input
            placeholder="Enter your request title"
            value={requestTitle}
            onChange={e => setRequestTitle(e.target.value)}
          />
        </FormControl>

        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
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

        <FormControl id="phoneNumber" isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="tel"
            placeholder="Your Phone Number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </FormControl>

        <FormControl id="additionalInfo">
          <FormLabel>
            Additional Information{' '}
            <Text as="span" color="gray.500">
              (Hint: Room number for in-room delivery)
            </Text>
          </FormLabel>
          <Input
            placeholder="Enter additional information"
            value={additionalInfo}
            onChange={e => setAdditionalInfo(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="blackAlpha" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
      {submitSuccess !== null && (
        <Alert status={submitSuccess ? 'success' : 'error'} mt={4}>
          <AlertIcon />
          <VStack spacing={1} align="start">
            <AlertTitle>{submitSuccess ? 'Success!' : 'Error!'}</AlertTitle>
            <AlertDescription>
              {submitSuccess
                ? 'Request submitted successfully!'
                : 'Failed to submit request. Please try again.'}
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

export default ServiceForm;
