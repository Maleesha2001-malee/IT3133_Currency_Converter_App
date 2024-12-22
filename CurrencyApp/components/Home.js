import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import CurrencyInput from './CurrencyInput';

export default function Home() {
    const [amountLKR, setAmountLKR] = useState('');

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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

