import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackParamList} from '@types';
import {LoginScreen} from '@screen/Login';

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthStackContainer = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
