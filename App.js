import React from 'react';
import { Text, Image, View, StyleSheet, Button, Snackbar, BottomNavigation } from 'react-native';
import Cadastro from './src/components/cadastro';
import Header from './src/components/header'


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastre-se gratuitamente no Buscar!</Text>

      <Image 
        source={require('./src/assets/avatar.jpg')} 
        style={styles.avatar}
      />

      <Cadastro />

      <Text style={{ color: '#006400' }}>Ja possui uma conta?</Text>
      <Text>Entre por aqui!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',       // centraliza horizontalmente
    justifyContent: 'flex-start', // começa do topo
    paddingTop: 5,             // espaço só no topo
    backgroundColor: '#fff'

  },
  titulo: {
    fontSize: 16,
    marginBottom: 20
  },
  avatar: {
    width: 100,
    height: 75,
    borderRadius: 15,
    marginBottom: 20
  }
});

export default App;
