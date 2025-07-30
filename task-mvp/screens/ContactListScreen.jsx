import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function ContactListScreen({ navigation }) {
  const [contacts, setContacts] = useState([
    { id: '1', title: 'Javier', number: '3204567890', favorite: false },
    { id: '2', title: 'Carlos', number: '3136543210', favorite: true },
    { id: '3', title: 'Omar', number: '3191234567', favorite: false },
    { id: '4', title: 'Camila', number: '1112223333', favorite: true },
  ]);
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'favorites' 

  // Función para añadir una nueva tarea al estado
  const addContact = (contact) => {
    setContacts(prev => [...prev, contact]);
  };

  // Derivar listado según filtro
  let displayedContacts;
  switch (filterMode) {
    case 'favorite':
      displayedContacts = contacts.filter(c => c.favorite);
      break;
    default:
      displayedContacts = contacts;
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.appTitle}>Mis Contactos</Text>
      {/* Fila de botones de filtro */}
      <View style={styles.filterRow}>
        <Button
          title="Todas"
          onPress={() => setFilterMode('all')}
          color={filterMode === 'all' ? '#007AFF' : undefined}
        />
        <Button
          title="Favoritos"
          onPress={() => setFilterMode('favorite')}
          color={filterMode === 'favorite' ? '#007AFF' : undefined}
        />
      </View>

      {/* Lista filtrada */}
      <ScrollView style={styles.list}>
        {displayedContacts.length === 0 ? (
                  <Text style={styles.noContactsText}>No hay contactos para mostrar.</Text>
                ) : (
                  displayedContacts.map(contact => (
          <View key={contact.id} style={styles.contactRow}>
            <Text style={styles.icon}>
              {contact.favorite ? '⭐' : '👤'}
            </Text>
            <Text
              style={[
                styles.contactText,
                contact.favorite ? styles.favoriteText : styles.contactText,
              ]}
            >
              {contact.title}{' - '}
            </Text>
            <Text style={styles.contactNumber}>{contact.number}</Text>
          </View>
        )))}
      </ScrollView>

      {/* Botón para crear nueva tarea, pasamos addTask */}
      <TouchableOpacity 
      style={styles.createContactTouchable}
      onPress={() => navigation.navigate('addContact', { addContact })}>
              <Text style={styles.createContactButtonText}>Crear nuevo contacto</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, padding: 16, backgroundColor: '#ebebebff' },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  list: { flex: 1, marginBottom: 12 },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
  },
  icon:         { fontSize: 18, marginRight: 8 },
  contactText:  { fontSize: 16 },
  favoriteText: { fontWeight: 'bold' },
  
  createContactTouchable: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
    width: '90%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  createContactButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noContactsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});


