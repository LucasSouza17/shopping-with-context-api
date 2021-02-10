import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import CartProvider from './context/cart'

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
          initialRouteName="Home"
        >
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="ProductDetail" component={ProductDetail} />
          <AppStack.Screen name="Cart" component={Cart} />
        </AppStack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

export default Routes;