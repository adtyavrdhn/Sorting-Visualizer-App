import React, {useState, useEffect} from 'react';
import bubbleSort from '../algorithms/bubbleSort';
import quickSort from '../algorithms/quickSort';
import selectionSort from '../algorithms/SelectionSort';
import insertionSort from '../algorithms/insertionSort';
import MergeSort from '../algorithms/mergeSort';
import produce from 'immer';
import SortBtn from './SortButton';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

interface divs {
  arr: number[];
  algo: string;
  speed: number;
}

function Towers(props: divs) {
  const [towers, setTowers] = useState<JSX.Element[]>([]);
  const [narr, setnarr] = useState([0]);
  const [time, setTime] = useState('');
  const tailwind = useTailwind();

  function changeArr(arr: number[]) {
    const newArr = produce(arr, draft => {
      return [...draft];
    });
    setnarr(newArr);
  }

  enum Sorts {
    Bubble = 'Bubble Sort',
    Selection = 'Selection Sort',
    Insertion = 'Insertion Sort',
    Merge = 'Merge Sort',
    Quick = 'Quick Sort',
  }

  useEffect(() => {
    changeArr(props.arr);
    setTime('');
  }, [props.arr]);

  async function sort(algorithm: string) {
    // let startTime = performance.now();
    switch (algorithm) {
      case Sorts.Bubble:
        await bubbleSort([...narr], changeArr, props.speed);
        break;
      case Sorts.Quick:
        await quickSort([...narr], 0, narr.length - 1, changeArr, props.speed);
        break;
      case Sorts.Selection:
        await selectionSort([...narr], narr.length, changeArr, props.speed);
        break;
      case Sorts.Insertion:
        await insertionSort([...narr], narr.length, changeArr, props.speed);
        break;
      case Sorts.Merge:
        await MergeSort([...narr], changeArr, props.speed);
        break;
    }

    // let endTime = performance.now();
    // setTime(`${(endTime - startTime).toPrecision(8)} milliseconds`);
  }

  useEffect(() => {
    const temptowers: JSX.Element[] = narr.map((n: number, index: number) => (
      <View
        style={
          (tailwind(
            'bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-md',
          ),
          {height: `${n / 10}rem`, width: `0.7%`})
        }
        key={index}
      />
    ));
    setTowers(temptowers);
  }, [narr]);

  return (
    <View style={tailwind('grid lg:gap-3 mt-1')}>
      <SortBtn sortingAlgo={props.algo} sort={sort} />
      <View style={tailwind('flex gap-0.5 mt-1 justify-center')}>{towers}</View>
      <Text style={tailwind('text-center')}>Time Taken: {time}</Text>
    </View>
  );
}

export default Towers;
