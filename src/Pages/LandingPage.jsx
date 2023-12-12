import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import axios from 'axios';
import BACKEND_URL from '../constant';


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const LandingPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = e => {
    // Capture the value from the input field
    const newText = e.target.value;
    setEmail(newText);
    // console.log(email);
  };
  const register = async event => {
    event.preventDefault();
    try {
      console.log(BACKEND_URL);
      const response = await axios.get(BACKEND_URL + 'api/users/' + email);
      let userRole = response['data']['role'];
      let userEmail = response['data']['emailID'];
      console.log(userRole);
      if (userRole === 'admin') {
        router('/admin', { state: { role: userRole, email: userEmail } });
      } else {
        router('/home', { state: { role: userRole, email: userEmail } });
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="black" />
        <Heading color="black">Welcome</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="gray"
                width="full"
                onClick={e => register(e)}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LandingPage;
