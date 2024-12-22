import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import CurrencyInput from './components/CurrencyInput';

export default function Home() {
  

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">LKR to USD Converter</Text>
      <CurrencyInput value={amountLKR} onChange={setAmountLKR} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
