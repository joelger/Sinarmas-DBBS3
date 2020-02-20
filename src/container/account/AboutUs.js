import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';

export default class AboutUs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
    <Text style={styles.textLabel}>
        About Us {"\n"}
        A Mobile Banking Aplication! {"\n"}{"\n"}
        Created By : {"\n"}
        Dania Ester {"\n"}
        Rian Krishandi {"\n"}
        Kevin Willianes {"\n"}
        Joel Geraldine
    </Text>
        </View>
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
  textLabel: {
    paddingLeft: 5,
    width: 250,
    textAlign: 'center',
  },

});