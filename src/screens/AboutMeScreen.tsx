import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'AboutMe'>;

const AboutMeScreen = ({}: Props) => {
  const NAME = 'Vladimir Zapata';
  const EMAIL = 'vzapata311@gmail.com';
  const PHONE = '829-804-2347';

  return (
    <View style={styles.container}>
      <Image source={require('../assets/photo-wsp.png')} style={styles.photo} />
      <Text style={styles.name}>{NAME}</Text>
      <Text style={styles.text}>{EMAIL}</Text>
      <Text style={styles.text}>{PHONE}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutMeScreen;
