import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CardScreen from '../../features/cards/screens/Home/CardScreen';
import ImageScreen from '../../features/cards/screens/ImageScreen';
import FavouritesScreen from '../../features/cards/screens/Favourites/FavouritesScreen';
import ExpansionScreen from '../../features/cards/screens/ExpansionScreen';

const Stack = createStackNavigator();

const FavouritesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Favourites_" component={FavouritesScreen} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
      <Stack.Screen name="Expansion" component={ExpansionScreen} />
    </Stack.Navigator>
  );
};

export default FavouritesNavigator;
