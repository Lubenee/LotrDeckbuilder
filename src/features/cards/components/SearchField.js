import React, {useContext, useState} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import {CardsContext} from '../../../services/cards/CardsContext';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CONTENT_SPACING} from '../../../commons/constants';

const SearchField = ({screen}) => {
  const {search} = useContext(CardsContext);
  const {searchFavourites} = useContext(CardsContext);
  const [query, setQuery] = useState('');

  const handleSearch = text => {
    setQuery(text);
    if (screen === 'Cards') {
      search(text);
    } else {
      searchFavourites(text);
    }
  };
  return (
    <View style={styles.container}>
      <Icon5 name="search" size={16} />
      <TextInput
        value={query}
        onChangeText={queryText => handleSearch(queryText)}
        placeholder="Search..."
        style={styles.field}
      />
      <TouchableOpacity
        onPress={() => {
          handleSearch('');
        }}>
        <Icon name="remove" size={16} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {flex: 1},
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: CONTENT_SPACING,
    alignItems: 'center',
  },
});

export default SearchField;
