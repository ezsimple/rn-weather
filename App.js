import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import Weather from "./Weather";

const API_KEY="2c467a4ec79011e37ffe12a0b930c54e";

export default class App extends Component {
  state = {
    isLoaded : false,
    error : null,
    city : null, 
    name: null,
    temperature: null,
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this._getCurrentWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        })
      }
    );
  }
  _getCurrentWeather(lat, lon) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(json=>{
      console.log(json);
      this.setState({
        city: json.name,
        name: json.weather[0].main,
        temperature: json.main.temp,
        isLoaded:true,
      });
      console.log("_getCurrentWeather : ", this.state.city, this.state.name, this.state.temperature);
    })
  }

  render() {
    const { isLoaded, error, name, temperature } = this.state;
    console.log("temperator : ", temperature);
    return (
      <View style={styles.container}>
        {isLoaded ? <Weather weatherName={name} temp={Math.ceil(temperature - 273.15)}/> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
            {error?<Text style={styles.errorText}>{error}</Text>:null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent"
  },
  loading: {
    flex: 1,
    backgroundColor: "#FBF9B9",
    justifyContent: "flex-end",
    paddingLeft : 25
  }, 
  loadingText: {
    fontSize: 40,
    marginBottom : 80
  }
});
