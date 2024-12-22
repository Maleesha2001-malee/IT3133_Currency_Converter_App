import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import CurrencyInput from './CurrencyInput';
import ConvertButton from './ConvertButton';
import ConversionResult from './CoversionResult';

export default function Home() {
    const [amountLKR, setAmountLKR] = useState('');
    const [convertedUSD, setConvertedUSD] = useState(null);
    const exchangeRate = 0.0030;
  
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
      <ConversionResult result={convertedUSD} />
      
    </>
  );
}

  

