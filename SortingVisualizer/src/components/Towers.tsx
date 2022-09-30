import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function Towers(props: any) {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex flex-col')}>
      {/* <View style={{...tailwind('flex flex-row')}}>
        {narr.map((n: number, index: number) => (
          <View
            key={index}
            style={[styles.tower, {height: `${n}px`, width: '15px'}]}
          />
        ))}
      </View> */}
    </View>
  );
}

export default Towers;
