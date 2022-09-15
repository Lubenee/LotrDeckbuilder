import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CardScreen from '../../features/cards/screens/Home/CardScreen';
import ImageScreen from '../../features/cards/screens/ImageScreen';
import DecksScreen from '../../features/cards/screens/Decks/DecksScreen';
import CreateDeckScreen from '../../features/cards/screens/Decks/CreateDeckScreen';
import ExpansionScreen from '../../features/cards/screens/ExpansionScreen';
import DeckContentScreen from '../../features/cards/screens/Decks/DeckContentScreen';

const Stack = createStackNavigator();

const DecksNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DecksList" component={DecksScreen} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Screen name="DeckContent" component={DeckContentScreen} />
      <Stack.Screen name="CreateDeck" component={CreateDeckScreen} />
      <Stack.Screen name="Expansion" component={ExpansionScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
    </Stack.Navigator>
  );
};

export default DecksNavigator;
