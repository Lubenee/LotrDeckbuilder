import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';

const CardScreen = ({route}) => {
  const {card} = route.params;
  const source = `https://ringsdb.com/${card.imagesrc}`;
  const cardText = card.text.replace(/<\/?[^>]+(>|$)/g, '');
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('ImageScreen', {source: source})}
          style={styles.imageContainer}>
          <Image source={{uri: source}} style={styles.logo} />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{card.name}</Text>
          <Text style={styles.cardDescription}>{cardText}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained-tonal"
            icon="heart"
            onPress={() => {}}
            style={styles.button}>
            Add to Favourites
          </Button>
          <Button
            mode="contained-tonal"
            icon="cards-outline"
            onPress={() => {}}
            style={styles.button}>
            Add to Deck
          </Button>
          <Button
            mode="contained-tonal"
            icon="camera"
            onPress={() => {}}
            style={styles.button}>
            View Expansion(?)
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 8,
  },
  cardTitle: {
    marginHorizontal: 8,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginHorizontal: 8,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 8,
    justifyContent: 'flex-start',
  },
  button: {
    margin: 4,
  },
  logo: {
    width: 224,
    height: 313,
    backgroundColor: 'black',
    resizeMode: 'contain',
    backgroundColor: 'grey',
  },
});

export default CardScreen;
