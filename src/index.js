import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import App from './App';

export default function Index() {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#213140" />
        <App />
      </NavigationContainer>
    </>
  );
}
