import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TailwindProvider, useTailwind} from 'tailwind-rn';
import utilities from '../tailwind.json';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import Towers from './components/Towers';
import {SafeAreaView, View, Text} from 'react-native';
import SortScreen from './components/SortScreen';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Bubble"
            component={() => <SortScreen algo="Bubble Sort" />}
          />
          <Tab.Screen
            name="Selection"
            component={() => <SortScreen algo="Selection Sort" />}
          />
          <Tab.Screen
            name="Merge"
            component={() => <SortScreen algo="Merge Sort" />}
          />
          <Tab.Screen
            name="Quick"
            component={() => <SortScreen algo="Quick Sort" />}
          />
          <Tab.Screen
            name="Insertion"
            component={() => <SortScreen algo="Insertion Sort" />}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};
export default App;
