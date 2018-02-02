import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions
} from "react-native";
import { Entypo, MaterialIcons } from "react-native-vector-icons";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default class BottomContent extends React.Component {
  state = {
    region: {
      latitude: 37.400218,
      longitude: 127.104954,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003
    }
  };

  render() {
    return (
      <View style={styles.bottomConponent}>
        <View style={styles.iconView}>
          <View style={styles.iconOne}>
            <MaterialIcons
              style={styles.materialIcon}
              name="local-parking"
              size={70}
              color="#000"
            />
            <Text style={styles.iconText}>주차</Text>
          </View>
          <View style={styles.iconOne}>
            <MaterialIcons
              style={styles.materialIcon}
              name="wifi"
              size={70}
              color="#000"
            />
            <Text style={styles.iconText}>무선 인터넷</Text>
          </View>
        </View>

        <View style={styles.iconView}>
          <View style={styles.iconOne}>
            <MaterialIcons
              style={styles.materialIcon}
              name="android"
              size={70}
              color="#000"
            />
            <Text style={styles.iconText}>화장실</Text>
          </View>
          <View style={styles.iconOne}>
            <MaterialIcons
              style={styles.materialIcon}
              name="accessible"
              size={70}
              color="#000"
            />
            <Text style={styles.iconText}>장애인 편의시설</Text>
          </View>
        </View>

        <View style={{ alignContent: "center" }}>
          <Text style={{ textAlign: "center", fontSize: 20, color: "#51D89E" }}>
            경기도 성남시 분당구 대왕판교로654번길 12 경기창조혁신센터 9층
          </Text>
        </View>

        <MapView
          style={styles.customMap}
          region={this.state.region}
          zoomEnabled={true}
          rotateEnabled={false}
        >
          <Marker
            coordinate={{
              latitude: 37.400218,
              longitude: 127.104954,
            }}
            centerOffset={{
              x: 37.400218,
              y: 127.104954,
            }}
            pinColor={"#000"}
            flat={true}
            pinColor={"red"}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomConponent: {
    justifyContent: "center",
    height: Dimensions.get("window").height
  },
  iconView: {
    flexDirection: "row"
  },
  iconOne: {
    flex: 1,
    marginBottom: 30
  },
  iconText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  materialIcon: {
    textAlign: 'center'
  },
  customMap: {
    height: 300,
  },
});
