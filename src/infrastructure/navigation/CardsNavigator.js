import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import CardsScreen from '../../features/cards/screens/CardsScreen';
import CardScreen from '../../features/cards/screens/CardScreen';
import ImageScreen from '../../features/cards/screens/ImageScreen';
import AddToDeckScreen from '../../features/cards/screens/AddToDeckScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Cards" component={CardsScreen} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Screen name="AddToDeck" component={AddToDeckScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
