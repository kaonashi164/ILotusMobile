import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './StackParam';

export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Loading'
>;
