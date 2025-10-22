import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../components/Header';
import { GlobalStyles, Colors, Typography } from '../styles/GlobalStyles';

const categories = [
  {
    id: 1,
    name: 'Men',
    image: require('../../assets/men_perfume.jpg'),
    category: 'Men Perfumes'
  },
  {
    id: 2,
    name: 'Women',
    image: require('../../assets/women_perfume.jpg'),
    category: 'Women Perfumes'
  },
];

export default function PerfumesScreen({ navigation }) {
  return (
    <View style={GlobalStyles.containerPurple}>
      <Header title="Perfumes" navigation={navigation} />
      <ScrollView style={GlobalStyles.scrollView}>
        <Text style={[Typography.subheading, GlobalStyles.textCenter, { color: Colors.purple.primary, marginTop: 20 }]}>
          Fragrance Collection
        </Text>
        <Text style={[Typography.body, GlobalStyles.textCenter, { color: Colors.purple.secondary, marginBottom: 20 }]}>
          Find your signature scent
        </Text>
        <View style={GlobalStyles.categoriesContainer}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.categoryCard}
              onPress={() => navigation.navigate('ProductList', {
                category: item.category,
                title: item.name
              })}
            >
              <ImageBackground
                source={item.image}
                style={GlobalStyles.categoryImage}
                imageStyle={GlobalStyles.imageStyle}
                resizeMode="cover"
              >
                <View style={GlobalStyles.purpleOverlay}>
                  <Text style={styles.categoryName}>{item.name}</Text>
                  <Text style={styles.categorySubtitle}>Perfumes</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  categoryName: {
    color: Colors.textLight,
    fontSize: 20,
    fontWeight: 'bold',
  },
  categorySubtitle: {
    color: Colors.textLight,
    fontSize: 14,
    marginTop: 2,
  },
});