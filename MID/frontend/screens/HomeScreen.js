import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';

const categories = [
  { 
    id: 1, 
    name: 'Winter', 
    image: require('../../assets/winter_collection.jpg'), 
    screen: 'Winter' 
  },
  { 
    id: 2, 
    name: 'Summer', 
    image: require('../../assets/summer_collection.jpg'), 
    screen: 'Summer' 
  },
  { 
    id: 3, 
    name: 'Perfumes', 
    image: require('../../assets/perfumes_collection.jpg'), 
    screen: 'Perfumes' 
  },
  { 
    id: 4, 
    name: 'Sale', 
    image: require('../../assets/sale_collection.jpg'), 
    screen: 'Sale',
    subtitle: 'Up to 50% OFF' 
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Fashion Store" showCartIcon={true} navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.welcomeText}>Discover Your Style</Text>
        <Text style={styles.subtitle}>Premium Fashion Collection</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <CategoryCard 
              key={category.id} 
              category={category}
              onPress={() => navigation.navigate(category.screen)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7f8c8d',
  },
  categoriesContainer: {
    padding: 10,
  },
});