import {StyleSheet} from 'react-native';
import {StyleConstants} from '@Styles/constants';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  description: {
    marginTop: 50,
    fontSize: StyleConstants.FontSizes.ScreenDescription,
    color: '#fff',
    fontWeight: '300',
    textTransform: 'uppercase',
    marginHorizontal: StyleConstants.Spacing,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    padding: StyleConstants.Spacing / 2,
    fontSize: StyleConstants.FontSizes.ScreenTitle,
    backgroundColor: StyleConstants.Colours.Primary.Main,
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  heroImage: {
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});
