import {Dimensions} from 'react-native';

export function getWindowWidth() {
  return Dimensions.get('window').width;
}

export function getWindowHeight() {
  return Dimensions.get('window').height;
}
