import React from 'react';
import { TouchableOpacity, ImageBackground, Text, StyleSheet, View } from 'react-native';

export default function CategoryCard({ category, onPress, height = 150 }) {
  const isPerfume = category.name?.toLowerCase().includes('perfume');

  return (
    <TouchableOpacity 
      style={[styles.card, { height: isPerfume ? 130 : height }]}  // 🔹 smaller perfumes
      onPress={onPress}
    >
      <ImageBackground 
        source={category.image} 
        style={styles.image}
        imageStyle={styles.imageStyle}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text 
            style={[
              styles.name, 
              isPerfume && { fontSize: 20, marginBottom: 3 } // 🔹 smaller text for perfumes
            ]}
          >
            {category.name}
          </Text>
          {category.subtitle && (
            <Text style={styles.subtitle}>{category.subtitle}</Text>
          )}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    borderRadius: 15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
});
