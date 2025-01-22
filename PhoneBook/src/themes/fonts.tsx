import {Dimensions, Platform, PixelRatio} from 'react-native';

export const font = {
  black: 'SourceSerif4-Black', //900
  extraBold: 'SourceSerif4-ExtraBold', //'-800/900-'
  bold: 'SourceSerif4-Bold', //'700'
  semiBold: 'SourceSerif4-SemiBold', //'-600-'
  medium: 'SourceSerif4-Medium', //'-500-'
  regular: 'SourceSerif4-Regular', //'400'
  light: 'SourceSerif4-Light', //300
  extraLight: 'SourceSerif4-ExtraLight', //200
  // thin: 'Inter_28pt-Thin',
};

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
export function actuatedNormalize(size: any): any {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 3;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 3;
  }
}
export const fontSize = {
  little: actuatedNormalize(8),
  verySmall: actuatedNormalize(9),
  smallest: actuatedNormalize(10),
  mediumSmall: actuatedNormalize(11),
  small: actuatedNormalize(12),
  normal: actuatedNormalize(13),
  average: actuatedNormalize(14),
  size15: actuatedNormalize(15),
  medium: actuatedNormalize(16),
  size17: actuatedNormalize(17),
  large: actuatedNormalize(18),
  size19: actuatedNormalize(19),
  veryLarge: actuatedNormalize(20),
  size21: actuatedNormalize(21),
  ultraLarge: actuatedNormalize(22),
  size24: actuatedNormalize(24),
  largest: actuatedNormalize(25),
  size26: actuatedNormalize(26),
  size27: actuatedNormalize(27),
  size28: actuatedNormalize(28),
  xLarge: actuatedNormalize(30),
  size33: actuatedNormalize(33),
  title: actuatedNormalize(16),
  subtitle: actuatedNormalize(12),
  description: actuatedNormalize(13),
  error: actuatedNormalize(10),
  chatsHeadLarge: actuatedNormalize(24),
  size42: actuatedNormalize(42),
};
