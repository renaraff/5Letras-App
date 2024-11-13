import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import { AuthContext } from '../Context/AuthContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Materias() {
  const [materia, setMateria] = useState();
  const[conteudo, setConteudo  ] = useState();

  const { filtroMateria, setFiltroMateria } = useContext(AuthContext);

  console.log(filtroMateria);

  async function getMateria() {
    fetch(process.env.EXPO_PUBLIC_URL + '/api/Materias/GetAllMaterias', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setMateria(json);
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getMateria();
  }, []);

  useEffect(() => {
    console.log(filtroMateria);
  }, [filtroMateria])

  async function getConteudo() {
    fetch(process.env.EXPO_PUBLIC_URL + '/api/Conteudo/GetAllConteudos', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setConteudo(json);
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getConteudo();
  }, []);

  return (
    <View style={styles.container}>
      {!filtroMateria ?
        <>
          <Text style={styles.title}>Matérias</Text>
          <FlatList
            data={materia}
            keyExtractor={(item) => item.MateriasId}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.materia} onPress={() => setFiltroMateria(item.MateriasId)}>
                <Text style={styles.materiatext}>{item.MateriasNome}</Text>
              
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.separador} />}
          />
        </>
        :
        <View>
                  <TouchableOpacity onPress={() => setFiltroMateria(false)}>
          <MaterialCommunityIcons style={[styles.botao]} name="arrow-left" />
        </TouchableOpacity>
          <FlatList
            data={conteudo}
            keyExtractor={(item) => item.ConteudoId}
            renderItem={({ item }) => (
              <View style={styles.caixa}>
                <Text style={styles.user}>{item.ProfessorNome}</Text>
                <Text style={styles.categoria}>• {item.Materia.MateriasNome}</Text>
                <Text style={styles.assunto}>{item.ConteudoTexto}</Text>
                <View style={styles.iconcaixa}>
                 
                </View>
              </View>
            )}
          /></View>
      }
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
});