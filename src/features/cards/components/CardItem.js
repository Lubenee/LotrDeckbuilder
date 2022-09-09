import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useMemo} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const cardBackgroundColor = 'white';

const CardItem = ({card}) => {
  const navigation = useNavigation();

  const source = `https://ringsdb.com/${card.imagesrc}`;
  const cardText = card.text.replace(/<\/?[^>]+(>|$)/g, '');

  const cardRight = useMemo(() => {
    if (card.type_code === 'hero') {
      return 31;
    } else if (card.type_code === 'ally') {
      return 28;
    } else if (card.type_code === 'attachment') {
      return 21;
    } else if (card.type_code === 'event') {
      return 29;
    } else {
      return 31;
    }
  }, [card]);

  const cardBottom = useMemo(() => {
    if (card.type_code === 'attachment') {
      return 4;
    } else if (card.type_code === 'ally'){
      return 1;
    } else if (card.type_code === 'event'){
      return 1
    } else {
      return 0;
    }
  }, [card]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onLongPress={() => {
        console.log(card);
      }}
      onPress={() => navigation.navigate('Card', {card: card})}>
      <View
        style={{borderRadius: 10, width: 67, height: 80, overflow: 'hidden'}}>
        <Image
          source={{uri: source}}
          style={[styles.logo, {right: cardRight, bottom: cardBottom}]}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{card.name}</Text>
        <Text style={styles.cardDescription}>{cardText}</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {}}
        style={styles.button}>
        <Icon name="ellipsis-v" size={16} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cardTitle: {
    marginHorizontal: 8,
    color: 'black',
    fontSize: 18,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  cardDescription: {
    marginHorizontal: 8,
    color: 'black',
    fontSize: 12,
    textAlign: 'left',
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  logo: {
    width: 100,
    height: 140,
    resizeMode: 'contain',
    backgroundColor: cardBackgroundColor,
  },
});

export default CardItem;
