import React from 'react';
import {Button} from 'react-native';

interface SortButtonProps {
  sortingAlgo: string;
  sort: Function;
  disable: boolean;
}

function SortButton(props: SortButtonProps) {
  return (
    <Button
      title={props.sortingAlgo}
      onPress={() => props.sort(`${props.sortingAlgo}`)}
      disabled={props.disable}
    />
  );
}

export default SortButton;
