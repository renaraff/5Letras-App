import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../Context/AuthContext';

export default function Home() {
  const [conteudo, setConteudo] = useState([]);

  const {setCurtidos, curtidos} = useContext(AuthContext);

  function addCurtidos(item)
  {
    const existe = curtidos.find( value => value.ConteudoId == item.ConteudoId );
    if( existe ) {
      const filter = curtidos.filter( value => value.ConteudoId != item.ConteudoId );
      setCurtidos( filter );
    } else {
      const update = [...curtidos, item ];
      setCurtidos( update );
    }
  }

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
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getConteudo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.pesquisacaixa}>
        <TextInput style={styles.pesquisa} placeholder="Pesquisar" placeholderTextColor="#6B6B6B" />
      </View>
      <FlatList
        data={conteudo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.caixa}>
            <Text style={styles.user}>{item.ProfessorNome}</Text>
            <Text style={styles.categoria}>• {item.Materia.MateriasNome}</Text>
            <Text style={styles.assunto}>{item.ConteudoTexto}</Text>
            <View style={styles.iconcaixa}>
              <TouchableOpacity onPress={() => addCurtidos(item) } style={styles.icon}>
                <FontAwesome
                  name={curtidos.find( value => value.ConteudoId == item.ConteudoId ) ? 'heart' : 'heart-o'}
                  size={20} style={styles.coracao}
                  color={curtidos.find( value => value.ConteudoId == item.ConteudoId ) ? '#FF6666' : '#B0B0B0'}
                />
              </TouchableOpacity>
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
  coracao: {
    marginLeft: '93.5%'
  },
  iconcaixa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
