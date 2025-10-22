import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';

export default function Header({ title, navigation, showCartIcon = false }) {
  return (
    <View style={GlobalStyles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={GlobalStyles.headerIcon}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={GlobalStyles.headerTitle}>{title}</Text>
      {showCartIcon ? (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={GlobalStyles.headerIcon}>
          <Ionicons name="cart-outline" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <View style={GlobalStyles.headerPlaceholder} />
      )}
    </View>
  );
}

// No local styles needed