import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { RootStackParamList } from '../App';
import { WeatherAPIResponse } from '../features/weather/WeatherAPIResponse';
import Spacer from '../ui/spacer/Spacer';

type Props = NativeStackScreenProps<RootStackParamList, 'Weather'>;

export async function getCurrentWeather(): Promise<WeatherAPIResponse> {
  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Dominican+Republic`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: WeatherAPIResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

const WeatherScreen = ({ }: Props) => {
  const [weather, setWeather] = useState<WeatherAPIResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Dominican+Republic`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: WeatherAPIResponse = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Failed to load weather data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather in {weather.location.name}, {weather.location.country}</Text>
      <Text style={styles.text}>Temperature</Text>
      <Text style={styles.text}>{weather.current.temp_c}°C</Text>
      <Spacer marginBottom={10}/>
      <Text style={styles.text}>Condition</Text>
      <Text style={styles.text}>{weather.current.condition.text}</Text>
      <Spacer marginBottom={10}/>
      <Text style={styles.text}>Wind</Text>
      <Text style={styles.text}>{weather.current.wind_kph} kph</Text>
      <Spacer marginBottom={10}/>
      <Text style={styles.text}>Humidity</Text>
      <Text style={styles.text}>{weather.current.humidity}%</Text>
      <Spacer marginBottom={10}/>
      <Text style={styles.text}>Local Time</Text>
      <Text style={styles.text}>{weather.location.localtime}</Text>
      <Spacer marginTop={20}/>
      <Image style={styles.icon} source={{ uri: `http:${weather.current.condition.icon}` }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  icon: {
    width: 64,
    height: 64,
  },
});

export default WeatherScreen;
