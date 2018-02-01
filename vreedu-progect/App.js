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
              <MaterialIcons name="email" size={15} color="#fff" />{" "}
              esketch@gmail.com
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
            <Image
              style={styles.titleLogo}
              source={require("./src/images/vreedu_logo.png")}
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
            <Text style={styles.contentTitleW}>브리드</Text>
            <Text style={styles.contentTitleW}>
              국제 어학 솔루션 개발 및 공급. 국제 무역 중개업을 통한 솔루션 수출
              사업
            </Text>
          </View>

          <View style={styles.bodyViewText}>
            <Image
              style={styles.contentImage}
              source={require("./src/images/onnBookImg.png")}
            />
            <Text style={styles.contentTitleG}>온북(OnnBook)</Text>
            <Text style={styles.contentDetailTitle2}>
              온북은 스마트 포인트 리딩 앱으로 원어민 음성을 단어별 글과
              매치되어 있어 전자화면의 글 읽기에 집중할 수 있게 해 줍니다.
            </Text>

            <View style={styles.contentDetail2}>
              <Text style={styles.contentDetailSub2}>
                듣기, 읽기, 말하기, 단어사전, 한글 번역, 등을 지원{" "}
              </Text>
              <Text style={styles.contentDetailSub2}>
                세계 뉴스 : 미국 앵커의 원어민 음성과 기사 내용 제공
              </Text>
              <Text style={styles.contentDetailSub2}>
                대중 소설 : 세계 100대 고전문학, 단편 소설{" "}
              </Text>
              <Text style={styles.contentDetailSub2}>
                연설문 : 세계 유명인들의 연설문
              </Text>
              <Text style={styles.contentDetailSub2}>
                청취시험 : 실제 출시 되었던 토익 등 청취 훈련 원어민 음성과
                텍스트의 매치 리딩 원어민 음성 대비 비교 분석
              </Text>
            </View>
            
          </View>

          <View style={styles.bodyViewText}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.contentTitleG}>온북(OnnBook)</Text>
              <Text style={styles.contentTitleW}>주요기능</Text>
            </View>

            <View style={styles.contentDetailList}>
              <View style={styles.contentDetail}>
                <MaterialIcons name="phone-iphone" size={50} color="#000" />
                <Text style={styles.contentDetailTitle}>영어 듣기 평가</Text>
                <Text style={styles.contentDetailSub}>
                  중학교/고등학교/토익 기출문제 중심 듣기 평가 청취훈련
                </Text>
              </View>
              <View style={styles.contentDetail}>
                <MaterialIcons name="phone-iphone" size={50} color="#000" />
                <Text style={styles.contentDetailTitle}>세계단편소설</Text>
                <Text style={styles.contentDetailSub}>
                  영어도서관. 세계 100대 고전문학, 단편 소설 원어민 음성과
                  텍스트 매치 리딩
                </Text>
              </View>
            </View>

            <View style={styles.contentDetailList}>
              <View style={styles.contentDetail}>
                <MaterialIcons name="phone-iphone" size={50} color="#000" />
                <Text style={styles.contentDetailTitle}>북마크</Text>
                <Text style={styles.contentDetailSub}>
                  스터디 중 북마크한 모든 위치 표시
                </Text>
              </View>
              <View style={styles.contentDetail}>
                <MaterialIcons name="phone-iphone" size={50} color="#000" />
                <Text style={styles.contentDetailTitle}>영문 명연설</Text>
                <Text style={styles.contentDetailSub}>
                  세계 100대 명연설문 원문제공 및 원어민 음성과 텍스트 매치 리딩
                </Text>
              </View>
            </View>

            <View style={styles.contentDetailList}>
              <View style={styles.contentDetail}>
                <MaterialIcons name="phone-iphone" size={50} color="#000" />
                <Text style={styles.contentDetailTitle}>뉴스, 신문 청취</Text>
                <Text style={styles.contentDetailSub}>
                  최신 영자신문 음성서비스 제공 미국 앵커의 음성과 기사제고,
                  텍스트 매칭리딩
                </Text>
              </View>
              <View style={styles.contentDetail}>
                <MaterialIcons name="phone-iphone" size={50} color="#000" />
                <Text style={styles.contentDetailTitle}>세계의 명언</Text>
                <Text style={styles.contentDetailSub}>
                  하루에 한중 명언으로 배우는 영어 영문 명언 원어민 음성과
                  텍스트 매치 리딩
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.bodyViewText}>
            <Image
              style={styles.contentImage}
              source={require("./src/images/onnBookImg.png")}
            />
            <Text style={styles.contentTitleG}>온북(OnnBook)</Text>
            <Text style={styles.contentDetailTitle2}>
              온북은 스마트 포인트 리딩 앱으로 원어민 음성을 단어별 글과
              매치되어 있어 전자화면의 글 읽기에 집중할 수 있게 해 줍니다.
            </Text>

            <View style={styles.contentDetail2}>
              <Text style={styles.contentDetailSub2}>
                듣기, 읽기, 말하기, 단어사전, 한글 번역, 등을 지원{" "}
              </Text>
              <Text style={styles.contentDetailSub2}>
                세계 뉴스 : 미국 앵커의 원어민 음성과 기사 내용 제공
              </Text>
              <Text style={styles.contentDetailSub2}>
                대중 소설 : 세계 100대 고전문학, 단편 소설{" "}
              </Text>
              <Text style={styles.contentDetailSub2}>
                연설문 : 세계 유명인들의 연설문
              </Text>
              <Text style={styles.contentDetailSub2}>
                청취시험 : 실제 출시 되었던 토익 등 청취 훈련 원어민 음성과
                텍스트의 매치 리딩 원어민 음성 대비 비교 분석
              </Text>
            </View>
            
          </View>

          <View style={styles.bodyViewHeader}>
            <Text>모두의 공책</Text>
          </View>

          <View style={styles.bodyViewText}>
            <Text>지도</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.headerText}>footer</Text>
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
    resizeMode: "contain",
    marginRight: 50
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
  bodyViewHeader: {
    backgroundColor: "yellow",
    alignItems: "center"
  },
  bodyViewText: {
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#F5F7EB",
    alignItems: "center"
  },
  contentTitleG: {
    fontSize: 30,
    color: "#51D89E",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20
  },
  contentTitleW: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20
  },
  contentDetailList: {
    flexDirection: "row"
  },
  contentImage: {
    width: 200,
    height: 200
  },
  contentDetail: {
    flex: 1,
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  contentDetailTitle: {
    fontSize: 20,
    fontWeight: "700"
  },
  contentDetailSub: {
    fontSize: 12,
    fontWeight: "400"
  },
  contentDetail2: {
    alignItems: "flex-start",
  },
  contentDetailTitle2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    borderColor: "#fff"
  },
  contentDetailSub2: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "200",
    marginLeft: 30,
    marginRight: 30
  },
  footer: {
    flex: 1,
    height: 70,
    backgroundColor: "#39313C"
  },
  scrollBody: {}
});
