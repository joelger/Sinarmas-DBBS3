import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import { onSignOut } from '../../Auth';
import { logout } from '../../action/index';


class Account extends React.Component {


  constructor(props) {
    super(props);
    this.state = {};
  }
  
  static navigationOptions = {
    title: 'Accounts',
  };

  handleSignOut = () =>{
    this.props.dispatch(logout());
    onSignOut();
  }

  handleMenuClicked = (navigateTo) => {
    this.props.navigation.navigate(navigateTo);
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.handleMenuClicked("ChangePIN")}>
          <Text style={styles.buttonText}>Change PIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleMenuClicked("AboutUs")}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleSignOut()}>
          <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  state: state.login
})

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1c313a',
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 16,
    width: 300,
  },
});

export default connect(mapStateToProps)(Account);