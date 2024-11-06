import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Materias() {
  const subjects = [
    { id: '1', nome: 'Literatura' },
    { id: '2', nome: 'Gramática' },
    { id: '3', nome: 'Redação' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matérias</Text>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.materia}>
            <Text style={styles.materiatext}>{item.nome}</Text>
            <Icon name="chevron-forward-outline" size={18} color="#6B6B6B" />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
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
  materia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  materiatext: {
    color: '#2F8098',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separador: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 5,
  },
});