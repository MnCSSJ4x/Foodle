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
} from '@chakra-ui/react';

const ServiceForm = () => {
  const [requestTitle, setRequestTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('dummy@example.com');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Request Title:', requestTitle);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Additional Information:', additionalInfo);
    console.log('Comments:', comments);
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

        <FormControl id="comments">
          <FormLabel>Any Comments</FormLabel>
          <Textarea
            placeholder="Write your comments here..."
            value={comments}
            onChange={e => setComments(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="blackAlpha" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Container>
  );
};

export default ServiceForm;
