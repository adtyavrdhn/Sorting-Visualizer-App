import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import Header from './Header';
import Towers from './Towers';
import {useTailwind} from 'tailwind-rn';

function SortScreen(props: any) {
  const [sizeValue, setSizeValue] = useState(20);
  const [arr, setArr] = useState([0]);
  const tailwind = useTailwind();

  useEffect(() => {
    const newArr: number[] = [];
    while (newArr.length < sizeValue) {
      const r = Math.floor(Math.random() * 100) + 50;
      if (newArr.indexOf(r) === -1) {
        newArr.push(r);
      }
    }
    setArr(newArr);
  }, [sizeValue]);

  return (
    <SafeAreaView>
      <Header sizeValue={sizeValue} setSizeValue={setSizeValue} />
      <View style={tailwind('flex flex-col border border-black')}>
        <Text style={tailwind('text-4xl text-black')}>
          {JSON.stringify(arr)}
        </Text>
        <Towers arr={arr} algo={props.algo} />
      </View>
    </SafeAreaView>
  );
}

export default SortScreen;
