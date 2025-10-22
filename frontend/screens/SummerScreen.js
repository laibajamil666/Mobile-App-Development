import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../components/Header';
import { GlobalStyles, Colors, Typography } from '../styles/GlobalStyles';

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
    <View style={GlobalStyles.containerOrange}>
      <Header title="Summer Collection" navigation={navigation} />
      <ScrollView style={GlobalStyles.scrollView}>
        <Text style={[Typography.subheading, GlobalStyles.textCenter, { color: Colors.orange.primary, marginTop: 20 }]}>
          Summer Vibes
        </Text>
        <Text style={[Typography.body, GlobalStyles.textCenter, { color: Colors.orange.secondary, marginBottom: 20, paddingHorizontal: 20 }]}>
          Light and comfortable fashion for sunny days
        </Text>
        <View style={GlobalStyles.categoriesContainer}>
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
                style={GlobalStyles.categoryImage}
                imageStyle={GlobalStyles.imageStyle}
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
  subcategoryCard: {
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
  },
  textOverlay: {
    backgroundColor: 'rgba(230, 126, 34, 0.8)',
    padding: 15,
  },
  subcategoryName: {
    color: Colors.textLight,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});