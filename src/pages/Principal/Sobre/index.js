import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.textTitle}>Lorem Ipsum</Text>

      <Text style={styles.textBody}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vitae
        euismod libero. Maecenas sit amet malesuada est, a accumsan nibh. Etiam
        tincidunt metus nisi, et aliquet massa euismod non. Praesent at
        efficitur enim. Cras at malesuada ligula, fermentum bibendum orci.
        Integer massa velit, tempor id fringilla vitae, posuere at dolor.
        Suspendisse ac luctus libero. Mauris id dui in nibh hendrerit maximus.
        Quisque pellentesque sollicitudin eros sed fermentum. Proin pharetra
        suscipit ex, et porttitor mauris iaculis molestie. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
        sed massa est. Sed sit amet condimentum urna. Donec in justo ante.
        Aenean quam neque, lacinia vitae ante porta, dictum rutrum ante.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Aenean et eros dui. Sed pellentesque porta dui
        at dignissim. Etiam tristique pretium est sed tempor. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Aenean feugiat porttitor ultricies. Sed fermentum ut magna vitae rutrum.
        Nunc at nibh dui.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    margin: 15,
  },

  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },

  textBody: {
    fontSize: 15,
    textAlign: 'justify',
  },
});
