import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
const Navbar = ({ changeTab }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="black"
      color="whiteAlpha.900"
    >
      <Box>
        <Link href="/" fontSize="xl" fontWeight="bold">
          IIITB Mess Management System
        </Link>
      </Box>

      {/* Navigation Links */}
      <HStack
        display={{ base: 'none', md: 'flex' }}
        spacing={2}
        align="center"
        direction="column"
      >
        <Button
          colorScheme="whiteAlpha"
          variant="solid"
          onClick={() => {
            changeTab('first');
          }}
        >
          View Mess Menu
        </Button>
        <Button
          colorScheme="whiteAlpha"
          variant="solid"
          onClick={() => {
            changeTab('second');
          }}
        >
          Canteen Menu
        </Button>
        <Button
          colorScheme="whiteAlpha"
          variant="solid"
          onClick={() => {
            changeTab('third');
          }}
        >
          Provide Feedback
        </Button>
        <Button
          colorScheme="whiteAlpha"
          variant="solid"
          onClick={() => {
            changeTab('fourth');
          }}
        >
          Raise a request
        </Button>
      </HStack>

      {/* Mobile Menu Button */}
      <Box display={{ base: 'flex', md: 'none' }} spacing={4}>
        <VStack>
          <Button colorScheme="whiteAlpha" size="md">
            View Mess Menu
          </Button>
          <Button colorScheme="whiteAlpha" size="md">
            Canteen Menu
          </Button>
          <Button colorScheme="whiteAlpha" size="md">
            Provide Feedback
          </Button>
          <Button colorScheme="whiteAlpha" size="md">
            Raise a request
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
