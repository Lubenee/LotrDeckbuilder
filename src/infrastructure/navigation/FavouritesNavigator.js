import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import CardScreen from '../../features/cards/screens/CardScreen';
import ImageScreen from '../../features/cards/screens/ImageScreen';
import FavouritesScreen from '../../features/cards/screens/FavouritesScreen';

const Stack = createStackNavigator();

const FavouritesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Favourites_" component={FavouritesScreen} />
      <Stack.Screen name="Card" component={CardScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
    </Stack.Navigator>
  );
};

export default FavouritesNavigator;
