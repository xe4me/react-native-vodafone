import React, {FunctionComponent, memo} from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import styles from './styles';


type Props = {
  heroSrc?: ImageSourcePropType
  title?: string
  description?: string
  testID?: string
};

export const Screen: FunctionComponent<Props> = memo(({children, heroSrc, testID, title, description}) => {
  return (
    <View testID={testID} style={styles.root}>
      {heroSrc && <Image
        source={heroSrc}
        style={styles.heroImage}/>}
      {title && <Text style={styles.title}>{title}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}
      {children}
    </View>
  );
});
