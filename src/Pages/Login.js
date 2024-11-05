import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { Login, setCadastro, setLogin, error } = useContext(AuthContext);

  function RealizaLogin() {
    Login(email, senha);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'https://via.placeholder.com/190' }} // Substitua pelo URL da imagem do logo
        style={styles.logo}
      />

      {/* Título */}
      <Text style={styles.title}>Login</Text>

      {/* Campo de E-mail */}
      <TextInput
        inputMode="email"
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={(digitado) => setEmail(digitado)}
        placeholderTextColor="black"
      />

      {/* Campo de Senha */}
      <TextInput
        inputMode="text"
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
        value={senha}
        onChangeText={(digitado) => setSenha(digitado)}
        placeholderTextColor="black"
      />

      {/* Botão de Login */}
      <TouchableOpacity style={styles.button} onPress={() => RealizaLogin()}>
        <Text style={styles.btnText}>LOGAR</Text>
      </TouchableOpacity>

      {/* Exibição de Erro */}
      {error && (
        <View style={styles.error}>
          <Text style={styles.errorText}>Confire se seus dados estão corretos e tente novamente.</Text>
        </View>
      )}

      {/* Link para Cadastro */}
      <Text style={styles.cadastroText} onPress={() => { setCadastro(true); setLogin(true); }}>
        Não tem conta? Cadastre-se
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
  logo: {
    width: 190,
    height: 190,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#727272',
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
    fontWeight: '400',
    fontSize: 16,
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
  errorText: {
    marginTop: 15,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  cadastroText: {
    color: "#727272",
    marginTop: 11,
    textDecorationLine: 'underline',
  },
});
