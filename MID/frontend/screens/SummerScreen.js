import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../components/Header';

const subcategories = [
  { 
    id: 1, 
    name: 'Pret Collection', 
    image: require('../../assets/summer_pret.jpg'), 
    category: 'Summer Pret' 
  },
  { 
    id: 2, 
    name: 'Unstitched', 
    image: require('../../assets/summer_unstitched.jpg'), 
    category: 'Summer Unstitched' 
  },
];

export default function SummerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Summer Collection" navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Summer Vibes</Text>
        <Text style={styles.subtitle}>Light and comfortable fashion for sunny days</Text>
        
        <View style={styles.subcategoriesContainer}>
          {subcategories.map((subcategory) => (
            <TouchableOpacity 
              key={subcategory.id}
              style={styles.subcategoryCard}
              onPress={() => navigation.navigate('ProductList', { 
                category: subcategory.category,
                title: subcategory.name 
              })}
            >
              <ImageBackground 
                source={subcategory.image}
                style={styles.subcategoryImage}
                imageStyle={styles.imageStyle}
              >
                <View style={styles.textOverlay}>
                  <Text style={styles.subcategoryName}>{subcategory.name}</Text>
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
    backgroundColor: '#fff9e6',
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#e67e22',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#d35400',
    paddingHorizontal: 20,
  },
  subcategoriesContainer: {
    padding: 15,
  },
  subcategoryCard: {
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  subcategoryImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15,
  },
  textOverlay: {
    backgroundColor: 'rgba(230, 126, 34, 0.8)',
    padding: 15,
  },
  subcategoryName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});