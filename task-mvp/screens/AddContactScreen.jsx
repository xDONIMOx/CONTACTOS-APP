// screens/AddTaskScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

export default function AddContactScreen({ navigation, route }) {
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('');

  // Recuperamos la función addContact pasada desde ContactListScreen

  const { addContact } = route.params || {};

  const isTitleValid = title.trim().length >= 3;
  const isNumberValid = number.trim().length >= 7;
  const isFormValid = isTitleValid && isNumberValid;

  const handleAdd = () => {
      if (!isFormValid) {
        Alert.alert(
          'Error de Validación',
          'Por favor, asegúrate de que el nombre tenga al menos 3 caracteres y el número de teléfono al menos 7 dígitos.'
        );
        return;
      }

    const newContact = {
      id: Date.now().toString(), 
      title: title.trim(),
      number: number.trim(),
    };

    // Llamamos al callback sólo si existe
    if (typeof addContact === 'function') {
      addContact(newContact);
    } else {
      console.warn('addContact no está definido');
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AGREGAR CONTACTO</Text>

      <TextInput
         style={styles.input}
         placeholder="Nombre (mín. 3 caracteres)"
         value={title}
         onChangeText={setTitle}
         
        />
      
            {/* Mensaje de error para el nombre */}
            {!isTitleValid && title.length > 0 && (
              <Text style={styles.errorText}>
                El nombre debe tener al menos 3 caracteres.
              </Text>
            )}
      
      <TextInput
          style={styles.input}
          placeholder="Número de Teléfono (mín. 7 dígitos)"
          value={number}
          onChangeText={setNumber}
        />

      <View style={styles.buttons}>
        <Button
          title="Agregar contacto"
          onPress={handleAdd}
          disabled={!isTitleValid}
        />
        { title.length > 0 && (
          <Button
            title="Limpiar"
            onPress={() => {setTitle('');setNumber('')}}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  errorText: {
    color: '#d9534f',
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 10,
  },
});