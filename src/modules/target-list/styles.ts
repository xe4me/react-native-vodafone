import {StyleSheet} from 'react-native';
import {StyleConstants} from '@Styles/constants';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  row: {
    paddingHorizontal: StyleConstants.Spacing,
    paddingVertical: StyleConstants.Spacing / 2,
    borderWidth: 1,
    borderColor: StyleConstants.Colours.Grey.Light,
  }
})
