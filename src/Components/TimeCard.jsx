import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import FoodCard from './FoodCard';
const TimeCard = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
          <Tab>Snacks</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FoodCard></FoodCard>
          </TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
          <TabPanel>4</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TimeCard;
