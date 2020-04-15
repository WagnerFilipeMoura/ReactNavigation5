import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

export default function Inicio({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dash}>
        <Icon name="account-balance" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.dash}>
        <Icon name="add-to-photos" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.dash}>
        <Icon name="attach-money" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.dash}>
        <Icon name="business-center" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.dash}>
        <Icon name="create-new-folder" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.dash}>
        <Icon name="cached" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.dash}>
        <Icon name="insert-chart" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.dash}>
        <Icon name="build" size={70} color={'#FFF'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
  },

  dash: {
    width: 130,
    height: 110,
    backgroundColor: '#BF8A7E',
    borderRadius: 10,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
