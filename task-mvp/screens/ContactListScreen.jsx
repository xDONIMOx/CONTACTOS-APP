// screens/TaskListScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Comprar leche', completed: false },
    { id: 2, title: 'Enviar email', completed: true },
    { id: 3, title: 'Leer documentación', completed: false },
  ]);
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'pending' | 'completed'

  // Función para añadir una nueva tarea al estado
  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  // Derivar listado según filtro
  let displayedTasks;
  switch (filterMode) {
    case 'pending':
      displayedTasks = tasks.filter(t => !t.completed);
      break;
    case 'completed':
      displayedTasks = tasks.filter(t => t.completed);
      break;
    default:
      displayedTasks = tasks;
  }

  return (
    <View style={styles.container}>
      <Text>Task Master</Text>
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
        {displayedTasks.map(task => (
          <View key={task.id} style={styles.taskRow}>
            <Text style={styles.icon}>
              {task.completed ? '✅' : '⌛️'}
            </Text>
            <Text
              style={[
                styles.taskText,
                task.completed ? styles.completedText : styles.pendingText,
              ]}
            >
              {task.title}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Botón para crear nueva tarea, pasamos addTask */}
      <Button
        title="Crear nueva tarea"
        onPress={() => navigation.navigate('AddTask', { addTask })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, padding: 16, backgroundColor: '#fff' },
  filterRow:    { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  list:         { flex: 1, marginBottom: 12 },
  taskRow:      { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  icon:         { fontSize: 18, marginRight: 8 },
  taskText:     { fontSize: 16 },
  completedText:{ textDecorationLine: 'line-through', color: '#888' },
  pendingText:  { color: '#000' },
});


// aqui voy a explicar git, otra vez