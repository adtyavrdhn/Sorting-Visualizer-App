import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Slider from '@react-native-community/slider';

interface ChangeInput {
  sizeValue: number;
  setSizeValue: Function;
}
function Header(props: ChangeInput) {
  const tailwind = useTailwind();

  return (
    <View
      style={tailwind(
        'flex flex-row justify-center p-4 border border-blue-500',
      )}>
      <Text style={tailwind('mr-2 text-black text-xl')}>Size</Text>
      <Slider
        style={tailwind('w-64')}
        minimumValue={10}
        maximumValue={50}
        step={10}
        value={props.sizeValue}
        onValueChange={data => props.setSizeValue(data)}
      />
    </View>
  );
}

export default Header;
