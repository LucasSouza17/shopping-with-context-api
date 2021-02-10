import { StatusBar } from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Routes />
    </>
  );
}
