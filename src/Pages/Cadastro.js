import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Cadastro() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se aqui</Text>

      <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#A9A9A9" />
      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#A9A9A9" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#A9A9A9" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="#A9A9A9" secureTextEntry />

      <Text style={styles.label}>Você é aluno ou professor?</Text>
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, selectedRole === 'Aluno' && styles.selectedAluno]}
          onPress={() => setSelectedRole('Aluno')}
        >
          <Text style={[styles.roleText, selectedRole === 'Aluno' && styles.selectedText]}>Aluno</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, selectedRole === 'Professor' && styles.selectedProfessor]}
          onPress={() => setSelectedRole('Professor')}
        >
          <Text style={[styles.roleText, selectedRole === 'Professor' && styles.selectedText]}>Professor</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Anexe seu certificado de graduação"
        placeholderTextColor="#A9A9A9"
      />

      <View style={styles.termsContainer}>
        
       

        <Text style={styles.termsText}>Li e concordo com os termos e condições</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CRIAR CONTA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#FFF',
    borderColor: '#A9A9A9',
    borderWidth: 1,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  roleButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedAluno: {
    backgroundColor: '#A020F0',
  },
  selectedProfessor: {
    backgroundColor: '#1E90FF',
  },
  roleText: {
    fontSize: 16,
    color: '#A9A9A9',
  },
  selectedText: {
    color: '#FFF',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  termsText: {
    color: '#A9A9A9',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#A020F0',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});