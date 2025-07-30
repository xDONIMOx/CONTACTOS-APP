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

  // Recuperamos la función addTask pasada desde TaskListScreen
  const { addContact } = route.params || {};

  const isValid = title.trim().length >= 3;

  const handleAdd = () => {
    if (!isValid) {
      Alert.alert('Error', 'El título debe tener al menos 3 caracteres.');
      return;
    }
    const newContact = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
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
      <Text style={styles.header}>Crear Nueva Tarea</Text>

      <TextInput
        style={styles.input}
        placeholder="Título de la tarea (mín. 3 caracteres)"
        value={title}
        onChangeText={setTitle}
      />

      { !isValid && title.length > 0 && (
        <Text style={styles.errorText}>
          El título debe tener al menos 3 caracteres.
        </Text>
      )}

      <View style={styles.buttons}>
        <Button
          title="Agregar tarea"
          onPress={handleAdd}
          disabled={!isValid}
        />
        { title.length > 0 && (
          <Button
            title="Limpiar"
            onPress={() => setTitle('')}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, padding: 16, backgroundColor: '#fff' },
  header:     { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  input:      {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  errorText:  { color: 'red', marginBottom: 8 },
  buttons:    { flexDirection: 'row', justifyContent: 'space-between' },
});