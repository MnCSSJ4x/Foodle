import { VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/AdminPage/Navbar';
const AdminPage = () => {
  const [btnClicked, setbtnClicked] = useState('None');
  const location = useLocation();
  const { role, email } = location.state || {};
  return (
    <VStack display={{ base: 'none', md: 'flex' }} spacing={4} align="stretch">
      <Navbar></Navbar>
    </VStack>
  );
};

export default AdminPage;
