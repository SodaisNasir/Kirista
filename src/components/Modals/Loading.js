import { ActivityIndicator, StyleSheet,  View, useColorScheme } from 'react-native'
import React from 'react'
import { Color } from '../../utils/Colors'

const Loading = () => {
    const Theme = useColorScheme() === 'dark';
  return (
   <>
     <View
      style={{
        // marginTop: space ? '70%' : 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme ? Color.DarkTheme : Color.White,
        flex:1
      }}>
      <ActivityIndicator
        size="large"
        color={Theme ? Color.White : Color.DarkTheme}
      />
    </View>
   </>
  )
}

export default Loading

const styles = StyleSheet.create({})