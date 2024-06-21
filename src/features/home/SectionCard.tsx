import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Section } from './Section';

type Props = {
    section: Section;
    navigation: any;
}

const SectionCard = ({ section, navigation }: Props) => (
  <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(section.screen)}>
    <Text style={styles.icon}>{section.icon}</Text>
    <Text style={styles.title}>{section.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    margin: 10,
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default SectionCard;
