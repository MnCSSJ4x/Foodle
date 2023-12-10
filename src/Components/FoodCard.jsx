import { VStack } from '@chakra-ui/react';
import React from 'react';
import TemplateImage from '../Assets/template-image.png';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
const FoodCard = props => {
  return (
    <div>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '200px' }}
          src={TemplateImage}
          alt="Food Item"
        />

        <Stack>
          <CardBody>
            <Heading size="md">Food Name</Heading>

            <Text py="2">Food Description</Text>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
};

export default FoodCard;
