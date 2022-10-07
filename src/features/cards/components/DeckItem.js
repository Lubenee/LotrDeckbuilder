import React, {useEffect, useState, useContext} from 'react';
import {Alert, StyleSheet, Text, TextComponent,} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card, Button, Portal, Dialog} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {DeckContext} from '../../../services/cards/DeckContext';

const DeckItem = ({deck, screen, card}) => {
  const [source, setSource] = useState('');
  const {addToDeck, deleteDeck} = useContext(DeckContext);
  const navigation = useNavigation();

  const deckPressHandler = () => {
    if (screen === 'AddToDeck') {
      addToDeck(card, deck);
      navigation.goBack();
    } else if (screen === 'Decks') {
      navigation.navigate('DeckContent', {deck});
    }
  };

  useEffect(() => {
    setSource(require('../../../../assets/images/back.jpg'));
  }, []);

  const deletionAlert = async () => new Promise((resolve) => {
    Alert.alert(
      'Delete deck',
      'Are you sure you want to delete this crappy deck?',
      [
        {text: 'whoops, no!', onPress: () => {resolve(false)}},
        {text: 'Delete!', onPress: () => {resolve(true)}},
      ],
      {
        cancelable: true,
        onDismiss: () => {resolve(false)}
      }
    )
  });

  return (
    <TouchableOpacity
      onLongPress={async () => {
        const userConfirmationToDeleteDeck = await deletionAlert();
        if (userConfirmationToDeleteDeck){
          deleteDeck(deck.index);
        }
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
