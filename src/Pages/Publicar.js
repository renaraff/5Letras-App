import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Publicar() {

  const [conteudoId, setConteudoId] = useState("");
  const [professorId, setProfessorId] = useState("");
  const [professorNome, setProfessorNome] = useState("");
  const [materiasId, setMateriasId] = useState("");
  const [materiasNome, setMateriasNome] = useState("");
  const [conteudoTexto, setConteudoTexto] = useState("");
  const [sucesso, setSucesso] = useState(false);

  async function SalvarPublicacao() {
    if (!conteudoTexto) {
      Alert.alert('Erro', 'Confira todos os campos e tente novamente.');
      return;
    }

    await fetch(process.env.EXPO_PUBLIC_URL + '/api/Conteudo/CreateConteudo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        conteudoId: conteudoId,
        professorId: professorId,
        professorNome: professorNome,
        materiasId: materiasId,
        materiasNome: materiasNome,
        conteudoTexto: conteudoTexto
      })
    })
      .then(res => res.json())
      .then(json => {
        setSucesso(true);
        setConteudoTexto("");
        setMateriasNome("");
        setProfessorNome("");
      })
      .catch(err => console.log(err));
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Publicar Conteúdo</Text>
      <Text style={styles.subtitulo}>Selecione uma matéria para publicar conteúdo</Text>
      <View style={styles.materia}>
      </View>
      <TextInput style={styles.input} placeholder="Digite aqui..." placeholderTextColor="#A0A0A0" multiline value={conteudoTexto} onChangeText={(digitado) => setConteudoTexto(digitado)} />
      <TouchableOpacity style={styles.button}>
        <Text onPress={SalvarPublicacao} style={styles.buttonText}>PUBLICAR CONTEÚDO</Text>
      </TouchableOpacity>
      {sucesso && (
        <View>
          <Text style={styles.sucessoTxt}>Publicação salva com sucesso!</Text>
        </View>
      )}
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