import React, {createContext, useEffect, useState} from 'react';

export const DeckContext = createContext(null);

const DeckProvider = ({children}) => {
  const [decks, setDecks] = useState([]);

  const createNewDeck = (title, description) => {
    const newDeck = {
      title: title,
      description: description,
      content: [],
    };
    setDecks(decks => [...decks, newDeck]);
  };

  const addToDeck = (card, deck) => {
    console.log('Came from add card to a deck screen!');
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

  return (
    <DeckContext.Provider
      value={{
        decks,
        createNewDeck,
        addToDeck,
      }}>
      {children}
    </DeckContext.Provider>
  );
};

export default DeckProvider;
