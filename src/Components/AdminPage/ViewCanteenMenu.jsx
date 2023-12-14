import React from 'react'
import { useState, useEffect } from 'react'
import { Button, useDisclosure, Input } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Box, VStack, Text, Image, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios'
import BACKEND_URL from '../../constant'
import template_image from '../../Assets/template-image.png';

const ViewCanteenMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BACKEND_URL+'api/canteen');
        setMenuItems(response.data);
        setLoading(false);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchData();
  }, []);


  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState()
  const [images, setImages] = useState([])

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const json = JSON.stringify({ 
        title: name,
        description: description,
        price: Number(price)
       });

      await axios.post(BACKEND_URL + 'api/canteen', json, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setName('')
      setDescription('')
      setPrice('')
    }
    catch (error) {
      console.log(error)
    }
    finally {
      onClose()
    }

  }

  return ( 
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
        <Button onClick={onOpen}>Add Item to Menu</Button>

        <Modal initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Item to Menu</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Item Name</FormLabel>
                  <Input value={name} onChange={e => setName(e.target.value)} placeholder='Item Name' />
                </FormControl>
                <FormControl>
                  <FormLabel>Item Description</FormLabel>
                  <Input value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' />
                </FormControl>
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input value={price} onChange={e => setPrice(Number(e.target.value))} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>

        <SimpleGrid columns={6} spacing={4}>
          {menuItems.map(item => (
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
      </div>
      )}
    </div>
  )
}

export default ViewCanteenMenu