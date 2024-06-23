import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View, Linking, Button } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'UniversityDetail'>;

const UniversityDetailScreen = ({ route, navigation }: Props) => {
  const { university } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{university.name}</Text>
      <Text style={styles.text}>{university.domains.join(', ')}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(university.web_pages[0])}>
        Visit Website
      </Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});

export default UniversityDetailScreen;
