import React from 'react';
import { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import FoodCard from './FoodCard';
import BACKEND_URL from '../../constant';
import template_image from '../../Assets/template-image.png';

const TimeCard = (day) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [lunchItems, setLunchItems] = useState([]);
  const [dinnerItems, setDinnerItems] = useState([]);
  const [snacksItems, setSnacksItems] = useState([]); 

  useEffect(() => {
    const fetchMenu = async () => {
      // console.log(day['day']);
      try {
        const response = await fetch(BACKEND_URL + 'api/days/' + day['day']);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMenu(data);
        for(var i=0; i<data['menus'].length; i++) {
          if(data['menus'][i]['type'] == 0) {
            // console.log("Breakfast")
            console.log(data['menus'][i]['foodItems'])
            setBreakfastItems(data['menus'][i]['foodItems']);
          }
          if(data['menus'][i]['type'] == 1) {
            setLunchItems(data['menus'][i]['foodItems']);
          }
          if(data['menus'][i]['type'] == 2) {
            setDinnerItems(data['menus'][i]['foodItems']);
          }
          if(data['menus'][i]['type'] == 3) {
            setSnacksItems(data['menus'][i]['foodItems']);
          }
          // console.log(data['menus'][i]);
        }
      }
      catch(error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }

    fetchMenu();
  }, []);
  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading && (
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
          <SimpleGrid columns={6} spacing={4}>
            {/* <FoodCard></FoodCard> */}
            {breakfastItems.map(item => (
              <Box
              key={item.name}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              {item.foodImage ? (
                <Image
                  src={`data:image/png;base64,${item.foodImage}`}
                  alt="Feedback"
                />
              ) : (
                <Image src={template_image} alt="Default" />
              )}
              <VStack p={4} align="start">
                <Text fontWeight="bold">{item.name}</Text>
                <Text>{item.description}</Text>
                {/* <Text>{item.price}</Text> */}
              </VStack>
            </Box>
            
            ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
          <SimpleGrid columns={6} spacing={4}>
          {lunchItems.map(item => (
              <Box
              key={item.name}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              {item.foodImage ? (
                <Image
                  src={`data:image/png;base64,${item.foodImage}`}
                  alt="Feedback"
                />
              ) : (
                <Image src={template_image} alt="Default" />
              )}
              <VStack p={4} align="start">
                <Text fontWeight="bold">{item.name}</Text>
                <Text>{item.description}</Text>
                {/* <Text>{item.price}</Text> */}
              </VStack>
            </Box>
            
            ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={6} spacing={4}>
              {dinnerItems.map(item => (
                <Box
                key={item.name}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                {item.foodImage ? (
                  <Image
                    src={`data:image/png;base64,${item.foodImage}`}
                    alt="Feedback"
                  />
                ) : (
                  <Image src={template_image} alt="Default" />
                )}
                <VStack p={4} align="start">
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text>{item.description}</Text>
                  {/* <Text>{item.price}</Text> */}
                </VStack>
              </Box>
              
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={6} spacing={4}>
              {snacksItems.map(item => (
                <Box
                key={item.name}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                {item.foodImage ? (
                  <Image
                    src={`data:image/png;base64,${item.foodImage}`}
                    alt="Feedback"
                  />
                ) : (
                  <Image src={template_image} alt="Default" />
                )}
                <VStack p={4} align="start">
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text>{item.description}</Text>
                  {/* <Text>{item.price}</Text> */}
                </VStack>
              </Box>
              
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    )}
    </div>
  );
};

export default TimeCard;
