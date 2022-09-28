import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Slider from '@react-native-community/slider';

function RangeSlider({name, max, min, step, value, setValue}: any) {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex justify-center')}>
      <Text style={tailwind('size mr-2 mt-0.2')}>{name}</Text>
      <Slider
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={data => setValue(data)}
      />
    </View>
  );
}

export default RangeSlider;
