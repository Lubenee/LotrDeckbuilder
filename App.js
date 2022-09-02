import React from 'react';
import CardsScreen from './src/features/cards/screens/CardsScreen';
import CardsProvider from './src/services/cards/CardsContext';

const App = () => {
  return (
    <CardsProvider>
      <CardsScreen />
    </CardsProvider>
  );
};

export default App;
