import React, {useContext} from 'react';
import {Text, View, FlatList, DatePickerIOS} from 'react-native';
import {DeckContext} from '../../../services/cards/DeckContext';
import DeckItem from '../components/DeckItem';

const AddToDeckScreen = () => {
  const {decks} = useContext(DeckContext);
  return (
    <View>
      {decks.length === 0 ? (
        <Text>There are no decks availible right now! Go make some!</Text>
      ) : (
        <FlatList
          data={decks}
          keyExtractor={deck => deck.title}
          renderItem={({item}) => <DeckItem deck={item} />}
        />
      )}
    </View>
  );
};

export default AddToDeckScreen;
