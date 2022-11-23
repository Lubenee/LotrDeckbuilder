import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeckContext = createContext(null);

const DeckProvider = ({children}) => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    setTimeout(
      () =>
        AsyncStorage.getItem('decks').then(res => {
          let decks = JSON.parse(res);
          if (decks) {
            setDecks(decks);
          }
        }),
      1,
    );
  }, []);

  const createNewDeck = (title, description, index) => {
    const newDeck = {
      title: title,
      description: description,
      content: [],
      index: index,
    };
    const newDecks = [...decks, newDeck];
    setDecks(newDecks);
    AsyncStorage.setItem('decks', JSON.stringify(newDecks));
  };

  const addToDeck = (card, deck) => {
    if (deck.content.includes(card)) {
      const index = deck.content.indexOf(card);
      deck.content[index].count += 1;
    } else {
      deck.content.push(card);
      const index = deck.content.indexOf(card);
      deck.content[index].count = 1;
    }

    AsyncStorage.setItem('decks', JSON.stringify(decks));
  };

  const removeFromDeck = (card, deck) => {
    console.log("removed:  '" + card.name + "'  from deck:  " + deck.title);
    let cardIndex = 0;

    for (let i = 0; i < deck.content.length; ++i) {
      if (card.code == deck.content[i].code) {
        deck.content[i].count--;
        cardIndex = i;
        break;
      }
    }

    if (deck.content[cardIndex].count == 0) {
      deck.content.splice(cardIndex, 1);
    }

    AsyncStorage.setItem('decks', JSON.stringify(decks));
  };

  const deleteDeck = index => {
    let newDecks = decks.filter(currentDeck => currentDeck.index !== index);
    setDecks(newDecks);

    AsyncStorage.setItem('decks', JSON.stringify(newDecks));
  };

  return (
    <DeckContext.Provider
      value={{
        decks,
        createNewDeck,
        addToDeck,
        deleteDeck,
        removeFromDeck,
      }}>
      {children}
    </DeckContext.Provider>
  );
};

export default DeckProvider;
