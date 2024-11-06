import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Publicar() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Publicar Conteúdo</Text>
      <Text style={styles.subtitulo}>Selecione uma matéria para publicar conteúdo</Text>
      <View style={styles.materia}>
      </View>
      <TextInput style={styles.input} placeholder="Digite aqui..." placeholderTextColor="#A0A0A0" multiline />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>PUBLICAR CONTEÚDO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: '#6440AC',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  materia: {
    borderWidth: 1,
    borderColor: '#6440AC',
    borderRadius: 8,
    width: '100%',
    marginBottom: 16,
  },
  input: {
    height: 450,
    width: '100%',
    borderWidth: 2.5,
    borderColor: '#5A97A4',
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#333333',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#8C52FF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.73)',
    fontWeight: 'bold',
    fontSize: 16,
  },
});