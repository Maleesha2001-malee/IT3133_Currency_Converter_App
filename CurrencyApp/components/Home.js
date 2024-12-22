import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import CurrencyInput from './CurrencyInput';
import ConvertButton from './ConvertButton';

export default function Home() {
    const [amountLKR, setAmountLKR] = useState('');
    const [convertedUSD, setConvertedUSD] = useState(null);
    const exchangeRate = 300;
  
    const convertCurrency = () => {
      const lkr = parseFloat(amountLKR);
      if (!isNaN(lkr)) {
        setConvertedUSD((lkr * exchangeRate).toFixed(2));
      } else {
        setConvertedUSD(null);
        alert('Please enter a valid amount.');
      }
    };

  return (
    <>
      <Text variant="headlineLarge">LKR to USD Converter</Text>
      <CurrencyInput value={amountLKR} onChange={setAmountLKR} />
      <ConvertButton onPress={convertCurrency} />
      
    </>
  );
}

  

