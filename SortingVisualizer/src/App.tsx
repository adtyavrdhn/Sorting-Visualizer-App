import React from 'react';
import {View, ScrollView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SortScreen from './components/SortScreen';
import SortBtn from './components/SortButton';

const App = () => {
  const Tab = createBottomTabNavigator();

  enum Sorts {
    Bubble = 'Bubble Sort',
    Selection = 'Selection Sort',
    Insertion = 'Insertion Sort',
    Merge = 'Merge Sort',
    Quick = 'Quick Sort',
  }

  const Bsortscreen = () => (
    <SortScreen algo={Sorts.Bubble} Sorts={Sorts} disable={false} />
  );
  const Msortscreen = () => (
    <SortScreen algo={Sorts.Merge} Sorts={Sorts} disable={false} />
  );
  const Qsortscreen = () => (
    <SortScreen algo={Sorts.Quick} Sorts={Sorts} disable={false} />
  );
  const Isortscreen = () => (
    <SortScreen algo={Sorts.Insertion} Sorts={Sorts} disable={false} />
  );
  const Ssortscreen = () => (
    <SortScreen algo={Sorts.Selection} Sorts={Sorts} disable={false} />
  );
  const Allsortscreen = () => (
    <ScrollView>
      <Button title={'ALL'} />
      <SortScreen algo={Sorts.Bubble} Sorts={Sorts} disable={true} />
      <SortScreen algo={Sorts.Merge} Sorts={Sorts} disable={true} />
      <SortScreen algo={Sorts.Quick} Sorts={Sorts} disable={true} />
      <SortScreen algo={Sorts.Insertion} Sorts={Sorts} disable={true} />
      <SortScreen algo={Sorts.Selection} Sorts={Sorts} disable={true} />
    </ScrollView>
  );

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name={'All'} component={Allsortscreen} />
          <Tab.Screen name={Sorts.Bubble} component={Bsortscreen} />
          <Tab.Screen name={Sorts.Selection} component={Ssortscreen} />
          <Tab.Screen name={Sorts.Merge} component={Msortscreen} />
          <Tab.Screen name={Sorts.Quick} component={Qsortscreen} />
          <Tab.Screen name={Sorts.Insertion} component={Isortscreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};
export default App;
