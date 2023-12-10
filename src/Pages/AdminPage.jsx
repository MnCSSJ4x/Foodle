import { VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/AdminPage/Navbar';
import ViewTabs from '../Components/AdminPage/ViewTabs';
const AdminPage = () => {
  const [btnClicked, setbtnClicked] = useState('None');
  const location = useLocation();
  const { role, email } = location.state || {};
  return (
    <VStack display={{ base: 'none', md: 'flex' }} spacing={4} align="stretch">
      <Navbar changeTab={setbtnClicked}></Navbar>
      <ViewTabs tab={btnClicked} emailId={email}></ViewTabs>
    </VStack>
  );
};

export default AdminPage;
