import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Image, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import template_image from '../../Assets/template-image.png';
const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9191/api/feedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <VStack spacing={2} align="start">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Feedback List
      </Text>
      <SimpleGrid columns={3} spacing={4}>
        {feedbacks.map(feedback => (
          <Box
            key={feedback.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            {feedback.FeedbackImage ? (
              <Image
                src={`data:image/png;base64,${feedback.FeedbackImage}`}
                alt="Feedback"
              />
            ) : (
              <Image src={template_image} alt="Default" />
            )}
            <VStack p={4} align="start">
              <Text fontWeight="bold">{feedback.name}</Text>
              <Text>{feedback.emailID}</Text>
              <Text>{feedback.feedbackText}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ViewFeedback;
