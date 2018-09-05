import React from 'react';
import { View, Text, Slider } from 'react-native';

export default function UdaciSlider({ step, max, unit, value, onChange }) {
  return (
    <View>
      <Slider
        step={step}
        maximumValue={max}
        minimumValue={0}
        value={value}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}
