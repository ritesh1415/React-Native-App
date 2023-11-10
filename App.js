
import React, { useState } from 'react';
import { View, Switch, SafeAreaView } from 'react-native';
import Home from './Screen/Home';
import Slider from './Screen/Slider';
import Tenure from './Screen/Tenure';
export default function App() {
  const [loanAmount, setLoanAmount] = useState(5000);

  return (
    <View><SafeAreaView>
      <Home />
      <Slider value={loanAmount} onValueChange={(value) => setLoanAmount(value)} />
    
   
      <Tenure/></SafeAreaView>
    </View>
  );
  
}
