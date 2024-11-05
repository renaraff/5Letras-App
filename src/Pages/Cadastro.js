import React, { useContext, useState } from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';
import { AuthContext } from '../Context/AuthContext';

export default function Cadastro() {

  const [isAluno, setIsAluno] = useState(true);
  const [isProfessor, setIsProfessor] = useState(false);
    const { setLogin, setCadastro } = useContext(AuthContext);
    const [nome, setNome]  = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
  

    async function postUser() {     
        
        if (!nome || !email || !senha ) {
            Alert.alert('Erro', 'Confira todos os campos e tente novamente.');
            return;
        }
        setCadastro(false);
        setLogin(false);
        fetch('http://10.139.75.47:5251/api/Usuarios/CreateUser', {
          method: 'POST',
          body: JSON.stringify({
            UsuarioNome: nome,
            UsuarioEmail: email,
            UsuarioSenha: senha
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));    
    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se aqui</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        placeholderTextColor="#6e6e6e"
        value={nome}
        onChangeText={(digitado) => setNome(digitado)}
      />

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        placeholderTextColor="#6e6e6e"
        keyboardType="email-address"
        value={email}
        onChangeText={(digitado) => setEmail(digitado)}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        placeholderTextColor="#6e6e6e"
        secureTextEntry
        value={senha}
        onChangeText={(digitado) => setSenha(digitado)}
      />


      <Text style={styles.question}>Você é aluno ou professor?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.roleButton, isAluno && styles.selectedButton]}
          onPress={() => {
            setIsAluno(true);
            setIsProfessor(false);
          }}
        >
          <Text style={[styles.roleButtonText, isAluno && styles.selectedButtonText]}>Aluno</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleButton, isProfessor && styles.selectedButton]}
          onPress={() => {
            setIsProfessor(true);
            setIsAluno(false);
          }}
        >
          <Text style={[styles.roleButtonText, isProfessor && styles.selectedButtonText]}>Professor</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Anexe seu certificado de graduação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={postUser}>
                <Text style={styles.btn}>CRIAR CONTA</Text>
            </TouchableOpacity>

            <Text style={styles.cadastroText} onPress={() => { setCadastro(true); setLogin(false); }}>Já possui uma conta? Entre</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#A97A4',
    borderRadius: 10,
    border: 2,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333333',
  },
  question: {
    fontSize: 14,
    color: '#6e6e6e',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  roleButton: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(50, 139, 166, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#8C52FF',
  },
  btn: {
    backgroundColor: '#8C52FF',
    borderRadius: 20,
    color: '#ffff',
    padding: 13,
    fontWeight: 'bold'

  },
  roleButtonText: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  selectedButtonText: {
    color: '#ffffff',
  },
  uploadButton: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(50, 139, 166, 1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  uploadButtonText: {
    fontSize: 14,
    color: '#6e6e6e',
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#8C52FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  cadastroText: {
    color: "#727272",
    marginTop: 11,
},
});
