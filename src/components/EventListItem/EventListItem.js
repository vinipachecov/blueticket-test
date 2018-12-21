import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { baseblue } from '../../utils/colors';

const EventListItem = (props) => {
  const { data, local, nome, codigo } = props.item; 
  return (        
    <TouchableOpacity onPress={() => props.onPress(codigo)}>
    <View style={styles.container}>      
      <Text style={styles.eventName}>{nome}</Text>      
      <Text style={styles.eventLocal}>Local: {local}</Text>
      <Text style={styles.date}>Data: {moment(data).format('LLL')}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
  },
  eventName: {
    fontWeight: '600',
    alignSelf: 'flex-start',
    fontSize: 18,
    marginLeft: 20,
    color: baseblue
  },
  eventLocal: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#b12704',
    marginLeft: 20,
    marginBottom: 10
  },
  date: {
    marginLeft: 20,
    color: '#008A0F'
  }
})



export default EventListItem
