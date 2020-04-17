import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

export default function Inicio({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Financas')}
        style={styles.dash}>
        <Icon name="account-balance" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Negocios')}
        style={styles.dash}>
        <Icon name="add-to-photos" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('MeuDinheiro')}
        style={styles.dash}>
        <Icon name="attach-money" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Clientes')}
        style={styles.dash}>
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
});
