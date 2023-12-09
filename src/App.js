import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import AppRoutes from './AppRoutes';


function App() {
  return (
    <>
      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
