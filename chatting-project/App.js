import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.containerStyle}>
          <FormLabel>User ID</FormLabel>
          <FormInput />
        </View>
        <View style={styles.containerStyle}>
          <FormLabel>Nickname</FormLabel>
          <FormInput />
        </View>
        <View style={styles.containerStyle}>
          <Button
            buttonStyle={{ backgroundColor: '#2096f3' }}
            title='Connect'
          />
        </View>
        <View style={styles.containerStyle}>
          <FormValidationMessage>Error message</FormValidationMessage>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    marginTop: 10
  }
}
