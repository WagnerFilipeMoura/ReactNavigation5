import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const RotasAutenticacao = createStackNavigator();

export default () => (
  <NavigationContainer>
    <RotasAutenticacao.Navigator headerMode="none">
      <RotasAutenticacao.Screen name="Login" component={Login} />
      <RotasAutenticacao.Screen name="Cadastro" component={Cadastro} />
    </RotasAutenticacao.Navigator>
  </NavigationContainer>
);
