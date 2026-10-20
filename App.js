import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('welcome');

  
  // TELA 1: APRESENTAÇÃO / BEM-VINDO

  if (telaAtual === 'welcome') {
    return (
      <View style={styles.containerWelcome}>
        
        {/* Logo original da marca */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('./BEMVI_01.png')}
            style={styles.logo} 
          />
        </View>

        {/* Texto descritivo centralizado */}
        <View style={styles.textContainerWelcome}>
          <Text style={styles.textoAcolhimento}>
            Plataforma de acolhimento, conexão e indicação para mães atípicas,
            criada para fortalecer redes de apoio, facilitar o acesso a profissionais e
            promover inclusão no dia a dia.
          </Text>
        </View>

        {/* Botão de seta preta para avançar para a Home */}
        <TouchableOpacity 
          style={styles.btnSeta}
          onPress={() => setTelaAtual('home')}
        >
          <Ionicons name="arrow-forward" size={24} color="#FFF" />
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }

  
  // TELA 2: HOME

  return (
    <View style={styles.containerHome}>
      
      {/* Cabeçalho */}
      <View style={styles.headerHome}>
        <Feather name="menu" size={26} color="#333" />
        <Text style={styles.logoTextHome}>Bemvi</Text>
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </View>

      <Text style={styles.subtitleHome}>Você não está sozinha.</Text>

      {/* Conteúdo com os Botões de Ação */}
      <ScrollView contentContainerStyle={styles.contentHome}>
        
        <TouchableOpacity style={[styles.mainButton, styles.btnBlue]}>
          <Text style={styles.buttonText}>PRECISO CONVERSAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.mainButton, styles.btnGreen]}>
          <Text style={styles.buttonText}>ENCONTRAR PROFISSIONAIS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.mainButton, styles.btnYellow]}>
          <Text style={styles.buttonText}>MAPA INCLUSIVO</Text>
        </TouchableOpacity>

        {/* Seção Acesso Rápido */}
        <View style={styles.quickAccessContainer}>
          <Text style={styles.quickAccessTitle}>ACESSO RÁPIDO</Text>
          <View style={styles.cardRow}>
            <View style={styles.card} />
            <View style={styles.card} />
            <View style={styles.card} />
          </View>
        </View>

      </ScrollView>

      {/* Barra de Navegação Inferior (Tab Bar) */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => setTelaAtual('home')}>
          <Ionicons name="home" size={22} color="#2E7D32" />
          <Text style={[styles.tabText, { color: '#2E7D32', fontWeight: 'bold' }]}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <MaterialIcons name="favorite" size={22} color="#666" />
          <Text style={styles.tabText}>Apoio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <MaterialIcons name="work" size={22} color="#666" />
          <Text style={styles.tabText}>Profissional</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="location" size={22} color="#666" />
          <Text style={styles.tabText}>Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="person" size={22} color="#666" />
          <Text style={styles.tabText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // --- Estilos da Tela 1 (Apresentação) ---
  containerWelcome: {
    flex: 1,
    backgroundColor: '#F5F5DC', 
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  imageContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 280,  
    height: 280,  
    resizeMode: 'contain',
  },
  textContainerWelcome: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 600,
    width: '100%',
  },
  textoAcolhimento: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3E5C5B',
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 0.5,
  },
  btnSeta: {
    backgroundColor: '#000',
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },

  // --- Estilos da Tela 2 (Home) ---
  containerHome: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  headerHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 5,
  },
  logoTextHome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitleHome: {
    textAlign: 'center',
    fontSize: 14,
    color: '#444',
    marginBottom: 25,
  },
  contentHome: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  btnBlue: {
    backgroundColor: '#7A9AAB',
  },
  btnGreen: {
    backgroundColor: '#5CD662',
  },
  btnYellow: {
    backgroundColor: '#F3C562',
  },
  buttonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  quickAccessContainer: {
    width: '100%',
    marginTop: 15,
  },
  quickAccessTitle: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
    fontWeight: '600',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '31%',
    height: 80,
    backgroundColor: '#DDD7CC',
    borderRadius: 12,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#EAE5DB',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#D8D2C6',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
});