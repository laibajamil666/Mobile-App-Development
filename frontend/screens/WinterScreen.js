import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../components/Header';
import { GlobalStyles, Colors, Typography } from '../styles/GlobalStyles';

const subcategories = [
  {
    id: 1,
    name: 'Pret Collection',
    image: require('../../assets/winter_pret.jpg'),
    category: 'Winter Pret'
  },
  {
    id: 2,
    name: 'Unstitched',
    image: require('../../assets/winter_unstitched.jpg'),
    category: 'Winter Unstitched'
  },
];

export default function WinterScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Header title="Winter Collection" navigation={navigation} />
      <ScrollView style={GlobalStyles.scrollView}>
        <Text style={[Typography.subheading, GlobalStyles.textCenter, { marginTop: 20 }]}>
          Winter Fashion
        </Text>
        <Text style={[Typography.body, GlobalStyles.textCenter, { marginBottom: 20, paddingHorizontal: 20 }]}>
          Stay warm and stylish with our premium winter collection
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
                <View style={GlobalStyles.textOverlay}>
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
  subcategoryName: {
    color: Colors.textLight,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});