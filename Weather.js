import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// expo 라이브러리에서 사용할 수 있는 컴포넌트 이다.
import {LinearGradient} from 'expo';

// expo 사이트에서 제공하고 있는 벡터 아이콘 서비스 이다.
// 해당 컴포넌트명을 가져와야 사용할 수 있다.
import {MaterialCommunityIcons} from '@expo/vector-icons';

// export default class Weather extends Component {
//     render() {
//         return(
//             <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//                 <View style={styles.upper}>
//                     <Ionicons color="white" size={144} name="ios-rainy" />
//                     <Text style={styles.temp}>35°</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Rainging like MF</Text>
//                     <Text style={styles.subtitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         );
//     }
// }

// -----------------------------------------------------------------------------
// 파라미터 전달 포맷이 특이하다. - 이것 때문에 한참을 해맸다... 
// {A}, {B} 이렇게 전달하지 않는다. 이렇게 하게 되면 {B}의 값이 전달되지 않는다.
// -----------------------------------------------------------------------------
export default function Weather( {weatherName, temp} ) {
    console.log("weartherName : ", weatherName, "temp : ", temp);
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

// import PropTypes from "prop-types"; 으로 가져와야 사용할 수 있다.
// 파라미터 Validator 같은 것으로 보여진다.
import PropTypes from "prop-types"; // 이걸 알아야 한다. 
Weather.propTypes = {
    weatherName: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired
};

// ------------------------------------------------------------------
// class 또는 function을 export 할 수 있다.
// 또한 선언시 사용할 수 있다.
// 아니면 아래와 같이 별도로 정의하여도 된다.
// export default Weather;
// ------------------------------------------------------------------

// 파라미터 형식에 대해 미리 정의한다. 재미있는 방식으로 보여진다.
// 일관성이 있어보여서 좋다.
const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining link a MF",
        subtitle: "For more info look outside",
        icon: "weather-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny as Fuck",
        subtitle: "Go get your ass burnt",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning-rainy"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay ~ ",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Don't know what that is",
        icon: "weather-hail"
    },
    Mist: {
        colors: ["#07D2CC", "#304352"],
        title: "Haze",
        subtitle: "It's like you have no glasses on.",
        icon: "weather-fog"
    },
}

// flexbox 문법에 대해 알아야 한다.
// flex:1 이 선언되어 있는 경우와 아닌 경우에 대해 주의깊게 알아보아야 한다.
const styles = StyleSheet.create({
    container: {
        flex:1
    }, 
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }, 
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        margin: 10
    },
    lower : {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        fontWeight: "300",
        backgroundColor: "transparent",
        color: "white",
        paddingLeft: 25,
        marginBottom: 10
    },
    subtitle: {
        fontSize: 24, 
        backgroundColor: "transparent",
        color: "white",
        paddingLeft: 25,
        marginBottom: 30,
    }
});