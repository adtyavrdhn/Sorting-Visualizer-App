import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SortScreen from './components/SortScreen';

const App = () => {
  const Tab = createBottomTabNavigator();

  const Bsortscreen = () => <SortScreen algo="Bubble Sort" />;
  const Msortscreen = () => <SortScreen algo="Merge Sort" />;
  const Qsortscreen = () => <SortScreen algo="Quick Sort" />;
  const Isortscreen = () => <SortScreen algo="Insertion Sort" />;
  const Ssortscreen = () => <SortScreen algo="Selection Sort" />;

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Bubble" component={Bsortscreen} />
          <Tab.Screen name="Selection" component={Ssortscreen} />
          <Tab.Screen name="Merge" component={Msortscreen} />
          <Tab.Screen name="Quick" component={Qsortscreen} />
          <Tab.Screen name="Insertion" component={Isortscreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};
export default App;
