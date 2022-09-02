import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-paper';

const CardItem = ({card}) => {
  const cardImage = () => {
    <image source={card.imagesrc} />;
  };

  const source = `https://ringsdb.com/${card.imagesrc}`;

  return (
    <Card>
      <Card.Title
        title={card.name}
        subtitle={card.text.replace('<b>Response:</b> ', '')}
      />
      {/*       <View style={styles.container}>
        <Image source={{uri: source}} style={styles.logo} />
        <Text style={styles.text}>{card.name}</Text>
      </View> */}
    </Card>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 6,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CardItem;
