import React from "react";
import { AppRegistry, ScrollView, Image, Text } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  _onLongPressButton() {
    Alert.alert("You long-pressed the button!");
  }

  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    );
  }
}

