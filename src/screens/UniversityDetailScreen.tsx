import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'UniversityDetail'>;

const UniversityDetailScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.container}>University Detail Screen</Text>
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

export default UniversityDetailScreen;
