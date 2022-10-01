import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function Towers(props: any) {
  const tailwind = useTailwind();

  function towerStyles(n: number) {
    return {
      width: n / 20,
      height: n * 2,
      backgroundColor: 'powderblue',
      marginRight: 1,
    };
  }
  return (
    <View style={tailwind('flex flex-col')}>
      <View
        style={{
          ...tailwind('flex flex-row justify-center'),
        }}>
        {props.arr.map((n: number, index: number) => (
          <View key={index} style={{...towerStyles(n)}} />
        ))}
      </View>
    </View>
  );
}

export default Towers;
