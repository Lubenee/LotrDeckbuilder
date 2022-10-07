import React, {useState, useContext} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {SegmentedButtons } from 'react-native-paper'
import {CONTENT_SPACING} from '../../../commons/constants'
import fg from '../../../../assets/sphere_icons/Sphere_Leadership.svg'

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../config.json'
import { CardsContext } from '../../../services/cards/CardsContext'
const Icon = createIconSetFromFontello(fontelloConfig);


const CardsSort = () => {
    const {sortBySphere} = useContext(CardsContext)
    const [value, setValue] = useState('');

  return (
    <View>

    <View style={{flexDirection: 'row'}}>
     <Icon name="sphere_leadership" size={77} color="purple"/>
     <Icon name="sphere_tactics" size={77} color="red"/>
     <Icon name="sphere_lore" size={77} color="green"/>
     <Icon name="sphere_spirit" size={77} color="blue"/>
     </View>

    <SegmentedButtons
    onValueChange={(value) => {
        setValue(value)
        sortBySphere(value)
    }}
    style={styles.group}
    value={value}
    buttons={[
    {
    icon: 'shield-off',
    value: 'leadership',
    },
    {
    icon: 'shield-home',
    value: 'tactics',
    },
    
    {
    icon: 'ski-water',
    value: 'lore',
    },
    {
    icon: 'snail',
    value: 'spirit',
    },
    ]}
    />

</View>
  );
}


const styles = StyleSheet.create({

  });  

export default CardsSort