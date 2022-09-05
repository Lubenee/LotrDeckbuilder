import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const cardBackgroundColor = 'white';
const CardItem = ({card}) => {

  const source = `https://ringsdb.com/${card.imagesrc}`;

  const cardText = (card.text).replace(/<\/?[^>]+(>|$)/g, "");

  return (
<TouchableOpacity style = {styles.container} activeOpacity={0.5} onLongPress={() => {console.log(card)}}>
      <Image source = {{uri: source}} style = {styles.logo}/>

      <View style={styles.textContainer}>
        <Text style = {styles.cardTitle}>{card.name}</Text>
        <Text style={styles.cardDescription}>{cardText}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={() => {}} style={styles.button}>
        <Icon name = 'ellipsis-v' size = {16} color = 'black' />
      </TouchableOpacity>
</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  textContainer: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: cardBackgroundColor,
  },
  cardTitle: {
    marginLeft: 10,
    color: 'black',
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  cardDescription: {
    marginLeft: 4,
    color: 'black',
    fontSize: 12,
    textAlign: 'left',
    backgroundColor:cardBackgroundColor,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 140,
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor: cardBackgroundColor,
  },
});

export default CardItem;
