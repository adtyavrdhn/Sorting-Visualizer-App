/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useTailwind} from 'tailwind-rn';
// import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import Towers from './components/Towers';
// import {Colors} from 'react-native/Libraries/NewAppScreen';

import {SafeAreaView, View} from 'react-native';

const App = () => {
  const [sizeValue, setSizeValue] = useState(20);
  const [arr, setArr] = useState([0]);
  const tailwind = useTailwind();
  const Tab = createBottomTabNavigator();
  // changing array whenever the size slider changes

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
  /////////////////////////////
  const Headerprops = {
    sizeValue: sizeValue,
    setSizeValue: setSizeValue,
  };

  ///////////////
  function SortScreen() {
    return (
      <SafeAreaView style={tailwind('text-black')}>
        <Header {...Headerprops} />
        <View
          style={tailwind(
            'grid lg:grid-cols-2 gap-12 lg:gap-4 sm:grid-cols-1 text-inherit',
          )}>
          <Towers arr={[...arr]} algo={'Bubble Sort'} />
        </View>
      </SafeAreaView>
    );
  }

  ////////////////////
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Bubble" component={SortScreen} />
        {/* <Tab.Screen name="Selection" component={SortScreen} />
        <Tab.Screen name="Insertion" component={SortScreen} />
        <Tab.Screen name="Quick" component={SortScreen} />
        <Tab.Screen name="Merge" component={SortScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
