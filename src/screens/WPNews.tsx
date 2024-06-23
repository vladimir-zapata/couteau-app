import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { RootStackParamList } from '../App';
import { New } from '../features/news/New';
import Spacer from '../ui/spacer/Spacer';

type Props = NativeStackScreenProps<RootStackParamList, 'WPNews'>;

const WPNewsScreen = ({ }: Props) => {
  const [news, setNews] = useState<New[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://migracion.gob.do/wp-json/wp/v2/posts?per_page=3',
        );
        const data: New[] = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Spacer marginVertical={20} marginBottom={40}>
        <Image
          source={require('../assets/migracion.png')}
          style={styles.logo}
        />
        <Text style={styles.mainTitle}>Dirección General de Migración</Text>
      </Spacer>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.newsContainer}>
            <Text style={styles.title}>{item.title.rendered}</Text>
            <Text style={styles.excerpt}>
              {item.excerpt.rendered.replace(/<[^>]*>?/gm, '')}
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <Text style={styles.link}>Read more</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  newsContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    backgroundColor: 'white',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  excerpt: {
    marginTop: 10,
    fontSize: 14,
  },
  link: {
    marginTop: 10,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default WPNewsScreen;
