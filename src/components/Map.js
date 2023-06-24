import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, PermissionsAndroid, ActivityIndicator} from 'react-native'

import {Marker} from 'react-native-maps'
import MapView, {PROVIDER_GOOGLE, Callout} from 'react-native-maps'
import { Color } from '../utils/Colors'



export default function Map({data}) {




  const [Pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  })

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera')
      } else {
        console.log('Camera permission denied')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <View style={styles.MainContainer}>
     {data? 
     <MapView
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        initialRegion={{
          latitude: parseFloat(data.latitude),
          longitude:parseFloat(data.longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: parseFloat(data.latitude),
          longitude:parseFloat(data.longitude),
          }}
          draggable={true}
          pinColor="red"
          />
      </MapView>
       :
        <ActivityIndicator
                size="large"
                color={Color.Main}
              />
              }
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
