import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

export default function Cadastro() {

    const [isAluno, setIsAluno] = useState(true);
    const [isProfessor, setIsProfessor] = useState(false);
    const {setLogin, setCadastro } = useContext(AuthContext);
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [graduacao, setGraduacao] = useState();
    const [escolaridade, setEscolaridade] = useState();
    const [senha, setSenha] = useState();
    const [descricao, setDescricao] = useState();
    const [ocupacao, setOcupacao] = useState();
    const [erro, setErro] = useState(false);

    async function postUser() {
        if (!nome || !email || !senha) {
            Alert.alert('Erro', 'Confira todos os campos e tente novamente.');
            return;
        }
        setCadastro(false);
        setLogin(false);
        if (isAluno) {
            fetch(process.env.EXPO_PUBLIC_URL + '/api/Aluno/CreateAluno', {
                method: 'POST',
                body: JSON.stringify({
                    alunoNome: nome,
                    alunoEmail: email,
                    alunoSenha: senha,
                    alunoEscolaridade: escolaridade
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    if (!json.alunoId) {
                        setErro(true);
                    }
                });
        }
        if (isProfessor) {
            fetch(process.env.EXPO_PUBLIC_URL + '/api/Professor/CreateProfessor', {
                method: 'POST',
                body: JSON.stringify({
                    professorNome: nome,
                    professorEmail: email,
                    professorSenha: senha,
                    professorGraduacao: graduacao,
                    professorDescricao: descricao,
                    professorOcupacao: ocupacao
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    if (!json.alunoId) {
                        setErro(true);
                    }
                });
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Cadastre-se aqui</Text>
            <TextInput
                placeholder="Nome"
                style={styles.input}
                placeholderTextColor="#87B2BF"
                value={nome}
                onChangeText={(digitado) => setNome(digitado)}
            />
            <TextInput
                placeholder="E-mail"
                style={styles.input}
                placeholderTextColor="#87B2BF"
                keyboardType="email-address"
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
            />
            <TextInput
                placeholder="Senha"
                style={styles.input}
                placeholderTextColor="#87B2BF"
                secureTextEntry
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
            />

            {isAluno && (
                <TextInput
                    placeholder="Escolaridade"
                    style={styles.input}
                    placeholderTextColor="#87B2BF"
                    value={escolaridade}
                    onChangeText={(digitado) => setEscolaridade(digitado)}
                />
            )}

            {isProfessor && (
                <>
                    <TextInput
                        placeholder="Graduação"
                        style={styles.input}
                        placeholderTextColor="#87B2BF"
                        value={graduacao}
                        onChangeText={(digitado) => setGraduacao(digitado)}
                    />
                    <TextInput
                        placeholder="Breve descrição sobre você"
                        style={styles.input}
                        placeholderTextColor="#87B2BF"
                        value={descricao}
                        onChangeText={(digitado) => setDescricao(digitado)}
                    />
                    <TextInput
                        placeholder="Sua ocupação"
                        style={styles.input}
                        placeholderTextColor="#87B2BF"
                        value={ocupacao}
                        onChangeText={(digitado) => setOcupacao(digitado)}
                    />
                </>
            )}

            <Text style={styles.pergunta}>Você é aluno ou professor?</Text>
            <View style={styles.btncaixa}>
                <TouchableOpacity
                    style={[styles.btnescolha, isAluno && styles.btnselecionado]}
                    onPress={() => {
                        setIsAluno(true);
                        setIsProfessor(false);
                    }}>
                    <Text style={[styles.btntext, isAluno && styles.btnselecionadotext]}>Aluno</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.btnescolha, isProfessor && styles.btnselecionado]}
                    onPress={() => {
                        setIsProfessor(true);
                        setIsAluno(false);
                    }}>
                    <Text style={[styles.btntext, isProfessor && styles.btnselecionadotext]}>Professor</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={postUser}>
                <Text style={styles.btn}>CRIAR CONTA</Text>
            </TouchableOpacity>
            <Text style={styles.cadastroText} onPress={() => { setCadastro(true); setLogin(false); }}>Já possui uma conta? Entre</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '20%',
        marginLeft: '4%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '93%',
        maxWidth: 400,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 2.5,
        borderColor: '#5A97A4',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#333333',
    },
    pergunta: {
        fontSize: 14,
        color: '#6e6e6e',
        marginBottom: 10,
    },
    btncaixa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 15,
    },
    btnescolha: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        borderWidth: 2.5,
        borderColor: '#5A97A4',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    btnselecionado: {
        backgroundColor: '#8C52FF',
        borderWidth: 2.5,
        borderColor: '#8C52FF',
    },
    btn: {
        color: 'rgba(255, 255, 255, 0.73)',
        fontWeight: 'bold'
    },
    btntext: {
        fontSize: 14,
        color: '#6e6e6e',
    },
    btnselecionadotext: {
        color: '#ffffff',
    },
    button: {
        width: '40%',
        height: 50,
        backgroundColor: '#8C52FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
    },
    cadastroText: {
        color: "#727272",
        marginTop: 11,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
});
