import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function TaskItem({ task, onTogle }) {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => onTogle(task.id)}
    >
      <Text style={[styles.text, task.completed && styles.done]}>
        {task.completed ? '✅' : '⌛'} {task.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: { padding: 12, borderBottomWidth: 1, borderColor: '#eee'},
  text: { fontSize: 16 },
  done: { textDecorationLine: 'line-through', color: '#888'},
})