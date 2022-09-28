import React from 'react';
import RangeSlider from './RangeSlider';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

interface ChangeInput {
  sizeValue: number;
  setSizeValue: Function;
}
function Header(props: ChangeInput) {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex justify-around align-center pb-15px')}>
      <View style={tailwind('self-start')}>
        <RangeSlider
          name={'Size'}
          min={10}
          max={80}
          step={10}
          value={props.sizeValue}
          setValue={props.setSizeValue}
        />
      </View>
    </View>
  );
}

export default Header;
