import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    autor: 'Valéria',
    assunto: 'Literatura',
    info: 'No Romantismo os autores valorizam a liberdade e expressam sentimento nacionalista. É recorrente na poesia e na prosa românticas a idealização da mulher e do amor, além da expressão do sofrimento amoroso. Estão presentes também elementos bucólicos e uma visão teocêntrica.',
  },
  {
    id: '2',
    autor: 'Adriana',
    assunto: 'Gramática',
    info: 'Morfologia são usados como objeto direto, objeto indireto, complemento nominal, agente da passiva e adjunto adverbial.',
  },
];

export default function Salvos() {
  const renderItem = ({ item }) => (
    <View style={styles.caixa}>
      <View style={styles.header}>
        <Text style={styles.autor}>Publicação de {item.autor}</Text>
        <Text style={styles.assunto}> • {item.assunto}</Text>
      </View>
      <Text style={styles.info}>{item.info}</Text>
      <TouchableOpacity style={styles.icon}>
        <Ionicons name="heart-outline" size={20} color="#A653EB" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Salvos</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.lista}
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
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  lista: {
    paddingBottom: 16,
  },
  caixa: {
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
  autor: {
    fontSize: 14,
    color: '#A653EB',
    fontWeight: 'bold',
  },
  assunto: {
    fontSize: 14,
    color: '#A653EB',
  },
  info: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 8,
  },
  icon: {
    alignSelf: 'flex-end',
  },
});