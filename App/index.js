// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const tales = [
  { id: '1', title: 'The Tortoise and the Hare', content: 'Once upon a time...' },
  { id: '2', title: 'The Boy Who Cried Wolf', content: 'Long ago, there was...' },
  { id: '3', title: 'Cinderella', content: 'In a faraway land...' },
];

const HomeScreen = ({ navigation }) => {
  const renderTaleItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taleItem}
      onPress={() => navigation.navigate('Tale', { tale: item })}
    >
      <Text style={styles.taleTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Tales Collection</Text>
      <FlatList
        data={tales}
        renderItem={renderTaleItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const TaleScreen = ({ route }) => {
  const { tale } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{tale.title}</Text>
      <Text style={styles.content}>{tale.content}</Text>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tale" component={TaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  taleItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
  },
  taleTitle: {
    fontSize: 18,
  },
  content: {
    fontSize: 18,
    lineHeight: 24,
  },
  taleItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
  },
  taleTitle: {
    fontSize: 18,
  },
});