import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '@types';
import {SplashScreen} from '@screen/Splash';
import {AuthStackContainer} from './Auth';
import {AppStackContainer} from './App';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackContainer = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Loading" component={SplashScreen} />
      <RootStack.Screen name="Auth" component={AuthStackContainer} />
      <RootStack.Screen name="App" component={AppStackContainer} />
    </RootStack.Navigator>
  );
};
