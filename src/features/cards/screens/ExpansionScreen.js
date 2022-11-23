import React, {useContext} from 'react';
import {CardsContext} from '../../../services/cards/CardsContext';
import CardList from '../components/CardList';

const ExpansionScreen = ({route}) => {
  const {expansion} = route.params;
  const {cards} = useContext(CardsContext);
  const exp = cards.filter(card => card.pack_name === expansion);

  return <CardList cardList={exp} />;
};

export default ExpansionScreen;
