import SortScreen from '../components/SortScreen';
import React from 'react';
import {Sorts} from '../helper/SortsEnum';

export function Bsortscreen() {
  return <SortScreen algo={Sorts.Bubble} Sorts={Sorts} disable={false} />;
}

export function Msortscreen() {
  return <SortScreen algo={Sorts.Merge} Sorts={Sorts} disable={false} />;
}
export function Qsortscreen() {
  return <SortScreen algo={Sorts.Quick} Sorts={Sorts} disable={false} />;
}
export function Isortscreen() {
  return <SortScreen algo={Sorts.Insertion} Sorts={Sorts} disable={false} />;
}
export function Ssortscreen() {
  return <SortScreen algo={Sorts.Selection} Sorts={Sorts} disable={false} />;
}
