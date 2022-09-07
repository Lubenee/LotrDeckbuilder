import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CardScreen from '../../features/cards/screens/CardScreen';
import ImageScreen from '../../features/cards/screens/ImageScreen';
import DecksScreen from '../../features/cards/screens/DecksScreen';
import CreateDeckScreen from '../../features/cards/screens/CreateDeckScreen';

const Stack = createStackNavigator();

const DecksNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DecksList" component={DecksScreen} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Screen name="CreateDeck" component={CreateDeckScreen}/>
      <Stack.Screen name="Image" component={ImageScreen} />
    </Stack.Navigator>
  );
};

export default DecksNavigator;
