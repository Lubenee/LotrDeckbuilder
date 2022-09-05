import React from 'react';
import CardsProvider from './src/services/cards/CardsContext';
import AppNavigator from './src/infrastructure/navigation/AppNavigations';

const App = () => {
  return (
    <CardsProvider>
      <AppNavigator />
    </CardsProvider>
  );
};

export default App;
