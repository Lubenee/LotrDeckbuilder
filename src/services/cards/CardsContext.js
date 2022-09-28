import React, {createContext, useEffect, useState} from 'react';
import CardsService from './cards.service';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      res = res.slice(0, 20); //{1309}, {800}
      res = res.filter(card => card.type_name !== 'Campaign');
      res.forEach(element => {
        element.text = element.text.replace(/<\/?[^>]+(>|$)/g, '');
      });
      setCards(res);
      setFilteredCards(res);
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
    setIsLoading(true);
    setTimeout(
      () =>
        AsyncStorage.getItem('favourites').then(res => {
          let fav = JSON.parse(res);

          if (fav) {
            setFavourites(fav);
          }

          setIsLoading(false);
        }),
      1,
    );
  }, []);

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
    if (isCardFavourite(card)) {
      return;
    }
    let newFav = [...favourites, card];
    setFavourites(newFav);
    AsyncStorage.setItem('favourites', JSON.stringify(newFav));
  };

  const removeFromFavourites = card => {
    let newFav = favourites.filter(
      currentCard => currentCard.code !== card.code,
    );
    setFavourites(newFav);
    AsyncStorage.setItem('favourites', JSON.stringify(newFav));
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
