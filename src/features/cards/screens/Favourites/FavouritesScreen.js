import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TextInput} from 'react-native';
import {Divider} from 'react-native-paper';
import {CardsContext} from '../../../../services/cards/CardsContext';
import CardItem from '../../components/CardItem';

const FavouritesScreen = () => {
  const {filteredFavourites, searchFavourites, favourites} =
    useContext(CardsContext);
  const [query, setQuery] = useState('');

  const handleSearch = text => {
    setQuery(text);
    searchFavourites(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={queryText => handleSearch(queryText)}
        placeholder="Search..."
        style={{backgroundColor: '#fff', paddingHorizontal: 20}}
      />
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
