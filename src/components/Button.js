import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Button({action}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.75}
      onPress={action}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});