import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Fornecedores({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fornecedores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    // textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
