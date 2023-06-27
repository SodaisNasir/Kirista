import { ActivityIndicator, StyleSheet,  View, useColorScheme } from 'react-native'
import React from 'react'
import { Color } from '../../utils/Colors'
import { useSelector } from 'react-redux'

const Loading = () => {
  const Theme = useSelector(state => state.mode)
  return (
   <>
     <View
      style={{
        // marginTop: space ? '70%' : 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        flex:1
      }}>
      <ActivityIndicator
        size="large"
        color={Theme === 'dark' ? Color.White : Color.DarkTheme}
      />
    </View>
   </>
  )
}

export default Loading

const styles = StyleSheet.create({})