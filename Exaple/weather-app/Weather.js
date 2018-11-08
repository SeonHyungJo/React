import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";


const weatherCases = {
    Rain: {
        colors:["#00c6fb", "#005bea"],
        title: "비가 온다",
        subtitle: "우산챙겨라",
        icon: "weather-rainy"
    },
    Clear: {
        colors:["#fef253", "#ff7300"],
        title: "날이 맑네",
        subtitle: "오늘도 기분좋게 시작",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors:["#00ecbc", "#007adf"],
        title: "천둥번개가 친단다",
        subtitle: "오늘은 나가지 말아라",
        icon: "weather-lightning"
    },
    Clouds: {
        colors:["#d7d2cc", "#304352"],
        title: "오늘은 흐림",
        subtitle: "기분도 꿀꿀해 지겠다",
        icon: "weather-cloudy"
    },
    Snow: {
        colors:["#7de2fc", "#b9b6e5"],
        title: "눈이 옵니다.",
        subtitle: "Do you want to build a snowman?",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors:["#89f7fe", "#66a6ff"],
        title: "이슬비 내리는~",
        subtitle: "이른 아침에 우산 셋이 나란히",
        icon: "weather-pouring"
    },
    Haze: {
        colors:["#89f7fe", "#66a6ff"],
        title: "안개낀날",
        subtitle: "안개안개",
        icon: "weather-fog"
    },
}

Weather = ({ temp, weatherName }) => {
    console.log(weatherName);
    return(
        <LinearGradient colors={weatherCases[weatherName].colors } style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon }/>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title }</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle }</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        fontSize: 60,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10,
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300",
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }

})