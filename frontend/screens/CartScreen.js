import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { GlobalStyles, Colors, Typography } from '../styles/GlobalStyles';

export default function CartScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Header title="Shopping Cart" navigation={navigation} />
      <ScrollView style={GlobalStyles.scrollView}>
        <View style={GlobalStyles.centerContainer}>
          <Text style={[Typography.subheading, GlobalStyles.textCenter]}>Your cart is empty</Text>
          <Text style={[Typography.body, GlobalStyles.textCenter, { marginBottom: 30 }]}>
            Add some items to get started
          </Text>
          <TouchableOpacity
            style={GlobalStyles.accentButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={GlobalStyles.buttonText}>Start Shopping</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCartSubtext: {
    ...Typography.body,
    ...GlobalStyles.textCenter,
    marginBottom: 30,
  },
});