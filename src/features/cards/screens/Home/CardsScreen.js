import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {Divider} from 'react-native-paper';
import {CONTENT_SPACING} from '../../../../commons/constants';
import {CardsContext} from '../../../../services/cards/CardsContext';
import CardItem from '../../components/CardItem';
import CardsSort from '../../components/CardsSort';
import SearchField from '../../components/SearchField';

const CardsScreen = () => {
  const {filteredCards, isLoading} = useContext(CardsContext);

  return (
    <View style={styles.container}>
      <SearchField screen="Cards" />
      <View style={styles.sortProps}>
        <CardsSort />
      </View>
      {isLoading ? (
        <ActivityIndicator style={{marginTop: 20}} size={'large'} />
      ) : (
        <FlatList
          data={filteredCards}
          keyExtractor={item => item.code}
          initialNumToRender={10}
          renderItem={({item}) => (
            <>
              <CardItem card={item} />
              <Divider bold={true} style={{backgroundColor: 'black'}} />
            </>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  sortProps: {
    alignItems: 'center',
    padding: CONTENT_SPACING / 2,
  },
  background: {
    backgroundColor: 'black',
  },
});

export default CardsScreen;
