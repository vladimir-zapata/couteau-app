import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const AgePredictorScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<any>(null);

  const fetchAge = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      setAge(data.age);
      determineAgeGroup(data.age);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const determineAgeGroup = (ageToDetermine: number) => {
    if (ageToDetermine < 18) {
      setMessage('Joven');
      setImage(require('../assets/young.png'));
    } else if (ageToDetermine < 60) {
      setMessage('Adulto');
      setImage(require('../assets/adult.png'));
    } else {
      setMessage('Anciano');
      setImage(require('../assets/elderly.png'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Predict Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predict" onPress={fetchAge} />
      {age !== null && isLoading === false && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Age: {age}</Text>
          <Text style={styles.result}>{message}</Text>
          <Image source={image} style={styles.image} />
        </View>
      )}
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
  input: {
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
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default AgePredictorScreen;
