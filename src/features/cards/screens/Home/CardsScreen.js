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

const CardsScreen = () => {
  const {filteredCards, search, isLoading} = useContext(CardsContext);
  const [query, setQuery] = useState('');

  const handleSearch = text => {
    search(text);
    setQuery(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={queryText => handleSearch(queryText)}
        placeholder="Search..."
        style={{backgroundColor: '#fff', paddingHorizontal: 20}}
      />
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
