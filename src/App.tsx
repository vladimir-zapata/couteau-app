import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GenderPredictorScreen from './screens/GenderPredictorScreen';
import AgePredictorScreen from './screens/AgePredictorScreen';
import UniversityScreen from './screens/UniversityScreen';
import { University } from './features/university/University';
import UniversityDetailScreen from './screens/UniversityDetailScreen';
import AboutMeScreen from './screens/AboutMeScreen';
import WPNewsScreen from './screens/WPNews';
import WeatherScreen from './screens/WeatherScreen';

export type RootStackParamList = {
  Home: undefined;
  GenderPredictor: undefined;
  AgePredictor: undefined;
  University: undefined;
  UniversityDetail: { university: University }
  Weather: undefined;
  WPNews: undefined;
  AboutMe: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="GenderPredictor" component={GenderPredictorScreen} options={{title: 'Gender Predictor'}}/>
        <Stack.Screen name="AgePredictor" component={AgePredictorScreen} options={{title: 'Age Predictor'}}/>
        <Stack.Screen name="University" component={UniversityScreen} />
        <Stack.Screen name="UniversityDetail" component={UniversityDetailScreen} options={{title: 'University Detail'}}/>
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="WPNews" component={WPNewsScreen} options={{title: 'WP News'}}/>
        <Stack.Screen name="AboutMe" component={AboutMeScreen}options={{title: 'About Me'}} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
