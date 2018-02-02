import React from "react";
import {
  Image,
  Alert,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Entypo, MaterialIcons } from "react-native-vector-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 400,
    backgroundColor: "#39313C"
  }
});
