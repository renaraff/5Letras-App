import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PerfilProf() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.caixa}>
        
        <Text style={styles.titulo}>Perfil</Text>
        <Text style={styles.descricao}>
          Meu nome é Valeria Batista da Motta, tenho 52 anos, costumo utilizar exemplos práticos do cotidiano para
          explicar os conceitos de gramática e interpretação textual.
        </Text>
        <Text style={styles.info}>
          Trabalha na empresa Professora da Rede SESI</Text>
        <Text style={styles.info}>Estudou Teorias Linguísticas e ensino da Língua Portuguesa na instituição de ensino UNESP - Universidade Estadual Paulista</Text>
        
        <View style={styles.caixaavaliacao}>
          <Text style={styles.subtitulo}>Avaliações</Text>
          <View style={styles.avaliacao}>
            <View style={styles.avaliacaoinfo}>
              <Text style={styles.avaliador}>Gyuliana Fávaro</Text>
              <Text style={styles.avaliacaotext}>
                Gosto muito dos conteúdos da professora Valéria, muito bem explicados!
              </Text>
              <View style={styles.avaliacaoestrela}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesome key={index} name="star" size={24} color="#FFD700" />
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },
  caixa: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '100%',
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
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  info: {
    color: '#87B2BF',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 10,
  },
  caixaavaliacao: {
    width: '100%',
    marginTop: 20,
  },
  subtitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: '26%'
  },
  avaliacao: {
    flexDirection: 'row',
    alignItems: 'center',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  avaliacaoinfo: {
    flex: 1,
  },
  avaliador: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(59, 57, 57, 0.67)'
  },
  avaliacaotext: {
    fontSize: 14,
    color: '#555',
  },
  avaliacaoestrela: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

