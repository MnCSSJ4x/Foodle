import React, { useState } from 'react';
import Navbar from '../Components/UserPage/Navbar';
import { Tabs, VStack } from '@chakra-ui/react';
import ViewTabs from '../Components/UserPage/ViewTabs';
import { useLocation } from 'react-router-dom';
const UserPage = () => {
  const [btnClicked, setbtnClicked] = useState('None');
  const location = useLocation();
  const { role, email } = location.state || {};
  return (
    <VStack display={{ base: 'none', md: 'flex' }} spacing={4} align="stretch">
      <Navbar changeTab={setbtnClicked} />
      <ViewTabs tab={btnClicked} emailId={email} />
    </VStack>
  );
};

export default UserPage;
