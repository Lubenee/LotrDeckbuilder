import React, {createContext, useEffect, useState} from 'react';
import CardsService from './cards.service';

export const CardsContext = createContext(null);

const CardsProvider = ({children}) => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    CardsService.getAll().then(res => {
      setCards(res.slice(0, 30));
      setFilteredCards(res.slice(0, 30));
    });
  }, []);

  const search = text => {
    const formattedQuery = text.toLowerCase();

    const filteredData = cards.filter(card => {
      return contains(card, formattedQuery);
    });

    setFilteredCards(filteredData);
  };

  const contains = ({name}, query) => {
    const formattedName = name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

    if (formattedName.includes(query)) {
      return true;
    }
    return false;
  };

  return (
    <CardsContext.Provider value={{cards, filteredCards, search}}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
