import React from 'react';
import CardsProvider from './src/services/cards/CardsContext';
import {TabNavigator} from './src/infrastructure/navigation/TabNavigator';

const App = () => {
  return (
    <CardsProvider>
      <TabNavigator />
    </CardsProvider>
  );
};

export default App;
