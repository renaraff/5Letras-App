import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function PerfilAluno() {
  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Perfil</Text>
        
        <Text style={styles.caixatitulo}>Informações pessoais</Text>
        <Text style={styles.info}>Nome: Gyuliana da Silva Fávaro</Text>
        <Text style={styles.info}>E-mail: favorogyuliana@gmail.com</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>EDITAR PERFIL</Text>
        </TouchableOpacity>

        <Text style={styles.subtitulo}>Favoritos</Text>
        
        <View style={styles.favorito}>
          <Text style={styles.favoritotext}>Valéria Motta</Text>
        </View>

        <View style={styles.favorito}>
          <Text style={styles.favoritotext}>Adriana Paderes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 16,
  },
  caixa: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 230
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  caixatitulo: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  info: {
    fontSize: 14,
    color: '#87B2BF',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#A653EB',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 24,
  },
  buttontext: {
    color: 'rgba(255, 255, 255, 0.73)',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  favorito: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
 
  favoritotext: {
    fontSize: 14,
    color: '#333333',
  },
});