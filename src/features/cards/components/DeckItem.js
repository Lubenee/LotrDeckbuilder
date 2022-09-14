import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const DeckItem = ({deck, screen, card}) => {
  const [source, setSource] = useState('');
  const navigation = useNavigation();

  const deckPressHandler = () => {
    if(screen === 'AddToDeck'){
      console.log("Came from add card to a deck screen!")
      deck.content.push(card);
      navigation.goBack();
    } else if (screen === 'Decks') {
      console.log("Came from decks screen!")
      navigation.navigate('DeckContent', {deck});
    }
  }

  useEffect(() => {
    // if (deck.content.length !== 0) {
    //   setSource({uri: `https://ringsdb.com/${deck.content[0].imagesrc}`});
    // } else {
    //   setSource(require('../../../../assets/images/back.jpg'));
    // }
     setSource(require('../../../../assets/images/back.jpg'));
  }, [deck.content]);

  return (
    <TouchableOpacity
      onLongPress={() => {
        console.log(deck);
      }}
      onPress={deckPressHandler}>
      <Card style={styles.card} mode="elevated">
        <Card.Cover source={source} />
        <Card.Title title={deck.title} />
        <Card.Content>
          <Text>{deck.description}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 4,
  },
});

export default DeckItem;
