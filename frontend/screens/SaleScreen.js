import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { GlobalStyles, Colors, Typography } from '../styles/GlobalStyles';

const saleProducts = [
  {
    id: 1,
    name: 'Winter Coat',
    price: 79.99,
    originalPrice: 129.99,
    image: require('../../assets/sale_coat.jpg'),
    discount: '40% OFF'
  },
  {
    id: 2,
    name: 'Summer Dress',
    price: 35.99,
    originalPrice: 59.99,
    image: require('../../assets/sale_dress.jpg'),
    discount: '35% OFF'
  },
  {
    id: 3,
    name: 'Designer Perfume',
    price: 45.99,
    originalPrice: 79.99,
    image: require('../../assets/sale_perfume.jpg'),
    discount: '45% OFF'
  },
  {
    id: 4,
    name: 'Casual Shirt',
    price: 25.99,
    originalPrice: 39.99,
    image: require('../../assets/sale_shirt.jpg'),
    discount: '30% OFF'
  },
  {
    id: 5,
    name: 'Winter Sweater',
    price: 49.99,
    originalPrice: 79.99,
    image: require('../../assets/sale_sweater.jpg'),
    discount: '40% OFF'
  },
  {
    id: 6,
    name: 'Linen Pants',
    price: 32.99,
    originalPrice: 49.99,
    image: require('../../assets/sale_pants.jpg'),
    discount: '35% OFF'
  },
];

export default function SaleScreen({ navigation }) {
  return (
    <View style={GlobalStyles.containerSale}>
      <Header title="Sale" navigation={navigation} />
      <ScrollView style={GlobalStyles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Big Sale!</Text>
          <Text style={styles.subtitle}>Limited time offers - Don't miss out!</Text>
        </View>
        <View style={GlobalStyles.productsContainer}>
          {saleProducts.map((product) => (
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
  header: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: Colors.sale.header,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.textLight,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: Colors.textLight,
    marginTop: 5,
    textAlign: 'center',
  },
});