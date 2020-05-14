import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AppStackParamList} from '@types';
import {HomeScreen} from '@screen/Home';

const AppStack = createStackNavigator<AppStackParamList>();

export const AppStackContainer = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
};
