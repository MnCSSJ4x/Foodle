import React, { useEffect, useState } from 'react';
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
import BACKEND_URL from '../../constant';

const MessMenuTab = () => {
  

  const fetchMenu = async () => {};
  return (
    <div>
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
                  <TimeCard day='monday'></TimeCard>
                </TabPanel>
                <TabPanel>
                  <TimeCard day='tuesday'></TimeCard>
                </TabPanel>
                <TabPanel>
                  <TimeCard day='wednesday'></TimeCard>
                </TabPanel>
                <TabPanel>
                  <TimeCard day='thursday'></TimeCard>
                </TabPanel>
                <TabPanel>
                  <TimeCard day='friday'></TimeCard>
                </TabPanel>
                <TabPanel>
                  <TimeCard day='saturday'></TimeCard>
                </TabPanel>
                <TabPanel>
                  <TimeCard day='sunday'></TimeCard>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
    </div>
  );
};

export default MessMenuTab;
