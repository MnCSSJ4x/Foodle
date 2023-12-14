import React, { useEffect, useState } from 'react';

import FoodCard from './FoodCard';
import { VStack, SimpleGrid, Text, Box, Image } from '@chakra-ui/react';
import BACKEND_URL from '../../constant';
import template_image from '../../Assets/template-image.png';

const CanteenMenuTab = () => {
  const [canteenData, setCanteenData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BACKEND_URL + 'api/canteen');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setCanteenData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        // <VStack>
        <SimpleGrid columns={6} spacing={4}>
          {canteenData.map(item => (
            // <FoodCard
            //   key={item.id}
            //   id={item.id}
            //   title={item.title}
            //   image={item.image}
            //   price={item.price}
            //   description={item.description}
            // />
            <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            {item.image ? (
              <Image
                src={`data:image/png;base64,${item.image}`}
                alt="Feedback"
              />
            ) : (
              <Image src={template_image} alt="Default" />
            )}
            <VStack p={4} align="start">
              <Text fontWeight="bold">{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.price}</Text>
            </VStack>
          </Box>
          ))}
          </SimpleGrid>
        // </VStack>
      )}
    </div>
  );
};

export default CanteenMenuTab;
