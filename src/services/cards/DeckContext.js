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
          console.log(decks);
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
      console.log(deck.content[index].count);
    } else {
      deck.content.push(card);
      const index = deck.content.indexOf(card);
      deck.content[index].count = 1;
    }
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
      }}>
      {children}
    </DeckContext.Provider>
  );
};

export default DeckProvider;
