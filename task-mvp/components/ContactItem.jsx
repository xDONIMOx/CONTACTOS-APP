import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function ContactItem({ contact, onTogle }) {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => onTogle(contact.id)}
    >
      <Text style={[styles.text, contact.completed && styles.done]}>
        {contact.completed ? '✅' : '⌛'} {contact.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: { padding: 12, borderBottomWidth: 1, borderColor: '#eee'},
  text: { fontSize: 16 },
  done: { textDecorationLine: 'line-through', color: '#888'},
})