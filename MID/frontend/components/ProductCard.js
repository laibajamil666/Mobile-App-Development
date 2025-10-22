import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ product, onAddToCart }) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <View style={styles.card}>
      <Image 
        source={product.image} 
        style={styles.image}
        resizeMode="contain"   
      />
      
      {product.discount && (
        <View style={styles.discountBadge}>
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
        
        <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,       
    backgroundColor: '#fff',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#e74c3c',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
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
    color: '#27ae60',
  },
  originalPrice: {
    fontSize: 16,
    color: '#95a5a6',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
