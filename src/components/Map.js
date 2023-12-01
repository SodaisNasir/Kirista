import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, PermissionsAndroid, ActivityIndicator, Linking, Platform} from 'react-native'

import {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import MapView, {PROVIDER_DEFAULT, Callout} from 'react-native-maps'
import { Color } from '../utils/Colors'



export default function Map({data}) {



  const [Pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  })



  return (
    <View style={styles.MainContainer}>
     {/* {data != null ?  */}
     <MapView
     provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        initialRegion={{
          latitude: parseFloat(data?.latitude) ? parseFloat(data?.latitude) : 37.78825,
          longitude:parseFloat(data?.longitude) ? parseFloat(data?.longitude) : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

        <Marker
      onPress={()=> Platform.OS == "ios" ? Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${data?.latitude},${data?.longitude}&travelmode=driving`): null}
     
      coordinate={{
            latitude: parseFloat(data?.latitude) ? parseFloat(data?.latitude) : 37.78825,
            longitude:parseFloat(data?.longitude)? parseFloat(data?.longitude) : -122.4324,
          }}
          pinColor="red"
          />
      </MapView>
       {/* :
        <ActivityIndicator
                size="large"
                color={Color.Main}
              />
} */}
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
