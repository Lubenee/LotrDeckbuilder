import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, Modal, Text} from 'react-native';
import {FAB,} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import DeckItem from '../../components/DeckItem';
import {DeckContext} from '../../../../services/cards/DeckContext';

const DecksScreen = () => {
  const navigation = useNavigation();
  const {decks} = useContext(DeckContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        keyExtractor={deck => deck.index}
        nestedScrollEnabled = {true}
        renderItem={({item}) => <DeckItem deck={item} screen="Decks" />}
        />

        <FAB 
        icon='plus' 
        color='black' 
        style = {styles.fab} 
        mode='elevated' 
        onPress={() => navigation.navigate('CreateDeck')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});

export default DecksScreen;
