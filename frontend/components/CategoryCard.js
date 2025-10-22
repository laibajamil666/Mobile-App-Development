import React from 'react';
import { TouchableOpacity, ImageBackground, Text, StyleSheet, View } from 'react-native';
import { GlobalStyles, Colors, Typography } from '../styles/GlobalStyles';

export default function CategoryCard({ category, onPress, height = 150 }) {
  const isPerfume = category.name?.toLowerCase().includes('perfume');

  return (
    <TouchableOpacity
      style={[GlobalStyles.categoryCard, { height: isPerfume ? 130 : height }]}
      onPress={onPress}
    >
      <ImageBackground
        source={category.image}
        style={GlobalStyles.categoryImage}
        imageStyle={GlobalStyles.imageStyle}
        resizeMode="cover"
      >
        <View style={GlobalStyles.overlay}>
          <Text
            style={[
              styles.name,
              isPerfume && { fontSize: 20, marginBottom: 3 }
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
  name: {
    color: Colors.textLight,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    color: Colors.textLight,
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
});