import React from 'react';
import CardInfoItem from '../../components/CardInfoItem';

const CardScreen = ({route}) => {
  const {card} = route.params;

  return <CardInfoItem card={card} />;
};

export default CardScreen;
