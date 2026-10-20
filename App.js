import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* View exclusiva para a Imagem */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('./BEMVI_01.png')}
          style={styles.logo} 
        />
      </View>

      {/* View exclusiva para o Texto */}
      <View style={styles.textContainer}>
        <Text style={styles.textoAcolhimento}>Plataforma de acolhimento,
          conexão e indicação para mães atípicas,
          criada para fortalecer redes de apoio, 
          fortalecer o acesso a profissionais e 
          promover inclusão no dia a dia.
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 600,
    width: '100%',
  },
  logo: {
    width: 280,  
    height: 280,  
    resizeMode: 'contain',
  },
  textoAcolhimento: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3E5C5B',
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 0.5,
  },
});
