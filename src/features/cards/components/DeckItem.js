import React, { useEffect, useState } from 'react';
import {StyleSheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Card} from 'react-native-paper';

const DeckItem = ({deck}) => {
  const [source, setSource] = useState('');

  useEffect(() => {
    if (deck.content.length !== 0){
      setSource(`https://ringsdb.com/${deck.content[0].imagesrc}`);
    } else {
      setSource(`https://ibb.co/d09h2fF`);
      console.log(source)
    }
  }, [deck.content]);

  return (
    <TouchableOpacity onPress={() => {console.log(deck)}}>
      <Card style={styles.card} mode='elevated'>
      <Card.Cover
          source={{uri: source}}
          />
          <Card.Title title= {deck.title} />
          <Card.Content>
            <Text>
              {deck.description}
            </Text>
          </Card.Content>
        </Card>
    </TouchableOpacity>
  );
};

const styles=StyleSheet.create({
  card: {
    margin: 4,
  }
})

export default DeckItem;
