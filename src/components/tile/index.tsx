import React, {FunctionComponent, memo} from 'react';
import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export interface ITile {
  id: string;
  title: string
  source: ImageSourcePropType
  disabled?: boolean
}

type Props = {
  tile: ITile;
  height: number
  onSelect: (item: ITile) => void
};

export const Tile: FunctionComponent<Props> = memo(({onSelect, tile, height}) => {
  return (
    <TouchableOpacity
      disabled={tile.disabled}
      onPress={() => onSelect(tile)}
      testID={'Tile_' + tile.id}
      style={[styles.root, {height}]}>
      <Image
        source={tile.source}
        style={styles.image}
      />
    </TouchableOpacity>
  );
});
