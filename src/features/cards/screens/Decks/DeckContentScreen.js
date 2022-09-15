import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Divider} from 'react-native-paper';
import CardItem from '../../components/CardItem';

const CardsScreen = ({route}) => {
  const {deck} = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={deck.content}
        keyExtractor={item => item.code}
        initialNumToRender={10}
        renderItem={({item}) => (
          <>
            <CardItem card={item} />
            <Divider bold={true} />
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

export default CardsScreen;
