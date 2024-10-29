import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    author: 'Valéria',
    subject: 'Literatura',
    content: 'No Romantismo os autores valorizam a liberdade e expressam sentimento nacionalista. É recorrente na poesia e na prosa românticas a idealização da mulher e do amor, além da expressão do sofrimento amoroso. Estão presentes também elementos bucólicos e uma visão teocêntrica.',
  },
  {
    id: '2',
    author: 'Adriana',
    subject: 'Gramática',
    content: 'Morfologia são usados como objeto direto, objeto indireto, complemento nominal, agente da passiva e adjunto adverbial.',
  },
];

export default function Salvos() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.author}>Publicação de {item.author}</Text>
        <Text style={styles.subject}> • {item.subject}</Text>
      </View>
      <Text style={styles.content}>{item.content}</Text>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="heart-outline" size={20} color="#A653EB" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salvos</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: '#A653EB',
    fontWeight: 'bold',
  },
  subject: {
    fontSize: 14,
    color: '#A653EB',
  },
  content: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 8,
  },
  iconButton: {
    alignSelf: 'flex-end',
  },
});