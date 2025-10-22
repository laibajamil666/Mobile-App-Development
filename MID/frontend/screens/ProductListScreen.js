import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const productsData = {
  'Winter Pret': [
    { id: 1, name: 'Winter Coat', price: 129.99, image: require('../../assets/winter_coat.jpg') },
    { id: 2, name: 'Wool Sweater', price: 79.99, image: require('../../assets/wool_sweater.jpg') },
    { id: 3, name: 'Winter Jacket', price: 149.99, image: require('../../assets/winter_jacket.jpg') },
    { id: 4, name: 'Fleece Hoodie', price: 59.99, image: require('../../assets/fleece_hoodie.jpg') },
    { id: 5, name: 'Winter Cardigan', price: 69.99, image: require('../../assets/winter_cardigan.jpg') },
    { id: 6, name: 'Long Dress', price: 99.99, image: require('../../assets/long_dress.jpg') },
  ],
  'Winter Unstitched': [
    { id: 1, name: 'Wool Fabric', price: 45.99, image: require('../../assets/wool_fabric.jpg') },
    { id: 2, name: 'Cashmere Fabric', price: 89.99, image: require('../../assets/cashmere_fabric.jpg') },
    { id: 3, name: 'Fleece Fabric', price: 29.99, image: require('../../assets/fleece_fabric.jpg') },
    { id: 4, name: 'Winter Cotton', price: 39.99, image: require('../../assets/winter_cotton.jpg') },
  ],
  'Summer Pret': [
    { id: 1, name: 'Linen Shirt', price: 39.99, image: require('../../assets/linen_shirt.jpg') },
    { id: 2, name: 'Cotton Top', price: 29.99, image: require('../../assets/cotton_top.jpg') },
    { id: 3, name: 'Beach Coverup', price: 49.99, image: require('../../assets/beach_coverup.jpg') },
    { id: 4, name: 'Summer Pants', price: 44.99, image: require('../../assets/summer_pants.jpg') },
    { id: 5, name: 'Light Shirt', price: 37.99, image: require('../../assets/light_shirt.jpg') },
  ],
  'Summer Unstitched': [
    { id: 1, name: 'Cotton Fabric', price: 29.99, image: require('../../assets/cotton_fabric.jpg') },
    { id: 2, name: 'Linen Fabric', price: 24.99, image: require('../../assets/linen_fabric.jpg') },
    { id: 3, name: 'Silk Fabric', price: 69.99, image: require('../../assets/silk_fabric.jpg') },
    { id: 4, name: 'Chiffon Fabric', price: 39.99, image: require('../../assets/chiffon_fabric.jpg') },
  ],
  'Men Perfumes': [
    { id: 1, name: 'Woody Fragrance', price: 79.99, image: require('../../assets/men_fragrance1.jpg') },
    { id: 2, name: 'Fresh Scent', price: 69.99, image: require('../../assets/men_fragrance2.jpg') },
    { id: 3, name: 'Ocean Breeze', price: 89.99, image: require('../../assets/men_fragrance3.jpg') },
    { id: 4, name: 'Leather Essence', price: 99.99, image: require('../../assets/men_fragrance4.jpg') },
  ],
  'Women Perfumes': [
    { id: 1, name: 'Floral Essence', price: 89.99, image: require('../../assets/women_fragrance1.jpg') },
    { id: 2, name: 'Sweet Bouquet', price: 75.99, image: require('../../assets/women_fragrance2.jpg') },
    { id: 3, name: 'Rose Garden', price: 95.99, image: require('../../assets/women_fragrance3.jpg') },
    { id: 4, name: 'Vanilla Dream', price: 82.99, image: require('../../assets/women_fragrance4.jpg') },
  ],
};

export default function ProductListScreen({ route, navigation }) {
  const { category, title } = route.params;
  const products = productsData[category] || [];

  return (
    <View style={styles.container}>
      <Header title={title} navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.productCount}>{products.length} products available</Text>
        </View>
        <View style={styles.productsContainer}>
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={() => console.log('Added to cart:', product.name)}
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
  header: {
    padding: 15,
    backgroundColor: '#34495e',
  },
  productCount: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  productsContainer: {
    padding: 15,
  },
});
