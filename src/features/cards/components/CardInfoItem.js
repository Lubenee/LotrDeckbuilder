import React, {useContext} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {CONTENT_SPACING} from '../../../commons/constants';
import {CardsContext} from '../../../services/cards/CardsContext';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CardInfoItem = ({card}) => {
  const {addToFavourites, removeFromFavourites, isCardFavourite} =
    useContext(CardsContext);
  const source = `https://ringsdb.com/${card.imagesrc}`;
  const cardText = card.text.replace(/<\/?[^>]+(>|$)/g, '');
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Image', {source: source})}
        style={styles.imageContainer}>
        <Image source={{uri: source}} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{card.name}</Text>
        <Text style={styles.cardDescription}>{cardText}</Text>
        <Text style={styles.cardDescription}>Expansion: {card.pack_name}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained-tonal"
          icon={isCardFavourite(card) ? 'heart' : 'heart-outline'}
          onPress={() => {
            isCardFavourite(card)
              ? removeFromFavourites(card)
              : addToFavourites(card);
          }}
          style={styles.button}>
          Add to Favourites
        </Button>
        <Button
          mode="contained-tonal"
          icon="cards"
          onPress={() => {
            navigation.navigate('AddToDeck', {card});
          }}
          style={styles.button}>
          Add to Deck
        </Button>
        <Button
          mode="contained-tonal"
          icon="sword-cross"
          onPress={() => {
            navigation.navigate('Expansion', {expansion: card.pack_name});
          }}
          style={styles.button}>
          View Expansion
        </Button>
      </View>
    </ScrollView>
  );
};

export default CardInfoItem;

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
    marginVertical: CONTENT_SPACING,
  },
  cardTitle: {
    marginHorizontal: CONTENT_SPACING,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginHorizontal: CONTENT_SPACING,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: CONTENT_SPACING,
    justifyContent: 'flex-start',
  },
  button: {
    margin: CONTENT_SPACING / 2,
  },
  logo: {
    width: 224,
    height: 313,
    backgroundColor: 'black',
    resizeMode: 'contain',
  },
});
