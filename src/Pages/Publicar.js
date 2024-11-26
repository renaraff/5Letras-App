import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Modal, FlatList } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

export default function Publicar() {
  const [conteudoId, setConteudoId] = useState("");
  const [professorNome, setProfessorNome] = useState("");
  const [materiasId, setMateriasId] = useState("");
  const [materiasNome, setMateriasNome] = useState("");
  const [conteudoTexto, setConteudoTexto] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [materias, setMaterias ] = useState();

  const {usuario} = useContext(AuthContext);

    useEffect(() => {
      if (usuario.usuarioTipo === "aluno") {
        Alert.alert("Acesso Negado", "Apenas professores podem publicar conteúdo.");
      } else {
        getMaterias();
      }
    }, []);
  
    if (usuario.usuarioTipo === "aluno") {
      return (
        <View style={styles.container}>
          <Text style={styles.alerta}>Apenas professores podem publicar conteúdos.</Text>
        </View>
      );
    }

  async function SalvarPublicacao() {
    if (!conteudoTexto || !materiasNome) {
      Alert.alert('Erro', 'Confira todos os campos e tente novamente.');
      return;
    }

    await fetch(process.env.EXPO_PUBLIC_URL + '/api/Conteudo/CreateConteudo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        professorId: usuario.usuarioId,
        materiasId: materiasId,
        conteudoTexto: conteudoTexto,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setSucesso(true);
        setConteudoTexto("");
        setMateriasNome("");
        setProfessorNome("");
      })
      .catch((err) => console.log(err));
  }

  const selecionarMateria = (materia) => {
    setMateriasId(materia.MateriasId);
    setMateriasNome(materia.MateriasNome);
    setModalVisible(false);
  };

  async function getMaterias()
  {
    await fetch(process.env.EXPO_PUBLIC_URL + '/api/Materias/GetAllMaterias', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())

      .then((json) => {
        setMaterias(json)
      })
      
      .catch((err) => console.log(err));
  }

  useEffect( () => {
    getMaterias();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Publicar Conteúdo</Text>

      <TouchableOpacity style={styles.materiaButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.materiaButtonText}>
          {materiasNome ? materiasNome : 'Selecionar Matéria'}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione uma matéria:</Text>
            <FlatList
              data={materias}
              keyExtractor={(item) => item.MateriasId}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.materiaItem}
                  onPress={() => selecionarMateria(item)}
                >
                  <Text style={styles.materiaItemText}>{item.MateriasNome}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TextInput
        style={styles.input}
        placeholder="Digite aqui..."
        placeholderTextColor="#A0A0A0"
        multiline
        value={conteudoTexto}
        onChangeText={(digitado) => setConteudoTexto(digitado)}
      />

      <TouchableOpacity style={styles.button} onPress={SalvarPublicacao}>
        <Text style={styles.buttonText}>PUBLICAR CONTEÚDO</Text>
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
  materiaButton: {
    borderWidth: 1,
    borderColor: '#6440AC',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  materiaButtonText: {
    color: '#333333',
    fontSize: 16,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  materiaItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    width: '100%',
    alignItems: 'center',
  },
  materiaItemText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#8C52FF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
});
