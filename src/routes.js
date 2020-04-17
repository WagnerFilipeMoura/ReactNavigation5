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

import Financas from './pages/Principal/Inicio/Financas';
import Negocios from './pages/Principal/Inicio/Negocios';
import MeuDinheiro from './pages/Principal/Inicio/MeuDinheiro';
import Clientes from './pages/Principal/Inicio/Clientes';

Icon.loadFont();

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function StackLogin() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const forFade = ({current, closing}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function StackInicio() {
  return (
    <Stack.Navigator
      mode="modal"
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
      <Stack.Screen
        name="Financas"
        component={Financas}
        options={{
          title: 'Finanças',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Negocios"
        component={Negocios}
        options={{
          title: 'Negocios',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="MeuDinheiro"
        component={MeuDinheiro}
        options={{
          title: 'Meu Dinheiro',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Clientes"
        component={Clientes}
        options={{
          title: 'Clientes',
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

function StackContato() {
  return (
    <Stack.Navigator
      mode="modal"
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
      <Stack.Screen name="Contato" component={Contato} />
    </Stack.Navigator>
  );
}

function StackSobre() {
  return (
    <Stack.Navigator
      mode="modal"
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
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
  );
}

function TabScreen() {
  return (
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
          tabBarIcon: ({color}) => <Icon name="home" size={35} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Contato"
        component={StackContato}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Sobre"
        component={StackSobre}
        options={{
          tabBarIcon: ({color}) => <Icon name="info" size={35} color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
}

export default function createRouter(isSigned) {
  return (
    <Stack.Navigator
      initialRouteName={!isSigned ? 'StackLogin' : 'TabScreen'}
      headerMode="none">
      <Stack.Screen name="StackLogin" component={StackLogin} />
      <Stack.Screen
        name="TabScreen"
        component={TabScreen}
        options={{cardStyleInterpolator: forFade}}
      />
    </Stack.Navigator>
  );
}
