import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { GlobalStyles, Colors, Typography } from '../styles/GlobalStyles';

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
    <View style={GlobalStyles.container}>
      <Header title="Fashion Store" showCartIcon={true} navigation={navigation} />
      <ScrollView style={GlobalStyles.scrollView}>
        <Text style={GlobalStyles.welcomeText}>Discover Your Style</Text>
        <Text style={[Typography.body, GlobalStyles.textCenter, { marginBottom: 20 }]}>
          Premium Fashion Collection
        </Text>
        <View style={GlobalStyles.categoriesContainer}>
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
  // No local styles needed, using global styles only
});