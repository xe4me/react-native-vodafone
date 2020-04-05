import React, {FunctionComponent, memo} from 'react';
import {Screen} from '@Components';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@Screens';
import {StackNavigationProp} from '@react-navigation/stack';
import {TargetList} from '@Modules';

type Props = {
  route: RouteProp<RootStackParamList, 'Target'>;
  navigation: StackNavigationProp<RootStackParamList, 'Target'>;
};
export const TargetScreen: FunctionComponent<Props> = memo(({route}) => {
  const item = route.params.tile;
  return (
    <Screen title={item.title} testID={'Target'}>
      <TargetList target={item}/>
    </Screen>
  );
});
