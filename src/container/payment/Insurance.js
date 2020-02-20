import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';

import RequestPIN from '../../component/RequestPIN'

export default class Insurance extends React.Component {
  _isMounted = false;

  constructor(props){
    super(props);
    this.state = {
        chosenDestination: {
          name: '',
          number: ''
        },
      isRequestedPINVisible: false,
    }
  }

  onSelectDestination = (name, number) => {
    this.setState({
      chosenDestination: { name: name, number: number }
    })
  }

  handleChooseDestination = () => {
    const { navigation } = this.props;
    navigation.navigate('InsuranceDestination', { onSelectDestination: this.onSelectDestination })
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  changeRequestPINVisibility = (bool) => {
    this.setState({ isRequestPINVisible: bool });
  }

  validatePIN = (pin) => {
    const { navigation } = this.props;
    if (pin != "123456") {
      Alert.alert(
        'Failed',
        'Your PIN is wrong. Please try again.',
        [
          {
            text: 'OK',
            style: 'cancel',
          }
        ]
      )
    } else {
      this.changeRequestPINVisibility(false);
      alert('Payment success.')
      navigation.goBack();
    }
  }

  handlePayment = () => {
    this.changeRequestPINVisibility(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.textLabel}>Insurance Destination</Text>
          <TouchableHighlight onPress={() => this.handleChooseDestination()} underlayColor="rgb(230, 230, 230)" style={styles.buttonDestinationAccount}>
            <TextInput
              editable={false}
              placeholder="-Choose-"
              style={[styles.textInput, { color: 'black' }]}
              value={this.state.chosenDestination.name}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity underlayColor="rgb(230, 230, 230)" style={styles.button} onPress={() => this.handlePayment()}>
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={this.state.isRequestPINVisible}
          transparent={true}
          onRequestClose={() => this.changeRequestPINVisibility(false)}>
          <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPressOut={() => { this.changeRequestPINVisibility(false) }}>
            <TouchableWithoutFeedback>
              <RequestPIN changeRequestPINVisibility={this.changeRequestPINVisibility} validatePIN={this.validatePIN} />
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
  },
  subContainer: {
    marginVertical: 10,
  },
  buttonDestinationAccount: {
    borderRadius: 10,
    width: 250,
  },
  textLabel: {
    paddingLeft: 5,
    width: 250,
    textAlign: 'left',
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 10,
    paddingVertical: 8,
    borderRadius: 10,
    width: 250,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1c313a',
    borderRadius: 10,
    paddingVertical: 16,
    width: 250,
  },
});