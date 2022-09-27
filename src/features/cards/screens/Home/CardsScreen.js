import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Divider} from 'react-native-paper';
import {CardsContext} from '../../../../services/cards/CardsContext';
import CardItem from '../../components/CardItem';
import SearchField from '../../components/SearchField';

const CardsScreen = () => {
  const {filteredCards, isLoading} = useContext(CardsContext);

  return (
    <View style={styles.container}>
      <SearchField screen="Cards" />
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
  background: {
    backgroundColor: 'black',
  },
});

export default CardsScreen;
