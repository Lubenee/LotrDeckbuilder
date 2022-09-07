import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-paper';
const CreateDeckScreen = () => {
  return (
    <View style={styles.container}>
        <TextInput
        onChangeText={() => {}}
        placeholder="Input deck name..."
        style={{backgroundColor: '#fff', paddingHorizontal: 20, marginTop: 8}}
      />

       <TextInput
        onChangeText={() => {}}
        numberOfLines={4}
        placeholder="Input deck Description..."
        textAlignVertical='top'
        style={{backgroundColor: '#fff', paddingHorizontal: 20, marginTop: 8}}
      />

      <Button
            mode="contained-tonal"
            icon="cards"
            onPress={() => {}}
            style={styles.button}>
            Submit Deck
          </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 4,
    },
    button: {
        margin: 8,
      },
  });

export default CreateDeckScreen