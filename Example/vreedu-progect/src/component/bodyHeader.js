import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions
} from "react-native";
import { Entypo, MaterialIcons } from "react-native-vector-icons";

export default class BodyHeader extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.imageBackround}
        source={require("../images/intro-bg.jpg")}
      >
        <View style={styles.contentView}>
          <Text style={styles.contentTitle}>브리드</Text>
          <Text style={styles.contentDetail}>
            국제 어학 솔루션 개발 및 공급.
          </Text>
          <Text style={styles.contentDetail}>
            국제 무역 중개업을 통한 솔루션 수출 사업
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackround: {
    width: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height - 90,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  contentView: {
    marginBottom: 170,
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  contentTitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
    fontWeight: "700"
  },
  contentDetail: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "300"
  }
});
