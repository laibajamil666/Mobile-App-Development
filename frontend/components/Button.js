import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStyles, Colors } from '../styles/GlobalStyles';

export default function Button({
  title,
  onPress,
  variant = 'primary',
  style = {},
  textStyle = {}
}) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return { backgroundColor: Colors.textGray };
      case 'danger':
        return { backgroundColor: Colors.danger };
      case 'success':
        return { backgroundColor: Colors.success };
      default:
        return { backgroundColor: Colors.secondary };
    }
  };

  return (
    <TouchableOpacity
      style={[GlobalStyles.button, getButtonStyle(), style]}
      onPress={onPress}
    >
      <Text style={[GlobalStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

// No local styles needed