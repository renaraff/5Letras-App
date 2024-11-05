import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Avaliacoes() {

  const posts = [
    {
      id: '1',
      username: 'User897658',
      category: 'Enem',
      content: 'Enquanto fazia provas de edições passadas do enem me surgiu essa dúvida, em português todas as questões são muito ambíguas. Vocês têm alguma dica ou canal que recomendem pra melhorar na parte de linguagens do enem?',
    },
    {
      id: '2',
      username: 'User897658',
      category: 'Enem',
      content: 'Enquanto fazia provas de edições passadas do enem me surgiu essa dúvida, em português todas as questões são muito ambíguas. Vocês têm alguma dica ou canal que recomendem pra melhorar na parte de linguagens do enem?',
    },
 
  ];

  return (
    <View style={styles.container}>
      {}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Pesquisar" placeholderTextColor="#6B6B6B" />
        <Icon name="search" size={20} color="#6B6B6B" style={styles.searchIcon} />
      </View>

      {}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text  style={styles.titulo}>Avaliações</Text>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.category}>• {item.category}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <View style={styles.iconRow}>
              <Icon name="chatbubble-outline" size={20} color="#6B6B6B" style={styles.icon} />
              <Icon name="heart-outline" size={20} color="#6B6B6B" style={styles.icon} />
            </View>
          </View>
        )}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#BEBEBE',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
  },
  postCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  username: {
    color: '#A020F0',
    fontWeight: '600',
    fontSize: 14,
  },
  category: {
    color: '#A020F0',
    fontSize: 12,
    marginBottom: 5,
  },
  content: {
    color: '#333',
    fontSize: 14,
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  titulo: {
    fontSize: '17'
  }
});