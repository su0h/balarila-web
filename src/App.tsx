import React, { FC } from 'react';
import { HomePage } from './components/pages';

import { ChakraProvider } from '@chakra-ui/react';

const App: FC = () => {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
};

export default App;
