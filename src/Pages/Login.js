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
      <Image
        source={require("../../assets/Logo.png")} style={styles.logo} />
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Login</Text>
        <TextInput
          inputMode="email"
          placeholder="E-mail"
          style={styles.input}
          value={email}
          onChangeText={(digitado) => setEmail(digitado)}
          placeholderTextColor="#87B2BF"
        />
        <TextInput
          inputMode="text"
          placeholder="Senha"
          secureTextEntry={true}
          style={styles.input}
          value={senha}
          onChangeText={(digitado) => setSenha(digitado)}
          placeholderTextColor="#87B2BF"
        />
        <TouchableOpacity style={styles.button} onPress={() => RealizaLogin()}>
          <Text style={styles.btnText}>LOGAR</Text>
        </TouchableOpacity>

        {error && (
          <View style={styles.erro}>
            <Text style={styles.errotext}>Confire se seus dados estão corretos e tente novamente.</Text>
          </View>
        )}
        <Text style={styles.cadastrotext} onPress={() => { setCadastro(true); setLogin(false); }}>
          Não tem conta? Cadastre-se
        </Text>
      </View>
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
  caixa: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '90%',
    maxWidth: 400,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  logo: {
    width: 190,
    height: 190,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#727272',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 2.5,
    borderColor: '#5A97A4',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontWeight: '400',
    fontSize: 16,
  },
  button: {
    width: '33%',
    height: 50,
    backgroundColor: '#8C52FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  btnText: {
    color: 'rgba(255, 255, 255, 0.73)',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errotext: {
    marginTop: 15,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  cadastrotext: {
    color: "#727272",
    marginTop: 11,
    textDecorationLine: 'underline',
  },
});
