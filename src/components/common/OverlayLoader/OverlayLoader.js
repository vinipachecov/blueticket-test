import React from 'react'
import { View, StyleSheet } from 'react-native';
import Spinner from '../Spinner/Spinner';

const OverlayLoader = () => {
  return (
    <View style={styles.overlay}>
      <Spinner />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(253, 255, 252, 0.8)',
    height: '100%',
    width: '100%',    
    zIndex: 3,
    alignContent: 'center',
    justifyContent: 'center',     
    position: 'absolute',
    elevation: 1 
  }
})

export default OverlayLoader
