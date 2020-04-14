import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textWelcome}>React Navigation V5</Text>

      <TextInput style={styles.input} placeholder="Digite seu email" />
      <TextInput style={styles.input} placeholder="Digite sua senha" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textLink}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#213140',
    padding: 15,
  },

  input: {
    borderWidth: 1,
    height: 46,
    width: 300,
    borderRadius: 4,
    fontSize: 20,
    borderColor: '#B4C4D9',
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 10,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 46,
    backgroundColor: '#BF8A7E',
    borderColor: '#B4C4D9',
    borderWidth: 1,
    borderRadius: 4,
  },

  textButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },

  textLink: {
    marginTop: 15,
    fontSize: 20,
    color: '#B4C4D9',
    fontWeight: 'bold',
  },

  textWelcome: {
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 30,
    color: '#B4C4D9',
    fontWeight: 'bold',
  },
});
