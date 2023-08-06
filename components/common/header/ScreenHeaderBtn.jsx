import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {

  // const handlePress = (e) => {
  //   console.log(e.target);
  // };

  return (
    <Pressable style={ styles.btnContainer } onPress={handlePress}>
      <Image source={iconUrl} resizeMode='cover' style={ styles.btnImg(dimension) } />
    </Pressable>
  )
}

export default ScreenHeaderBtn