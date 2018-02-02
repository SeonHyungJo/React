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
        <Text style={styles.footerText}>
          Copyright © Vreedu Website 2017 by 000.
        </Text>
        <Text style={styles.footerText}>
          All pictures cannot be copied without permission.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    height: 70,
    backgroundColor: "#39313C"
  },
  footerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "500"
  }
});
