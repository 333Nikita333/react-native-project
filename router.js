import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/auth/LoginScreen/LoginScreen';
import RegistrationScreen from './screens/auth/RegistrationScreen/RegistrationScreen';
import General from './screens/main/General';

const Auth = createStackNavigator();
const Main = createStackNavigator();

export default function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <Auth.Navigator initialRouteName="Login">
        <Auth.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Auth.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </Auth.Navigator>
    );
  }
  return (
    <Main.Navigator>
      <Main.Screen
        options={{ headerShown: false }}
        name="General"
        component={General}
      />
    </Main.Navigator>
  );
}
