import React, {FunctionComponent, memo} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@Screens';
import {Screen} from '@Components';
import {GoalList} from '@Modules';


type Props = {
  route: RouteProp<RootStackParamList, 'Home'>;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: FunctionComponent<Props> = memo(({navigation}) => {
  return (
    <Screen testID={'Home'}
            heroSrc={require('./hero.jpg')}
            title={'The Goals'}
            description={'17 GOALS TO TRANSFORM OUR WORLD'}>
      <GoalList onSelect={(tile) => navigation.navigate('Target', {tile})}/>
    </Screen>
  );
});
