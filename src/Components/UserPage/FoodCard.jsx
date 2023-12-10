import { VStack } from '@chakra-ui/react';
import React from 'react';
import TemplateImage from '../../Assets/template-image.png';
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
  console.log(props);
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
          src={props.Image != undefined ? props.Image : TemplateImage}
          alt="Food Item"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{props.title}</Heading>
            <Text py="2">{props.description}</Text>
            {props.price != undefined ? (
              <Heading size="sm">{props.price}</Heading>
            ) : (
              <></>
            )}
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
};

export default FoodCard;
