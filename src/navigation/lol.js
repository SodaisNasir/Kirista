import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function lol({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        // onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.itemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        // onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.itemText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        // onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.itemText}>Settings</Text>
      </TouchableOpacity>
      {/* Add more items here as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default lol;
