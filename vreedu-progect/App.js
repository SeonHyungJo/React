import React from "react";
import {
  Image,
  Alert,
  Button,
  ActivityIndicator,
  StatusBar,
  AppRegistry,
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  View,
  SectionList,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Entypo, MaterialIcons } from "react-native-vector-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 2,
      showCancel: false
    };
  }

  toggleCancel = () => {
    this.setState({
      showCancel: !this.state.showCancel
    });
  };

  _renderCancel = () => {
    if (this.state.showCancel) {
      return (
        <TouchableHighlight onPress={this.toggleCancel()}>
          <View>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>
              <Entypo name="phone" size={15} color="#fff" /> 010-2992-9736
            </Text>
            <Text style={styles.headerText}>
              <Entypo name="clock" size={15} color="#fff" /> Mon-Sat: 8:00 -
              17:00
            </Text>
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>
              <MaterialIcons name="email" size={15} color="#fff" /> esketch@gmail.com
            </Text>
            <View style={styles.iconView}>
              <Entypo
                name="facebook-with-circle"
                size={20}
                color="#fff"
                onPress={() => {
                  Alert.alert("페북 이동");
                }}
              />
              <Entypo
                name="twitter-with-circle"
                size={20}
                color="#fff"
                onPress={() => {
                  Alert.alert("트위터 이동");
                }}
              />
              <Entypo
                name="instagram-with-circle"
                size={20}
                color="#fff"
                onPress={() => {
                  Alert.alert("인스타 그램 이동");
                }}
              />
            </View>
          </View>

          <View style={styles.headerTitleView}>
            <Image style={styles.titleLogo}
              source={require('./src/images/vreedu_logo.png')}
            />
            <TouchableOpacity style={styles.list}>
              <MaterialIcons name="list" size={35} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scrollBody}>

          {/* <ImageBackground imageStyle={{resizeMode: 'stretch'}} source={require('./src/images/intro-bg.jpg')}>
          </ImageBackground> */}

          <View style={styles.bodyViewHeader}>
            <Text>footer</Text>
          </View>
          <View style={styles.bodyViewHeader}>
            <Text>footer</Text>
          </View>
          <View style={styles.bodyViewHeader}>
            <Text>footer</Text>
          </View>
          <View style={styles.bodyViewHeader}>
            <Text>footer</Text>
          </View>
          <View style={styles.bodyViewHeader}>
            <Text>footer</Text>
          </View>
          <View style={styles.bodyViewHeader}>
            <Text>footer</Text>
          </View>

          <View style={styles.footer}>
            <Text>footer</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 22,
    flex: 1
  },
  header: {
    flex: 0.2,
    backgroundColor: "#39313C"
  },
  headerTextView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  headerText: {
    flex: 1,
    color: "#fff",
    textAlign: "justify",
    fontSize: 15
  },
  headerTitleView: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  titleLogo: {
    flex: 1,
    resizeMode: 'contain',
    marginRight: 50,
  },
  iconView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  list: {
    marginRight: 15,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 5
  },
  bodyViewHeader:{
    minHeight: 300,
  },
  footer: {
    backgroundColor: "#39313C"
  },
  scrollBody: {
    flex: 1
  }
});
