import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function Cadastro() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se aqui</Text>

      <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#6B6B6B" />
      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#6B6B6B" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#6B6B6B" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="#6B6B6B" secureTextEntry />

      <Text style={styles.label}>Você é aluno ou professor?</Text>
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, selectedRole === 'Aluno' && styles.selectedAluno]}
          onPress={() => setSelectedRole('Aluno')}
        >
          <Text style={[styles.roleText, selectedRole === 'Aluno' && styles.selectedRoleText]}>Aluno</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, selectedRole === 'Professor' && styles.selectedProfessor]}
          onPress={() => setSelectedRole('Professor')}
        >
          <Text style={[styles.roleText, selectedRole === 'Professor' && styles.selectedRoleText]}>Professor</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Anexe seu certificado de graduação"
        placeholderTextColor="#6B6B6B"
      />

      <View style={styles.termsContainer}>
      
        <Text style={styles.termsText}>Li e concordo com os termos e condições</Text>
      </View>

      <TouchableOpacity style={styles.button} disabled={!agreeTerms}>
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
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#F9F9F9',
    borderColor: '#BEBEBE',
    borderWidth: 1,
    marginBottom: 10,
    color: '#333',
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
    borderRadius: 25,
    backgroundColor: '#F0F0F0',
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
    color: '#6B6B6B',
  },
  selectedRoleText: {
    color: '#FFF',
    fontWeight: '600',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
    color: '#6B6B6B',
    marginLeft: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#A020F0',
    alignItems: 'center',
    opacity: 0.9,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});