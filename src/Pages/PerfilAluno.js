import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Perfil</Text>
        
        <Text style={styles.sectionTitle}>Informações pessoais</Text>
        <Text style={styles.infoText}>Nome: Gyuliana da Silva Fávaro</Text>
        <Text style={styles.infoText}>E-mail: favorogyuliana@gmail.com</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>EDITAR PERFIL</Text>
        </TouchableOpacity>

        <Text style={styles.subTitle}>Favoritos</Text>
        
        <View style={styles.favoriteItem}>
          <Image
            source={{ uri: 'https://example.com/path/to/image1.jpg' }}
            style={styles.avatar}
          />
          <Text style={styles.favoriteText}>Valéria Motta</Text>
        </View>

        <View style={styles.favoriteItem}>
          <Text style={styles.favoriteText}>Adriana Paderes</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  infoText: {
    fontSize: 14,
    color: '#4EBCB4',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#A653EB',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  favoriteText: {
    fontSize: 14,
    color: '#333333',
  },
});