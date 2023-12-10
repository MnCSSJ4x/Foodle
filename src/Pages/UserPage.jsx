import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Tabs, VStack } from '@chakra-ui/react';
import ViewTabs from '../Components/ViewTabs';

const UserPage = () => {
  const [btnClicked, setbtnClicked] = useState('None');

  return (
    <VStack display={{ base: 'none', md: 'flex' }} spacing={4} align="stretch">
      <Navbar changeTab={setbtnClicked} />
      <ViewTabs tab={btnClicked} />
    </VStack>
  );
};

export default UserPage;
