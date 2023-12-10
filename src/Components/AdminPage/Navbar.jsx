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
          IIITB Mess Management System - Admin
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
          View/Edit Mess Menu
        </Button>
        <Button
          colorScheme="whiteAlpha"
          variant="solid"
          onClick={() => {
            changeTab('second');
          }}
        >
          View/Edit Canteen Menu
        </Button>
        <Button
          colorScheme="whiteAlpha"
          variant="solid"
          onClick={() => {
            changeTab('third');
          }}
        >
          View Feedbacks
        </Button>
        <Button
          colorScheme="whiteAlpha"
          variant="solid"
          onClick={() => {
            changeTab('fourth');
          }}
        >
          Resolve Requests
        </Button>
      </HStack>

      {/* Mobile Menu Button */}
      <Box display={{ base: 'flex', md: 'none' }} spacing={4}>
        <VStack>
          <Button
            colorScheme="whiteAlpha"
            size="md"
            onClick={() => {
              changeTab('first');
            }}
          >
            View/Edit Mess Menu
          </Button>
          <Button
            colorScheme="whiteAlpha"
            size="md"
            onClick={() => {
              changeTab('second');
            }}
          >
            View/Edit Canteen Menu
          </Button>
          <Button
            colorScheme="whiteAlpha"
            size="md"
            onClick={() => {
              changeTab('third');
            }}
          >
            View Feedbacks
          </Button>
          <Button
            colorScheme="whiteAlpha"
            size="md"
            onClick={() => {
              changeTab('fourth');
            }}
          >
            Resolve Requests
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Navbar;
