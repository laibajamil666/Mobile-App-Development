import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../components/Header';

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
    <View style={styles.container}>
      <Header title="Perfumes" navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Fragrance Collection</Text>
        <Text style={styles.subtitle}>Find your signature scent</Text>
        
        <View style={styles.categoriesContainer}>
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
                style={styles.categoryImage}
                imageStyle={styles.imageStyle}
                resizeMode="cover"
              >
                <View style={styles.textOverlay}>
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
  container: {
    flex: 1,
    backgroundColor: '#f4ecf7',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#8e44ad',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#9b59b6',
  },
  categoriesContainer: {
    padding: 15,
  },
  categoryCard: {
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  categoryImage: {
    flex: 1,
    justifyContent: 'flex-end', 
  },
  imageStyle: {
    borderRadius: 15,
  },
  textOverlay: {
    backgroundColor: 'rgba(142, 68, 173, 0.5)', 
    paddingVertical: 8,  
    alignItems: 'center',
  },
  categoryName: {
    color: 'white',
    fontSize: 20, // 
    fontWeight: 'bold',
  },
  categorySubtitle: {
    color: 'white',
    fontSize: 14,
    marginTop: 2,
  },
});
