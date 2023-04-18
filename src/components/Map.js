import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, PermissionsAndroid} from 'react-native'
import {Marker} from 'react-native-maps'
import MapView, {PROVIDER_GOOGLE, Callout} from 'react-native-maps'



export default function Map() {
  const [Pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  })

  return (
    <View style={styles.MainContainer}>
      <MapView
        showsUserLocation={false}
        zoomEnabled={true}
        // zoomControlEnabled={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={Pin}
          draggable={true}
          pinColor="red"
          onDragStart={(e) => {
            console.log('helo map', e.nativeEvent.coordinate)
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            })
            console.log('helo map')
          }} />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mapStyle: {
    height: '100%',
    width: '100%',
    zIndex: -17,
  },
})