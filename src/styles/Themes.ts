import {StyleSheet} from 'react-native';
import {PADDING, WLOGO, HLOGO, FLAG, BOTTOM, HEADER, HPADDING} from './Scales';
import Colors from './Colors';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'Battambang';
export const FONT_FAMILY_BOLD = 'Battambang-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

const Themes = StyleSheet.create({
  MAIN: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  WRAPPER: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  CONTAINER: {
    flex: 1,
    backgroundColor: '#0000',
  },
  CENTER: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  SAFEAREA: {
    flex: 1,
    backgroundColor: '#0000',
  },
  FLATLIST: {
    padding: PADDING,
    paddingBottom: 0,
  },
  FLATLIST_EXTRA: {
    padding: PADDING,
    paddingBottom: HEADER,
  },
  LOGO: {
    width: WLOGO,
    height: HLOGO,
    resizeMode: 'contain',
  },
  FLAG: {
    width: FLAG,
    height: FLAG,
    resizeMode: 'contain',
    borderRadius: FLAG / 2,
  },
  ROW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RADIUS: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  BORDER: {
    borderWidth: 1,
    borderColor: '#C7D4E7',
  },
  SHADOW: {
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowColor: '#565D70',
    shadowOffset: {width: 2, height: 2},
  },
  FONT_REGULAR: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
  },
  FONT_BOLD: {
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_BOLD,
  },
  INPUT: {
    borderWidth: 1,
    borderColor: '#C7D4E7',

    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowColor: '#565D70',
    shadowOffset: {width: 2, height: 2},

    borderRadius: 50,
    marginBottom: PADDING,
    paddingHorizontal: BOTTOM,
  },
  EMAIL: {
    color: '#2e75b5',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
  HEADER: {
    paddingHorizontal: PADDING,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: Colors.PRIMARY,
    paddingBottom: PADDING + HPADDING,
  },
  CARD: {
    padding: PADDING,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: PADDING,
    elevation: 2,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowColor: '#565D70',
    shadowOffset: {width: 2, height: 2},
  },
  ITEM: {
    borderRadius: 10,
    padding: PADDING,
    marginBottom: PADDING,
    backgroundColor: '#FFF',
  },
});

export default Themes;
