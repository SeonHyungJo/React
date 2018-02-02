import React from "react";
import {
  Text,
  StyleSheet,
  View,
} from "react-native";
import { Entypo, MaterialIcons } from "react-native-vector-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Copyright © Vreedu Android 2018 by Sseon
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
