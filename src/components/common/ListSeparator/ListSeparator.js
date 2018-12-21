import React from 'react'
import { View, StyleSheet } from 'react-native';

const ListSeparator = () => {
  return (
    <View style={style.separator} />
  )
}
const style = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
    width: '100%'
  }
})

export default ListSeparator
