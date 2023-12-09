import React from 'react'
import { ChakraProvider, CSSReset, Box, Flex, Spacer, Link, Button, VStack } from '@chakra-ui/react';
const Navbar = () => {
    return (
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          padding="1rem"
          bg="black"
          color="white"
        >
          {/* Brand/Logo */}
          <Box>
            <Link href="/" fontSize="xl" fontWeight="bold">
              Your Logo
            </Link>
          </Box>
    
          {/* Navigation Links */}
          <VStack
            display={{ base: 'none', md: 'flex' }}
            spacing={4}
            align="center"
            direction="row"
          >
            <Link href="#" fontSize="md">
              Food Menu
            </Link>
            <Link href="#" fontSize="md">
              Canteen Menu
            </Link>
            <Link href="#" fontSize="md">
              Raise a Service Request
            </Link>
            <Link href="#" fontSize="md">
              Feedback
            </Link>
          </VStack>
    
          {/* Mobile Menu Button */}
          <Box display={{ base: 'flex', md: 'none' }}>
            <Button colorScheme="teal" size="md">
              Menu
            </Button>
          </Box>
        </Flex>
      );
};

    

export default Navbar