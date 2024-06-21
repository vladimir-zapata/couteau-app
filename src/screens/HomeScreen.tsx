import React from 'react';
import {FlatList, Image, StyleSheet, Text} from 'react-native';
import SectionCard from '../features/home/SectionCard';
import {useNavigation} from '@react-navigation/native';
import sections from '../data/data';
import {SafeAreaView} from 'react-native-safe-area-context';
import Spacer from '../ui/spacer/Spacer';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
    <Spacer marginTop={50}/>
      <Text style={styles.title}>Couteau App</Text>
      <Spacer marginVertical={50}>
        <Image
          source={require('../assets/tool-box.png')}
          style={styles.image}
        />
      </Spacer>
      <FlatList
        data={sections}
        renderItem={({item}) => (
          <SectionCard section={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.grid}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    height: 150,
    width: 150,
  },
  grid: {
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
