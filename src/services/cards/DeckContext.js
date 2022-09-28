import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';

export const DeckContext = createContext(null);

const DeckProvider = ({children}) => {
  const [decks, setDecks] = useState([]);

  const createNewDeck = (title, description, index) => {
    const newDeck = {
      title: title,
      description: description,
      content: [],
      index: index,
    };
    setDecks(decks => [...decks, newDeck]);
    //AsyncStorage.setItem('decks', JSON.stringify(newDeck));
  };

  const addToDeck = (card, deck) => {
    if (deck.content.includes(card)) {
      const index = deck.content.indexOf(card);
      deck.content[index].count += 1;
      console.log(deck.content[index].count);
    } else {
      deck.content.push(card);
      const index = deck.content.indexOf(card);
      deck.content[index].count = 1;
    }
  };

  const deleteDeck = index => {
    console.log(index);
    let newDecks = decks.filter(currentDeck => currentDeck.index !== index);
    setDecks(newDecks);

    // AsyncStorage.setItem('decks', JSON.stringify(newDeck));
  };

  return (
    <DeckContext.Provider
      value={{
        decks,
        createNewDeck,
        addToDeck,
        deleteDeck,
      }}>
      {children}
    </DeckContext.Provider>
  );
};

export default DeckProvider;
