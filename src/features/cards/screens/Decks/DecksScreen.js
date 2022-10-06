import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import DeckItem from '../../components/DeckItem';
import {DeckContext} from '../../../../services/cards/DeckContext';

const DecksScreen = () => {
  const navigation = useNavigation();
  const {decks} = useContext(DeckContext);

  return (
    <View>
      <FlatList
        data={decks}
        keyExtractor={deck => deck.index}
        renderItem={({item}) => <DeckItem deck={item} screen="Decks" />}
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
