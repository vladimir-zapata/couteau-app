import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'GenderPredictor'>;

const GenderPredictorScreen = ({}: Props) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const fetchGender = async () => {
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();
      setGender(data.gender);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Predict Gender</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="black"
      />
      <Button title="Predict" onPress={fetchGender} />
      {gender ? (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Gender: {gender}</Text>
          <Text style={styles.icon}>{gender === 'male' ? '♂️' : '♀️'}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  icon: {fontSize: 24},
  input: {
    color: 'black',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
});

export default GenderPredictorScreen;
