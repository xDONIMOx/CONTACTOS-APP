// screens/TaskListScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function ContactListScreen({ navigation }) {
  const [contacts, setContacts] = useState([
    { id: 1, title: 'Comprar leche', completed: false },
    { id: 2, title: 'Enviar email', completed: true },
    { id: 3, title: 'Leer documentación', completed: false },
  ]);
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'pending' | 'completed'

  // Función para añadir una nueva tarea al estado
  const addContact = (contact) => {
    setContacts(prev => [...prev, contact]);
  };

  // Derivar listado según filtro
  let displayedContacts;
  switch (filterMode) {
    case 'pending':
      displayedContacts = contacts.filter(t => !c.completed);
      break;
    case 'completed':
      displayedContacts = contacts.filter(t => c.completed);
      break;
    default:
      displayedContacts = contacts;
  }

  return (
    <View style={styles.container}>
      <Text>Contacts Master</Text>
      {/* Fila de botones de filtro */}
      <View style={styles.filterRow}>
        <Button
          title="Todas"
          onPress={() => setFilterMode('all')}
          color={filterMode === 'all' ? '#007AFF' : undefined}
        />
        <Button
          title="Pendientes"
          onPress={() => setFilterMode('pending')}
          color={filterMode === 'pending' ? '#007AFF' : undefined}
        />
        <Button
          title="Completadas"
          onPress={() => setFilterMode('completed')}
          color={filterMode === 'completed' ? '#007AFF' : undefined}
        />
      </View>

      {/* Lista filtrada */}
      <ScrollView style={styles.list}>
        {displayedContacts.map(contact => (
          <View key={contact.id} style={styles.contactRow}>
            <Text style={styles.icon}>
              {contact.completed ? '✅' : '⌛️'}
            </Text>
            <Text
              style={[
                styles.contactText,
                contact.completed ? styles.completedText : styles.pendingText,
              ]}
            >
              {contact.title}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Botón para crear nueva tarea, pasamos addTask */}
      <Button
        title="Crear nuevo contacto"
        onPress={() => navigation.navigate('AddContact', { addContact })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, padding: 16, backgroundColor: '#fff' },
  filterRow:    { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  list:         { flex: 1, marginBottom: 12 },
  contactRow:   { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  icon:         { fontSize: 18, marginRight: 8 },
  contactText:  { fontSize: 16 },
  completedText:{ textDecorationLine: 'line-through', color: '#888' },
  pendingText:  { color: '#000' },
});


// aqui voy a explicar git, otra vez