import {StyleSheet} from 'react-native';
import {getWindowHeight, getWindowWidth} from '@Utils';

export default StyleSheet.create({
  root: {
    position:'absolute',
    width:getWindowWidth(),
    height:getWindowHeight(),
    justifyContent:'center',
    alignItems:'center'
  }
});
