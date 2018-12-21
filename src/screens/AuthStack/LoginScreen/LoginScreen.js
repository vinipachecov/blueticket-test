import React, { Component } from 'react'
import { Text, StyleSheet, Keyboard, ToastAndroid, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { Button, Header, Form, Item, Input, Container, Title, Body, Left, View,  } from 'native-base';
import { baseblue } from '../../../utils/colors';
import { signInUser } from '../../../actions/loginActions';
import Spinner from '../../../components/common/Spinner/Spinner';
import { asyncStorageKey } from '../../../utils';

export class LoginScreen extends Component {  

  state = {
    showWelcomeText: true,
    email: '',
    password: '',    
  }

  async componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);    

    const stringToken = await AsyncStorage.getItem(asyncStorageKey);    
    const data = JSON.parse(stringToken);
    if (data) {
     this.setState({
        email: data.email,
        password: data.password
      })
    }
  }  

  _keyboardDidShow = () => {
    this.setState({ showWelcomeText: false })   
  }

  _keyboardDidHide = () => {
    this.setState({ showWelcomeText: true })       
  }

  signIn = async () => {          
      const { email, password } = this.state;
      await this.props.signInUser(email, password);                  
  }

  onEmailChange = (text) => {
    this.setState({ email: text });
  }

  onPasswordChange = (text) => {
    this.setState({ password: text });
  }

  renderLoading = () => {
    const { loading } = this.props;
    if (loading) {
      return (
        <View style={{ width: '100%', alignItems: 'center', marginTop: 16 }}>
          <Spinner />
        </View>
      )
    }
  }

  render() {
    const { showWelcomeText } = this.state;
    return (      
      <Container>
        <Header androidStatusBarColor={baseblue} style={styles.header}>
          <Left />
          <Body>
            <Title>Blueticket Test App</Title>
          </Body>          
        </Header>        
          <Form style={styles.form}>
            {
              showWelcomeText ? 
              <Text style={styles.welcomeText}>Welcome to the Blueticket app {'\n'} sign in for awesome experience</Text> 
              : 
              null
            }
            <Item rounded style={styles.input}>
              <Input                 
                onChangeText={text => this.onEmailChange(text)}
                placeholder="Email" 
                value={this.state.email}
                placeholderTextColor={'gray'}                
                keyboardType={'email-address'}
              />
            </Item>
            <Item rounded style={styles.input}>
              <Input                 
                onChangeText={text => this.onPasswordChange(text)}
                placeholder="Password" 
                value={this.state.password}
                placeholderTextColor={'gray'}
                secureTextEntry
              />
            </Item>            
            <Button          
              block
              style={styles.signInButton}
              disabled={this.props.loading}
              onPress={this.signIn}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </Button>
            {this.renderLoading()}
          </Form>                 
      </Container>
      
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: baseblue
  },
  input: {     
    marginBottom: 16, 
  },
  form: {       
    flex: 1,           
    justifyContent: 'center',                  
    marginLeft: 16, 
    marginRight: 16,
  },
  title: {
    color: 'black'
  },
  signInButton: {    
    borderRadius: 5,
    elevation: 0,
    backgroundColor: baseblue,
  },
  buttonText: { 
    color: 'white',
    fontWeight: '600',
  },
   welcomeText: { 
     textAlign: 'center', 
     marginBottom: 40 
  }
})



const mapStateToProps = (state) => ({
  loading: state.global.loading
})

const mapDispatchToProps = {
  signInUser  
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
