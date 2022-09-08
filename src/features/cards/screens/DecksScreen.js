import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import DeckItem from '../components/DeckItem';
import DeckProvider from '../../../services/cards/DeckContext';

const DecksScreen = () => {
  const navigation = useNavigation();
  const {decks} = useContext(DeckProvider);

  return (
    <View>
      <FlatList
        data={decks}
        // keyExtractor={item => item.code}
        renderItem={deck => {
          <DeckItem />;
        }}
      />

      <Button
        mode="contained-tonal"
        icon="sword-cross"
        onPress={() => {
          navigation.navigate('CreateDeck');
        }}
        style={styles.button}>
        Create new deck
      </Button>
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
