import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Sorts} from './helper/SortsEnum';
import {
  Bsortscreen,
  Isortscreen,
  Msortscreen,
  Qsortscreen,
  Ssortscreen,
} from './helper/SortScreens';

function navIcon() {
  return {
    tabBarIcon: () => (
      <Image
        source={require('./../assets/icons/icon.png')}
        style={{width: 24, height: 24}}
      />
    ),
  };
}
const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name={Sorts.Bubble}
            component={Bsortscreen}
            options={navIcon}
          />
          <Tab.Screen
            name={Sorts.Selection}
            component={Ssortscreen}
            options={navIcon}
          />
          <Tab.Screen
            name={Sorts.Merge}
            component={Msortscreen}
            options={navIcon}
          />
          <Tab.Screen
            name={Sorts.Quick}
            component={Qsortscreen}
            options={navIcon}
          />
          <Tab.Screen
            name={Sorts.Insertion}
            component={Isortscreen}
            options={navIcon}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};
export default App;
