import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContacListScreen from '../screens/ContactListScreen';
import AddContactScreen from '../screens/AddContactScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={ContactListScreen} />
        <Stack.Screen name="AddContacts" component={AddContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}