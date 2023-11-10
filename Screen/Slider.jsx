import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';

const PrizeSlider = ({ onValueChange }) => {
  const minValue = 10000;
  const maxValue = 50000;

  const [sliderValue, setSliderValue] = useState(minValue);

  const handleValueChange = (value) => {
    setSliderValue(value);
    onValueChange(value);
  };

  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <LinearGradient
        colors={['#FFFFFF', '#FAF6FF', '#FAF6FF']}
        style={{ flex: 1 }}
      >
        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            ₹{sliderValue}
          </Text>
          <Slider
            style={{ width: '80%', alignSelf: 'center' }}
            minimumValue={minValue}
            maximumValue={maxValue}
            step={1}
            value={sliderValue}
            onValueChange={handleValueChange}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
            <Text>₹{minValue}</Text>
            <Text>₹{maxValue}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PrizeSlider;
