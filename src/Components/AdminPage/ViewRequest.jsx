import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Button, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
const ViewRequest = () => {
  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:9191/api/service-requests'
        );

        setServiceRequests(response.data);
      } catch (error) {
        console.error('Error fetching service requests data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleResolve = async requestId => {
    try {
      await axios.patch(
        `http://localhost:9191/api/service-requests/${requestId}?status=resolved`
      );
      // Assuming your API has an endpoint for updating the status to "resolved"
      // You may need to adjust the API endpoint based on your backend implementation
      const updatedServiceRequests = serviceRequests.map(request =>
        request.id === requestId ? { ...request, status: 'resolved' } : request
      );
      console.log('done');
      setServiceRequests(updatedServiceRequests);
    } catch (error) {
      console.error('Error resolving service request:', error);
    }
  };
  console.log(serviceRequests[0]);
  return (
    <VStack spacing={8} align="start">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Service Requests List
      </Text>
      <SimpleGrid columns={3} spacing={4}>
        {serviceRequests.map(request => (
          <Box
            key={request.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <VStack p={4} align="start">
              <Text fontWeight="bold">{request.requestType}</Text>
              <Text>{request.name}</Text>
              <Text>{request.email}</Text>
              <Text>{request.phoneNumber}</Text>
              <Text>{request.additionalInfo}</Text>
              {request.status !== 'resolved' ? (
                <Button
                  colorScheme="blackAlpha"
                  onClick={() => handleResolve(request.id)}
                >
                  Resolve
                </Button>
              ) : (
                <Text color="green">Resolved</Text>
              )}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ViewRequest;
