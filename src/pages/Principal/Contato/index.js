import React from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nossos Contatos!</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL(`tel:${'55 999887744'}`)}
        style={styles.touchableOpacity}>
        <Icon name="phone" size={35} color={'#2f55a4'} />
        <Text style={styles.textPhone}>Telefone</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            `whatsapp://send?text=${'Hello World'}&phone=${'55 999887744'}`,
          )
        }
        style={styles.touchableOpacity}>
        <Icon name="whatsapp" size={35} color={'#25d366'} />
        <Text style={styles.textWhas}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          Linking.openURL('mailto:support@example.com?subject=Hello&body=World')
        }
        style={styles.touchableOpacity}>
        <Icon name="email" size={35} color={'#fbb034'} />
        <Text style={styles.textEmail}>Email</Text>
      </TouchableOpacity>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 30,
  },

  textPhone: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f55a4',
    marginLeft: 10,
  },

  textWhas: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#25d366',
    marginLeft: 10,
  },

  textEmail: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fbb034',
    marginLeft: 10,
  },

  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
});
