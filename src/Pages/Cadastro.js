import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

export default function Cadastro() {
  const { setLogin, setCadastro } = useContext(AuthContext);

  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  async function postUser() {
    if (!nome || !telefone || !email || !senha) {
      Alert.alert('Erro', 'Confira todos os campos e tente novamente.');
      return;
    }
    setCadastro(false);
    setLogin(false);
    fetch('http://10.139.75.47:5251/api/Usuarios/CreateUser', {
      method: 'POST',
      body: JSON.stringify({
        UsuarioNome: nome,
        UsuarioTelefone: telefone,
        UsuarioEmail: email,
        UsuarioSenha: senha,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Perdeu o seu pet e deseja encontrá-lo</Text>
      <Text style={styles.subtitle}>Crie uma conta para acessar o painel de busca de pets</Text>

      {/* Campo de Nome Completo */}
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        placeholderTextColor="black"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      {/* Campo de Telefone */}
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="black"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
      />

      {/* Campo de E-mail */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="black"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor="black"
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      {/* Botão de Cadastro */}
      <TouchableOpacity style={styles.button} onPress={postUser}>
        <Text style={styles.btnText}>CADASTRAR</Text>
      </TouchableOpacity>

      {/* Link para Login */}
      <Text style={styles.cadastroText} onPress={() => { setCadastro(true); setLogin(false); }}>
        Já possui uma conta? Entre
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#727272',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#727272',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 2.5,
    borderColor: 'rgba(203, 108, 230, 0.24)',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '400',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#6a0dad', // Cor roxa para o botão
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cadastroText: {
    color: '#727272',
    marginTop: 11,
    textDecorationLine: 'underline',
  },
});
