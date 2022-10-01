import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function Towers(props: any) {
  const tailwind = useTailwind();

  function towerStyles(n: number) {
    return {
      width: 4,
      height: n * 2,
      backgroundColor: 'powderblue',
      marginRight: 1,
    };
  }
  return (
    <View style={tailwind('flex flex-col justify-center')}>
      <View style={{...tailwind('flex flex-row'), justifyContent: 'center'}}>
        {props.arr.map((n: number, index: number) => (
          <View key={index} style={{...towerStyles(n)}} />
        ))}
      </View>
    </View>
  );
}

export default Towers;
