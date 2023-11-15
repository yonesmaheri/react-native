import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import ProductsList from './Screens/ProductsList';
import UserList from './Screens/UserList';
import AddUser from './Screens/AddUser';
import Edit from './Screens/Edit';
import Remove from './Screens/Remove';


const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ProductsList" component={ProductsList} />
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="AddUser" component={AddUser} />
          <Stack.Screen name="Edit" component={Edit} />
          <Stack.Screen name="Remove" component={Remove} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default App;