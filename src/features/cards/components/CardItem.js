import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {
  CONTENT_SPACING,
  CARD_TITLE_FONT_SIZE,
  CARD_DESC_FONT_SIZE,
  CARD_WIDTH,
  CARD_HEIGHT,
  ACTIVE_BUTTON_OPACITY,
  CARD_BACKGROUND_COLOR,
} from '../../../commons/constants';

const CardItem = ({card, route}) => {
  const navigation = useNavigation();
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2]; // -2 because -1 is the current route
  const source = `https://ringsdb.com/${card.imagesrc}`;

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
    } else if (card.type_code === 'ally') {
      return 1;
    } else if (card.type_code === 'event') {
      return 1;
    } else {
      return 0;
    }
  }, [card]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={ACTIVE_BUTTON_OPACITY}
      onLongPress={() => {
        console.log(card);
      }}
      onPress={() => navigation.navigate('Card', {card: card})}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: source}}
          style={[styles.logo, {right: cardRight, bottom: cardBottom}]}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{card.name}</Text>
        <Text style={styles.cardDescription}>{card.text}</Text>
      </View>
      <View>{card.count >= 1 ? <Text>x{card.count}</Text> : void 0}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: CONTENT_SPACING,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cardTitle: {
    marginHorizontal: CONTENT_SPACING,
    color: 'black',
    fontSize: CARD_TITLE_FONT_SIZE,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  cardDescription: {
    marginHorizontal: CONTENT_SPACING,
    color: 'black',
    fontSize: CARD_DESC_FONT_SIZE,
    textAlign: 'left',
  },
  logo: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'contain',
    backgroundColor: CARD_BACKGROUND_COLOR,
  },
  imageContainer: {borderRadius: 10, width: 67, height: 80, overflow: 'hidden'},
});

export default CardItem;
