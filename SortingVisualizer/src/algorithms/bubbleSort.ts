import {delay, swap} from './utility';

export default async function bubbleSort(arr: number[], changeArr: Function) {
  const size = arr.length;

  const array: number[] = arr;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      await delay(15);
      if (array[j] > array[j + 1]) {
        await delay(15);
        swap(array, j, j + 1);
        changeArr(array);
      }
    }
    await delay(5);
  }
  changeArr(array);
}
