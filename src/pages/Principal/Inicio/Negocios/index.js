import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Negocios({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Negocios</Text>
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
