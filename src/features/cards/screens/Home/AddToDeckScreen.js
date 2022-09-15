import React, {useContext} from 'react';
import {Text, View, FlatList} from 'react-native';
import {DeckContext} from '../../../../services/cards/DeckContext';
import DeckItem from '../../components/DeckItem';

const AddToDeckScreen = ({route}) => {
  const {card} = route.params;

  const {decks} = useContext(DeckContext);
  return (
    <View>
      {decks.length === 0 ? (
        <Text>There are no decks availible right now! Go make some!</Text>
      ) : (
        <FlatList
          data={decks}
          keyExtractor={deck => deck.title}
          renderItem={({item}) => (
            <DeckItem deck={item} screen="AddToDeck" card={card} />
          )}
        />
      )}
    </View>
  );
};

export default AddToDeckScreen;
