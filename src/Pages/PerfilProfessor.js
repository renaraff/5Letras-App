import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        
        <Text style={styles.title}>Perfil</Text>
        <Text style={styles.description}>
          Meu nome é Valeria Batista da Motta, tenho 52 anos, costumo utilizar exemplos práticos do cotidiano para
          explicar os conceitos de gramática e interpretação textual.
        </Text>
        <Text style={styles.link}>
          Trabalha na empresa Professora da Rede SESI
        </Text>
        <Text style={styles.link}>
          Estudou Teorias Linguísticas e ensino da Língua Portuguesa na instituição de ensino UNESP - Universidade Estadual Paulista
        </Text>
        
        <View style={styles.ratingSection}>
          <Text style={styles.subtitle}>Avaliações</Text>
          <View style={styles.review}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }} // Substitua pelo URL da imagem do perfil da aluna
              style={styles.reviewerImage}
            />
            <View style={styles.reviewContent}>
              <Text style={styles.reviewerName}>Gyuliana Fávaro</Text>
              <Text style={styles.reviewText}>
                Gosto muito dos conteúdos da professora Valéria, muito bem explicados!
              </Text>
              <View style={styles.rating}>
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
    backgroundColor: '#f0f4fa',
    padding: 20,
  },
  profileCard: {
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 10,
  },
  ratingSection: {
    width: '100%',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 121
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 14,
    color: '#555',
  },
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default ProfileScreen;
