import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles, Colors, Typography } from '../styles/GlobalStyles';

export default function ProductCard({ product, onAddToCart }) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <View style={GlobalStyles.card}>
      <Image
        source={product.image}
        style={styles.image}
        resizeMode="contain"
      />
      {product.discount && (
        <View style={GlobalStyles.discountBadge}>
          <Text style={styles.discountText}>{product.discount}</Text>
        </View>
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.priceContainer}>
          {hasDiscount && (
            <Text style={styles.originalPrice}>PK{product.originalPrice}</Text>
          )}
          <Text style={styles.price}>PK{product.price}</Text>
        </View>
        <TouchableOpacity style={[GlobalStyles.button, GlobalStyles.primaryButton]} onPress={onAddToCart}>
          <Text style={GlobalStyles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    backgroundColor: '#fff',
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 8,
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.success,
  },
  originalPrice: {
    fontSize: 16,
    color: Colors.textGray,
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountText: {
    color: Colors.textLight,
    fontWeight: 'bold',
    fontSize: 12,
  },
});