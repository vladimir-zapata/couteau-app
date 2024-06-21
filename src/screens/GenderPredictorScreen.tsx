import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'GenderPredictor'>;

const GenderPredictorScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.container}>Gender Predictor Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GenderPredictorScreen;
