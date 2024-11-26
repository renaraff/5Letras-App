import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

export default function Salvos() {
  const [favoritos, setFavoritos] = useState([]);

  const{curtidos, setCurtidos} = useContext( AuthContext );

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

  

  const renderItem = ({ item, index }) => (
    <View style={styles.caixa}>
      <Text style={styles.user}>Publicação de {item.ProfessorNome}</Text>
      <Text style={styles.categoria}>• {item.Materia.MateriasNome}</Text>
      <Text style={styles.assunto}>{item.ConteudoTexto}</Text>
      <View style={styles.iconcaixa}>
        <TouchableOpacity onPress={() => addCurtidos(item)} style={styles.icon}>
          <FontAwesome
            name={curtidos.find( value => value.ConteudoId == item.ConteudoId ) ? 'heart' : 'heart-o'}
            size={20}  style={styles.coracao}
            color={curtidos.find( value => value.ConteudoId == item.ConteudoId ) ? '#FF6666' : '#B0B0B0'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="comment" size={20} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={curtidos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
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
    paddingHorizontal: 10,
  },
  coracao: {
    marginLeft: '93.5%'
  },
});
