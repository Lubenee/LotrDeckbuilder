import {useNavigation} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
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

const CardItem = ({card, screen}) => {
  const navigation = useNavigation();
  const source = `https://ringsdb.com/${card.imagesrc}`;
  const [imageDirection, setImageDirection] = useState('Vertical');

  const cardRight = useMemo(() => {
    setImageDirection('Vertical');
    if (card.type_code === 'hero') {
      return 31;
    } else if (card.type_code === 'ally') {
      return 28;
    } else if (card.type_code === 'attachment') {
      return 21;
    } else if (card.type_code === 'event') {
      return 29;
    } else if (card.type_code === 'player-side-quest') {
      setImageDirection('Horizontal');
      return 5;
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
    } else if (card.type_code === 'player-side-quest') {
      return 45;
    } else {
      return 0;
    }
  }, [card]);

  const thumbnail_width = imageDirection === 'Vertical' ? 67 : 84;
  const thumbnail_height = imageDirection === 'Vertical' ? 80 : 30;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={ACTIVE_BUTTON_OPACITY}
      onLongPress={() => {
        console.log(card);
      }}
      onPress={() => navigation.navigate('Card', {card: card})}>
      <View
        style={[
          styles.imageContainer,
          {width: thumbnail_width, height: thumbnail_height},
        ]}>
        <Image
          source={{uri: source}}
          style={[styles.logo, {right: cardRight, bottom: cardBottom}]}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>{card.name}</Text>
        <Text style={styles.cardDescription}>{card.text}</Text>
      </View>

      <View style={styles.count}>
        {card.count >= 1 && screen == 'Deck' ? (
          <Text>x{card.count}</Text>
        ) : (
          void 0
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  count: {
    margin: CONTENT_SPACING / 2,
  },
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
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default CardItem;
