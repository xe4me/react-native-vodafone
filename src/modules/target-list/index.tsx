import React, {FunctionComponent, useMemo} from 'react';
import {FlatList, Text, View} from 'react-native';
import {ITile, Loading} from '@Components';
import {useFetch} from '@Utils';
import {ApiConstants} from '@Constants';
import styles from '@Modules/target-list/styles';

interface ITargetDetails {
  goal: string
  code: string
  title: string
  description: string
  uri: string
  indicators: string
}

type Props = {
  target: ITile
}
export const TargetList: FunctionComponent<Props> = ({target}) => {
  const {response, error, isLoading} = useFetch<ITargetDetails[]>(ApiConstants.Target);

  const filteredTarget = useMemo(() => response && response.filter(l => l.goal === target.id), [response]);
  if (isLoading) return <Loading/>;
  if (error) {
    return <Text>Something went wrong ...</Text>
  }
  return <FlatList
    data={filteredTarget}
    style={styles.root}
    renderItem={({item: tile}) => <View style={styles.row}><Text>{tile.title}</Text></View>}
    keyExtractor={item => item.code}
  />

};
