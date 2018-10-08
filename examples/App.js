import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';

export default createStackNavigator({
  Home: HomeScreen,
  SignUp: SignUpScreen,
});
