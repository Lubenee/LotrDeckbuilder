import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {Divider} from 'react-native-paper';
import {CardsContext} from '../../../services/cards/CardsContext';
import CardItem from '../components/CardItem';

const ExpansionScreen = ({route}) => {
  const {expansion} = route.params;
  const {cards} = useContext(CardsContext);
  const exp = cards.filter(card => card.pack_name === expansion);
  return (
    <View>
      <FlatList
        data={exp}
        keyExtractor={item => item.code}
        initialNumToRender={10}
        renderItem={({item}) => (
          <>
            <CardItem card={item} />
            <Divider bold={true} style={{backgroundColor: 'black'}} />
          </>
        )}
      />
    </View>
  );
};

export default ExpansionScreen;
