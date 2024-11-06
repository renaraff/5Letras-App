import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Literatura() {

  const posts = [
    {
      id: '1',
      user: 'User897658',
      categoria: 'Enem',
      assunto: 'Enquanto fazia provas de edições passadas do enem me surgiu essa dúvida, em português todas as questões são muito ambíguas. Vocês têm alguma dica ou canal que recomendem pra melhorar na parte de linguagens do enem?',
    },
    {
      id: '2',
      user: 'User897658',
      categoria: 'Enem',
      assunto: 'Enquanto fazia provas de edições passadas do enem me surgiu essa dúvida, em português todas as questões são muito ambíguas. Vocês têm alguma dica ou canal que recomendem pra melhorar na parte de linguagens do enem?',
    },
 
  ];

  return (
    <View style={styles.container}>
      <View style={styles.pesquisacaixa}>
        <TextInput style={styles.pesquisa} placeholder="Pesquisar" placeholderTextColor="#6B6B6B" />
        <Icon name="search" size={20} color="#6B6B6B" style={styles.pesquisaicon} />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.caixa}>
            <Text  style={styles.titulo}>Literatura</Text>
            <Text style={styles.user}>{item.user}</Text>
            <Text style={styles.categoria}>• {item.categoria}</Text>
            <Text style={styles.assunto}>{item.assunto}</Text>
            <View style={styles.iconcaixa}>
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
  pesquisacaixa: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#BEBEBE',
  },
  pesquisa: {
    flex: 1,
    paddingVertical: 10,
    color: '#333',
  },
  pesquisaicon: {
    marginLeft: 10,
  },
  caixa: {
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
  user: {
    color: '#A020F0',
    fontWeight: '600',
    fontSize: 14,
  },
  categoria: {
    color: '#A020F0',
    fontSize: 12,
    marginBottom: 5,
  },
  assunto: {
    color: '#333',
    fontSize: 14,
    marginBottom: 10,
  },
  iconcaixa: {
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