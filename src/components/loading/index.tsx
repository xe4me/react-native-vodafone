import React, {FunctionComponent, memo} from 'react';
import {Text, View} from 'react-native';
import styles from '@Components/loading/styles';

type Props = {

}
export const Loading: FunctionComponent<Props> = memo(() => {
  return (
    <View style={styles.root}>
      <Text>Loading ...</Text>
    </View>
  );
});
