import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Header from './Header';
import Towers from './Towers';
import bubbleSort from '../algorithms/bubbleSort';
import quickSort from '../algorithms/quickSort';
import selectionSort from '../algorithms/SelectionSort';
import insertionSort from '../algorithms/insertionSort';
import MergeSort from '../algorithms/mergeSort';
import SortBtn from './SortButton';
import produce from 'immer';

function SortScreen(props: any) {
  const [sizeValue, setSizeValue] = useState(20);
  const [arr, setArr] = useState([0]);

  useEffect(() => {
    const newArr: number[] = [];
    while (newArr.length < sizeValue) {
      const r = Math.floor(Math.random() * 100) + 50;
      if (newArr.indexOf(r) === -1) {
        newArr.push(r);
      }
    }
    setArr([...newArr]);
  }, [sizeValue]);

  function changeArr(aarr: number[]) {
    const newArr = produce(aarr, draft => {
      return [...draft];
    });
    setArr(newArr);
  }

  async function sort(algorithm: string) {
    switch (algorithm) {
      case props.Sorts.Bubble:
        await bubbleSort([...arr], changeArr);
        break;
      case props.Sorts.Quick:
        await quickSort([...arr], 0, arr.length - 1, changeArr);
        break;
      case props.Sorts.Selection:
        await selectionSort([...arr], arr.length, changeArr);
        break;
      case props.Sorts.Insertion:
        await insertionSort([...arr], arr.length, changeArr);
        break;
      case props.Sorts.Merge:
        await MergeSort([...arr], changeArr);
        break;
    }
  }

  return (
    <SafeAreaView>
      <Header sizeValue={sizeValue} setSizeValue={setSizeValue} />
      <SortBtn sortingAlgo={props.algo} sort={sort} disable={props.disable} />
      <Towers arr={arr} />
    </SafeAreaView>
  );
}

export default SortScreen;
