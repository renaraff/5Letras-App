import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SubjectsScreen() {
  // Dados simulados para as matérias
  const subjects = [
    { id: '1', name: 'Literatura' },
    { id: '2', name: 'Gramática' },
    { id: '3', name: 'Redação' },
    { id: '4', name: 'Literatura' },
    { id: '5', name: 'Gramática' },
    { id: '6', name: 'Redação' },
  ];

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Matérias</Text>

      {/* Lista de Matérias */}
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.subjectItem}>
            <Text style={styles.subjectText}>{item.name}</Text>
            <Icon name="chevron-forward-outline" size={18} color="#6B6B6B" />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  subjectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  subjectText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 5,
  },
});