import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Divider} from 'react-native-paper';
import CardItem from '../../components/CardItem';

const CardsScreen = ({route}) => {
  const {deck} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Divider bold={true} />
      <FlatList
        data={deck.content}
        keyExtractor={item => item.code}
        initialNumToRender={10}
        renderItem={({item}) => (
          <>
            <CardItem card={item} screen={'Deck'} />
            <Divider bold={true} />
          </>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    alignSelf: 'center',
    color: 'black',
  },
  container: {
    flex: 1,
    padding: 4,
  },
  background: {
    backgroundColor: 'black',
  },
});

export default CardsScreen;
