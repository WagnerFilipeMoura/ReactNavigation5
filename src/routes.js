import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

import Inicio from './pages/Principal/Inicio';
import Sobre from './pages/Principal/Sobre';
import Contato from './pages/Principal/Contato';

Icon.loadFont();

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function StackInicio() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#fff',
          fontSize: 25,
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: '#213140',
        },
      }}>
      <Stack.Screen name="Home" component={Inicio} />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={Login} />
      <Stack.Screen name="SignUp" component={Cadastro} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#213140',
        inactiveTintColor: '#B4C4D9',
        style: {
          backgroundColor: '#FFF',
        },
        keyboardHidesTabBar: true,
        showLabel: false,
      }}>
      <Tabs.Screen
        name="Inicio"
        component={StackInicio}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({color}) => <Icon name="home" size={35} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({color}) => <Icon name="info" size={35} color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
}
