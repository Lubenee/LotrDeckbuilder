import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import CardsScreen from '../../features/cards/screens/CardsScreen';
import CardScreen from '../../features/cards/screens/CardScreen';
import {NavigationContainer} from '@react-navigation/native';
import ImageScreen from '../../features/cards/screens/ImageScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="CardsScreen" component={CardsScreen} />
        <Stack.Screen name="CardScreen" component={CardScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
