import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

export default function PublicarConteudo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Publicar Conteúdo</Text>
      <Text style={styles.subtitle}>Selecione uma matéria para publicar conteúdo</Text>
      
      <View style={styles.pickerContainer}>
    
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite aqui..."
        placeholderTextColor="#A0A0A0"
        multiline
      />

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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderRadius: 8,
    width: '100%',
    marginBottom: 16,
  },
  picker: {
    height: 40,
    width: '100%',
    color: '#666666',
  },
  input: {
    height: 200,
    width: '100%',
    borderColor: '#A0A0A0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#333333',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#A653EB',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});