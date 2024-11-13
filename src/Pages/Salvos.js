import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


export default function Salvos() {
  const [favoritos, setFavoritos] = useState();


  async function getFavoritos() {
    fetch(process.env.EXPO_PUBLIC_URL + '/api/Conteudo/GetAllConteudos', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setFavoritos(json);
    })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getFavoritos();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.caixa}>
      <View style={styles.header}>
        <Text style={styles.autor}>Publicação de {item.ProfessorNome}</Text>
        <Text style={styles.assunto}>• {item.Materia.MateriasNome}</Text>
        <Text style={styles.info}>{item.ConteudoTexto}</Text>
      </View>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Salvos</Text>
      <FlatList
        data={favoritos}
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
    color: '#A020F0',
    fontWeight: '600',
    fontSize: 14,
  },
  assunto: {
    color: '#A020F0',
    fontSize: 12,
    marginBottom: 5,
  },
  info: {
    color: '#333',
    fontSize: 14,
    marginBottom: 10,
  },
  icon: {
    alignSelf: 'flex-end',
  },
});