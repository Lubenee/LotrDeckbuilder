import React, {useEffect, useState, useContext} from 'react';
import {Alert, StyleSheet, Text,} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {DeckContext} from '../../../services/cards/DeckContext';

const DeckItem = ({deck, screen, card}) => {
  const [source, setSource] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
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
    // if (deck.content.length !== 0) {
    //   setSource({uri: `https://ringsdb.com/${deck.content[0].imagesrc}`});
    // } else {
    //   setSource(require('../../../../assets/images/back.jpg'));
    // }
    setSource(require('../../../../assets/images/back.jpg'));
  }, [deck.content]);

  const deletionAlert = async () => new Promise((resolve) => {
    Alert.alert(
      'Delete deck',
      'wtf don\'t delete the poor deck :(',
      [
        {text: 'its trash man, im deleting it', onPress: () => {resolve(true)}},
        {text: 'bruh k', onPress: () => {resolve(false)}},
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
