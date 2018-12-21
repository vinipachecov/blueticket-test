import React, { Component } from 'react'
import AppStack from './Routes';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import NavigationService from './NavigationService';

class RootComponent extends Component {  
  render() {    
    return (
      <AppStack
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />      
    );
  }
}


const bindAction = dispatch => {
  return Object.assign({ dispatch }, bindActionCreators(ActionCreators, dispatch));   
};

const mapStateToProps = state => ({  
});  

export default connect(mapStateToProps, bindAction)(RootComponent);
