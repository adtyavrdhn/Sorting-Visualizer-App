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
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import Towers from './components/Towers';

import {SafeAreaView, StyleSheet} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [sizeValue, setSizeValue] = useState(20);
  const [arr, setArr] = useState([0]);

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

  return (
    <NavigationContainer>
      <SafeAreaView>
        <Header {...Headerprops} />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
