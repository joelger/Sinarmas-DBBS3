import React from 'react';
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

export default class ChangePIN extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRequestedPINVisible: false,
    }
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
      alert('PIN Changed Successfully.')
      navigation.goBack();
    }
  }

  handleChange = () => {
    this.changeRequestPINVisibility(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.textLabel}>Old PIN</Text>
          <TextInput placeholder="" style={styles.textInput} keyboardType="number-pad" secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.textLabel}>New PIN</Text>
          <TextInput placeholder="" style={styles.textInput} keyboardType="number-pad" secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity underlayColor="rgb(230, 230, 230)" style={styles.button} onPress={() => this.handleChange()}>
            <Text style={styles.buttonText}>Change PIN</Text>
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