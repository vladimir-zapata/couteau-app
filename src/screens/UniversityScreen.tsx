import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {RootStackParamList} from '../App';
import {University} from '../features/university/University';
import Spacer from '../ui/spacer/Spacer';

type Props = NativeStackScreenProps<RootStackParamList, 'University'>;

const UniversityScreen = ({navigation}: Props) => {
  const [country, setCountry] = useState('Dominican Republic');
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedCountry, setDebouncedCountry] = useState(country);

  const fetchUniversities = useCallback(async () => {
    if (!debouncedCountry) {
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${encodeURIComponent(
          debouncedCountry,
        )}`,
      );
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [debouncedCountry]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCountry(country);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [country]);

  useEffect(() => {
    fetchUniversities();
  }, [fetchUniversities]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>University Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Search" onPress={fetchUniversities} />
      <Spacer marginTop={20} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={universities}
          keyExtractor={(university: University) => university.name}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.universityContainer}
              onPress={() =>
                navigation.navigate('UniversityDetail', {university: item})
              }>
              <Text style={styles.universityName}>{item.name}</Text>
              <Text>{item.domains.join(', ')}</Text>
            </TouchableOpacity>
          )}
        />
      )}
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  universityContainer: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  universityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UniversityScreen;
