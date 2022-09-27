import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TextInput} from 'react-native';
import {Divider} from 'react-native-paper';
import {CardsContext} from '../../../../services/cards/CardsContext';
import CardItem from '../../components/CardItem';
import SearchField from '../../components/SearchField';

const FavouritesScreen = () => {
  const {filteredFavourites} = useContext(CardsContext);

  return (
    <View style={styles.container}>
      <SearchField screen="Favourites" />
      <FlatList
        data={filteredFavourites}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  background: {
    backgroundColor: 'black',
  },
});

export default FavouritesScreen;
