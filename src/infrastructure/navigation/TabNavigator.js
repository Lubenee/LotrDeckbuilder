import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavouritesScreen from '../../features/cards/screens/FavouritesScreen';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from './CardsNavigator';
import DecksScreen from '../../features/cards/screens/DecksScreen';
import FavouritesNavigator from './FavouritesNavigator';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {fontSize: 14},
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <FontAwesomeIcon name={'home'} color={color} size={size} />
            ),
          }}
          name="Home"
          component={HomeNavigator}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <MaterialIcon name={'cards'} color={color} size={size} />
            ),
          }}
          name="Decks"
          component={DecksScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({size, color}) => (
              <FontAwesomeIcon name={'heart'} color={color} size={size} />
            ),
          }}
          name="Favourites"
          component={FavouritesNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
