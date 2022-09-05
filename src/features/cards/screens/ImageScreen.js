import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ImageScreen = ({route}) => {
  const {source} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: source}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'black',
  },
  image: {
    height: 500,
    width: 360,
    resizeMode: 'contain',
    backgroundColor: 'black',
    borderRadius: 8,
  },
});
export default ImageScreen;
