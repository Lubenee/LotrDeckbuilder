import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';

import {CardsContext} from '../../../services/cards/CardsContext';

const CardsSort = () => {
  const {sortBySphere, search} = useContext(CardsContext);
  const [currentValue, setCurrentValue] = useState('');

  return (
    <View>
      <SegmentedButtons
        onValueChange={value => {
          if (value != currentValue) {
            setCurrentValue(value);
            sortBySphere(value);
          } else {
            setCurrentValue('');
            search('');
          }
        }}
        value={currentValue}
        buttons={[
          {
            icon: require('../../../../assets/images/leadership.png'),
            value: 'leadership',
          },
          {
            icon: require('../../../../assets/images/tactics.png'),
            value: 'tactics',
          },

          {
            icon: require('../../../../assets/images/lore.png'),
            value: 'lore',
          },
          {
            icon: require('../../../../assets/images/spirit.png'),
            value: 'spirit',
          },
        ]}
      />
    </View>
  );
};

export default CardsSort;
