import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import CurrencyInput from './CurrencyInput';

export default function Home() {
    const [amountLKR, setAmountLKR] = useState('');

  return (
    <>
      <Text variant="headlineLarge">LKR to USD Converter</Text>
      <CurrencyInput value={amountLKR} onChange={setAmountLKR} />
      
    </>
  );
}

  

