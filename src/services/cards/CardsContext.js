import React, {createContext, useEffect, useState} from 'react';
import CardsService from './cards.service';

export const CardsContext = createContext(null);

const CardsProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);
  const [cards, setCards] = useState([]);
  
  const [filteredCards, setFilteredCards] = useState([]);
  const [filteredFavourites, setFilteredFavourites] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    CardsService.getAll().then(res => {
      res = res.filter((card) => 
        card.type_name !== 'Campaign'
      )
      setCards(res.slice(0, 5));
      setFilteredCards(res.slice(0,5));
      setIsLoading(false);
    });
  }, []);

  const search = text => {
    const formattedQuery = text.toLowerCase();

    const filteredData = cards.filter(card => {
      return contains(card, formattedQuery);
    });

    setFilteredCards(filteredData);
  };

  useEffect(() => {
    setFilteredFavourites(favourites);
  }, [favourites]);
  
  const searchFavourites = text => {
    const formattedQuery = text.toLowerCase();

    const filteredData = favourites.filter(card => {
      return contains(card, formattedQuery);
    });

    setFilteredFavourites(filteredData);
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

  const addToFavourites = card => {
    setFavourites(favourites => [...favourites, card]);
  };

  const removeFromFavourites = card => {
    setFavourites(favourites =>
      favourites.filter(currentCard => currentCard.code !== card.code),
    );
  };

  const isCardFavourite = card => {
    return favourites.includes(card);
  };

  return (
    <CardsContext.Provider
      value={{
        cards,
        filteredCards,
        filteredFavourites,
        search,
        favourites,
        addToFavourites,
        removeFromFavourites,
        isCardFavourite,
        searchFavourites,
        isLoading,
      }}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
