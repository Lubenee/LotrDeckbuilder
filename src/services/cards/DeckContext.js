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

  return (
    <DeckContext.Provider
      value={{
        decks,
        createNewDeck,
      }}>
      {children}
    </DeckContext.Provider>
  );
};

export default DeckProvider;
