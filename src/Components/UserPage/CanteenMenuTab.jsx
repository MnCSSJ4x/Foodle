import React, { useEffect, useState } from 'react';

import FoodCard from './FoodCard';
import { VStack } from '@chakra-ui/react';
import BACKEND_URL from '../../constant';
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
        <VStack>
          {canteenData.map(item => (
            <FoodCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))}
        </VStack>
      )}
    </div>
  );
};

export default CanteenMenuTab;
