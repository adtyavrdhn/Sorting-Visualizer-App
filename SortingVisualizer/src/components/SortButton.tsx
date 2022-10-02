import React from 'react';
import {Button} from 'react-native';

interface SortButtonProps {
  sortingAlgo: string;
  sort: Function;
  disable: boolean;
  sorting: boolean;
  setSorting: Function;
}

function handlePress(props: any) {
  if (props.sorting) {
    return;
  }
  props.sort(`${props.sortingAlgo}`);
  props.setSorting(true);
}

function SortButton(props: SortButtonProps) {
  return (
    <Button
      title={props.sortingAlgo}
      onPress={() => handlePress(props)}
      disabled={props.disable}
    />
  );
}

export default SortButton;
