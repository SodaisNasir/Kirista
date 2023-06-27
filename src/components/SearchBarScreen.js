import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const SearchBarScreen = () => {
  const Theme = useSelector(state => state.mode)
  return (
    <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <View
      style={[
        styles.searchContainer,
        {backgroundColor: Theme === 'dark' ? '#2B3642' : '#f0f0f0'},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
        }}>
        <MaterialIcons
          name="search"
          size={24}
          color={Theme === 'dark' ? '#4E545A' : '#387DE5'}
        />
        <TextInput
          style={[styles.searchInput, {color: Theme === 'dark' ? '#fff' : '#000'}]}
          placeholder="Search"
          placeholderTextColor={Theme === 'dark' ? '#555E68' : '#CDD1D7'}
          onSubmitEditing={() => console.log(searchInputValue)}
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
      {searchQuery.length > 0 && (
        <TouchableOpacity onPress={() => setSearchQuery('')}>
          <Ionicons
            name="close-circle"
            size={24}
            color={Theme === 'dark' ? '#B4B5B7' : 'black'}
          />
        </TouchableOpacity>
      )}
    </View>
    <TouchableOpacity onPress={slideOutSearchBar}>
      <View style={styles.closeButton}>
        <Text
          style={[
            styles.closeButtonText,
            {color: Theme === 'dark' ? '#B5BCC6' : 'black'},
          ]}>
          Cancle
        </Text>
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default SearchBarScreen

const styles = StyleSheet.create({ container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 20,
    paddingRight: 10,
    height: 45,
    width: '80%',
  },
  searchInput: {
    height: '100%',
    fontSize: 16,
    width: '85%',
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  X: {
    backgroundColor: '#B4B5B7',
    borderRadius: 100,
    aspectRatio: 1 / 1,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },})