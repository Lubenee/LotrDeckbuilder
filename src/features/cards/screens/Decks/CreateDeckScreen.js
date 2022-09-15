import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import {DeckContext} from '../../../../services/cards/DeckContext';
import {useNavigation} from '@react-navigation/native';

const CreateDeckScreen = () => {
  const {createNewDeck} = useContext(DeckContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={title => {
          setTitle(title);
        }}
        placeholder="Input deck name..."
        style={{backgroundColor: '#fff', paddingHorizontal: 20, marginTop: 8}}
      />

      <TextInput
        onChangeText={text => {
          setDescription(text);
        }}
        numberOfLines={4}
        placeholder="Input deck Description..."
        textAlignVertical="top"
        style={{backgroundColor: '#fff', paddingHorizontal: 20, marginTop: 8}}
      />

      <Button
        mode="contained-tonal"
        icon="cards"
        onPress={() => {
          createNewDeck(title, description);
          setTitle('');
          setDescription('');
          navigation.goBack();
        }}
        style={styles.button}>
        Submit Deck
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  button: {
    margin: 8,
  },
});

export default CreateDeckScreen;
