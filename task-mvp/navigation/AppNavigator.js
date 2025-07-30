import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddContactScreen from '../screens/AddContactScreen';
import ContactListScreen from '../screens/ContactListScreen';

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