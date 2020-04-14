import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes.js';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#213140" />
      <Routes />
    </>
  );
}
