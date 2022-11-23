import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {Divider} from 'react-native-paper';
import CardItem from './CardItem';

const CardList = ({cardList}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cardList}
        initialNumToRender={24}
        keyExtractor={item => item.code}
        renderItem={({item}) => (
          <>
            <CardItem card={item} />
            <Divider bold={true} style={styles.div} />
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
  div: {
    backgroundColor: 'black',
  },
});

export default CardList;
