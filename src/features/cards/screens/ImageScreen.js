import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ImageScreen = ({route}) => {
  const {source} = route.params;
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    Image.getSize(source, (Width, Height) => {
      setWidth(Width);
      setHeight(Height);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{uri: source}}
        resizeMode="contain"
        blurRadius={0}
        style={[styles.image, {width: width / 1.5, height: height / 1.5}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    backgroundColor: 'black',
    borderRadius: 8,
    blurRadius: 0,
  },
});

export default ImageScreen;
