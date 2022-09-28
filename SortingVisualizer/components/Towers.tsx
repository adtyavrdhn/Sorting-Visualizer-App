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
}

function Towers(props: divs) {
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
        await bubbleSort([...narr], changeArr);
        break;
      case Sorts.Quick:
        await quickSort([...narr], 0, narr.length - 1, changeArr);
        break;
      case Sorts.Selection:
        await selectionSort([...narr], narr.length, changeArr);
        break;
      case Sorts.Insertion:
        await insertionSort([...narr], narr.length, changeArr);
        break;
      case Sorts.Merge:
        await MergeSort([...narr], changeArr);
        break;
    }
  }

  return (
    <View style={tailwind('grid lg:gap-3 mt-1 text-inherit')}>
      <SortBtn sortingAlgo={props.algo} sort={sort} />
    </View>
  );
}

export default Towers;
