import React, {FunctionComponent} from 'react';
import {FlatList, View} from 'react-native';
import {ITile, Tile} from '@Components/tile';
import {getWindowWidth} from '@Utils';
import {StyleConstants} from '@Styles';
import styles from '@Modules/goal-list/styles';

type Props = {
  onSelect: (tile: ITile) => void
}
const list: ITile[] = [
  {
    id: "1",
    disabled: true,
    title: 'No Poverty',
    source: require('@Assets/images/E_SDG_Icons-01.jpg'),
  },
  {
    id: "2",
    disabled: true,
    title: 'Zero Hunger',
    source: require('@Assets/images/E_SDG_Icons-02.jpg'),
  },
  {
    id: "3",
    disabled: true,
    title: 'Good Health And Well-Being',
    source: require('@Assets/images/E_SDG_Icons-03.jpg'),
  },
  {
    id: "4",
    disabled: true,
    title: 'Quality Education',
    source: require('@Assets/images/E_SDG_Icons-04.jpg'),
  },
  {
    id: "5",
    disabled: true,
    title: 'Gender Equality',
    source: require('@Assets/images/E_SDG_Icons-05.jpg'),
  },
  {
    id: "6",
    disabled: true,
    title: 'Clean Water and Sanitation',
    source: require('@Assets/images/E_SDG_Icons-06.jpg'),
  },
  {
    id: "7",
    disabled: true,
    title: 'Affordable And Clean Energy',
    source: require('@Assets/images/E_SDG_Icons-07.jpg'),
  },
  {
    id: "8",
    disabled: true,
    title: 'Decent Work and Economic Growth',
    source: require('@Assets/images/E_SDG_Icons-08.jpg'),
  },
  {
    id: "9",
    disabled: true,
    title: 'Industry, Innovation And Infrastructure',
    source: require('@Assets/images/E_SDG_Icons-09.jpg'),
  },
  {
    id: "10",
    disabled: true,
    title: 'Reduced Inequalities',
    source: require('@Assets/images/E_SDG_Icons-10.jpg'),
  },
  {
    id: "11",
    disabled: true,
    title: 'Sustainable Cities And Communities',
    source: require('@Assets/images/E_SDG_Icons-11.jpg'),
  },
  {
    id: "12",
    disabled: true,
    title: 'Responsible Consumption And Production',
    source: require('@Assets/images/E_SDG_Icons-12.jpg'),
  },
  {
    id: "13",
    disabled: false,
    title: 'Climate Action',
    source: require('@Assets/images/E_SDG_Icons-13.jpg'),
  },
  {
    id: "14",
    disabled: true,
    title: 'Life Below Water',
    source: require('@Assets/images/E_SDG_Icons-14.jpg'),
  },
  {
    id: "15",
    disabled: true,
    title: 'Life On Land',
    source: require('@Assets/images/E_SDG_Icons-15.jpg'),
  },
  {
    id: "16",
    disabled: true,
    title: 'Peace, Justice And Strong Institution',
    source: require('@Assets/images/E_SDG_Icons-16.jpg'),
  },
  {
    id: "17",
    disabled: true,
    title: 'Partnership For The Goals',
    source: require('@Assets/images/E_SDG_Icons-17.jpg'),
  },
];
const width = getWindowWidth();
const spacing = StyleConstants.Spacing;
export const GoalList: FunctionComponent<Props> = ({onSelect}) => {
  return <FlatList
    data={list}
    style={styles.root}
    numColumns={2}
    testID={'GoalList'}
    renderItem={({item: tile}) => (
      <View style={styles.itemWrapper}>
        <Tile
          height={width / 2 - (spacing)}
          tile={tile}
          onSelect={onSelect}
        />
      </View>
    )}
    keyExtractor={item => item.id}
  />
};
