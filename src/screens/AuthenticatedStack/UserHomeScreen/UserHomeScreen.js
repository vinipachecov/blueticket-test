import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Body, Header, Container, Left, Title, Right, Content, Spinner } from 'native-base';
import { baseblue } from '../../../utils/colors';
import EventListItem from '../../../components/EventListItem/EventListItem';
import ListSeparator from '../../../components/common/ListSeparator/ListSeparator';
import OverlayLoader from '../../../components/common/OverlayLoader/OverlayLoader';
import { loadEventData } from '../../../actions/eventActions';

export class UserHomeScreen extends Component {  

  renderLoadingOverlay = () => {
    const { loading } = this.props;
    if (loading) {
      return (  
        <OverlayLoader />
      )
    }
  }

  onSelectEvent = async (eventId) => {
    const { pdv, token, pos } = this.props;    
    await this.props.loadEventData(eventId, token, pdv.codigo_ponto_venda, pos.codigo, 7);
  }


  render() {
    const { eventList } = this.props;
    return (
      <Container>
        <Header androidStatusBarColor={baseblue} style={styles.header}>                            
          <Body>            
            <Title style={styles.title}>Home - Lista de Eventos</Title>
          </Body>           
        </Header>         
        <FlatList 
          style={styles.list}
          keyExtractor={item => item.codigo.toString()}
          data={eventList}
          renderItem={({ item }) => 
            <EventListItem 
              item={item}              
              onPress={this.onSelectEvent}            
            />          
          }
          ItemSeparatorComponent={ListSeparator}          
        />
        {this.renderLoadingOverlay()}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: baseblue,
    paddingLeft: 0,
    paddingRight: 0
  },
  list: {
    marginTop: 30
  },
  title: { 
    marginLeft: 20
  }
})

const mapStateToProps = (state) => ({
  eventList: state.eventData.eventList,
  loading: state.global.loading,  
  token: state.userData.token,
  pdv: state.userData.pdv,
  pos: state.userData.pos

})

const mapDispatchToProps = {
  loadEventData    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeScreen)
