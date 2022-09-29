import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TailwindProvider, useTailwind} from 'tailwind-rn';
import utilities from '../tailwind.json';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import Towers from './components/Towers';

import {SafeAreaView, Text, View} from 'react-native';

const SortScreen = () => {
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
      <View style={tailwind('flex flex-col h-full w-full border border-black')}>
        <Text style={tailwind('text-4xl text-black')}>
          {JSON.stringify(arr)}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Bubble" component={SortScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};
export default App;
