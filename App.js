import React from 'react';
import CardsProvider from './src/services/cards/CardsContext';
import {TabNavigator} from './src/infrastructure/navigation/TabNavigator';
import DeckProvider from './src/services/cards/DeckContext';

const App = () => {
  return (
    <CardsProvider>
      <DeckProvider>
        <TabNavigator />
      </DeckProvider>
    </CardsProvider>
  );
};

export default App;
