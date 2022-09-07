import React, {createContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export const DeckContext = createContext(null);

const DeckProvider = ({children}) => {

    const navigation = useNavigation();

    const [decks, setDecks] = useState([]);
    
    const createNewDeck = () => {

    }

    return (
        <DeckContext.Provider
          value={{

          }}>
          {children}
        </DeckContext.Provider>
      );
}

export default DeckProvider;