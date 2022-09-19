import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import CardsScreen from '../../features/cards/screens/Home/CardsScreen';
import CardScreen from '../../features/cards/screens/Home/CardScreen';
import ImageScreen from '../../features/cards/screens/ImageScreen';
import AddToDeckScreen from '../../features/cards/screens/Home/AddToDeckScreen';
import ExpansionScreen from '../../features/cards/screens/ExpansionScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Cards" component={CardsScreen} />
      <Stack.Screen name="Expansion" component={ExpansionScreen} />
      <Stack.Screen name="AddToDeck" component={AddToDeckScreen} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
