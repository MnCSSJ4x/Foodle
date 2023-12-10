import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Box,
} from '@chakra-ui/react';
import TimeCard from './TimeCard';

const MessMenuTab = () => {
  const fetchMenu = async () => {};
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Monday</Tab>
          <Tab>Tuesday</Tab>
          <Tab>Wednesday</Tab>
          <Tab>Thursday</Tab>
          <Tab>Friday</Tab>
          <Tab>Saturday</Tab>
          <Tab>Sunday</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TimeCard></TimeCard>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default MessMenuTab;
