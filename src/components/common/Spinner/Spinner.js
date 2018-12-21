import React from 'react'
import { ActivityIndicator } from 'react-native';
import { baseblue } from '../../../utils/colors';

const Spinner = () => {
  return (
    <ActivityIndicator
      color={baseblue}
      size={"large"}
    />
  )
}

export default Spinner
