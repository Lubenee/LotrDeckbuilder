import React, { useContext } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-paper';
// import { DeckContext } from '../../../services/cards/DeckContext';
import {useNavigation} from '@react-navigation/native';

const DecksScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      <Button
            mode="contained-tonal"
            icon="sword-cross"
            onPress={() => {navigation.navigate('CreateDeck')}}
            style={styles.button}>
            Create new deck
        </Button>
        
      <Card style={styles.card} mode='elevated'>
          <Card.Cover
            source='./tree.jpg'
          />
          <Card.Title title="Abandoned Ship" />
          <Card.Content>
            <Text>
              The Abandoned Ship is a wrecked ship located on Route 108 in
              Hoenn, originally being a ship named the S.S. Cactus. The second
              part of the ship can only be accessed by using Dive and contains
              the Scanner.
            </Text>
          </Card.Content>
        </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
  button: {
    margin: 12,
  },
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});

export default DecksScreen;
