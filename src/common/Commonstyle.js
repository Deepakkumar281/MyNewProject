import {Dimensions} from 'react-native';
import { deviceWidth } from './Commondimension';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Commonstyle = {
  container: {flex: 1, backgroundColor: 'white', padding: deviceWidth(5)},
};
