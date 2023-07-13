import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  useColorScheme,
  Dimensions,
  StatusBar,
  useWindowDimensions
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import {useFocusEffect} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import Header from '../components/Header';
import { getPerishCountry } from '../redux/actions/UserAction';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Country = ({navigation,route}) => {
    const Theme = useSelector(state => state.mode)
    const applanguage = useSelector(state => state.applanguage)

    const [data,setData] = useState([])
    useFocusEffect(
      useCallback(() => {
        navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
        getPerishCountry(setData)
      }, []),
    );
    const {setPhoneNumber,setFlagImage,type,newType,setCountry} = route.params;
    const handlePhoneSelect = (country) => {  
    
        setCountry(country)
navigation.goBack();
    }


  return (
    <>
    <SafeAreaView style={{backgroundColor:Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}}/>
    <StatusBar backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}/>
    <View
      style={[
        styles.Container,

        {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
      ]}>
      <View
        style={styles.backBox}>
        <Header text={applanguage.SelectCountry} DontGoBack={true} onPress={() => navigation.navigate('ParishFinder')}/>
      </View>
        <View
          style={[
            {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
            styles.MainBox,
          ]}>
          <FlatList
            scrollEnabled={true}
            data={data}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: moderateVerticalScale(100)}}
            renderItem={({item}) => (
              <View
                style={[
                  {
                    marginTop: verticalScale(5),
                    borderBottomColor: Theme === 'dark'
                      ? Color.DarkBorderColor
                      : Color.BorderColor,
                  },
                ]}>
                <View
                  style={{
                    marginTop: verticalScale(10),
                    borderBottomColor: Theme === 'dark'
                      ? Color.DarkBorderColor
                      : Color.BorderColor,
                    borderBottomWidth: 1,
                    height:
                      w >= 768 && h >= 1024
                        ? verticalScale(25)
                        : verticalScale(40),
                  }}>
                  <Text
                    style={[
                      styles.title,

                      {
                        color: Theme === 'dark'
                          ? Color.DarkThemText2
                          : Color.DarkTextColor,
                      },
                    ]}>
                    {item.continent}
                  </Text>
                </View>

                <FlatList
                  style={{
                    borderBottomColor: Theme === 'dark'
                      ? Color.DarkBorderColor
                      : Color.BorderColor,
                    borderBottomWidth: 1,
                  }}
                  data={item.countries}
                  renderItem={({item}) => (
                    <TouchableOpacity 
                      onPress={() => handlePhoneSelect(item.country)}>
                      <View
                        style={{
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                        }}>
                        <View style={{marginVertical: verticalScale(5)}}>
                          <Text
                            style={[
                              {color: Theme === 'dark' ? Color.White : Color.Black},

                              styles.CountryStyle,
                            ]}>
                            {item.country}
                          </Text>
                        </View>

                      
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
    },
    MainBox: {
      flex:1,
      paddingHorizontal: moderateScale(20),
    },
    title: {
      fontFamily: Font.Poppins300,
      fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(14),
      // color: Color.DarkTextColor,
      // backgroundColor:'red'
    },
    CountryStyle: {
      fontFamily: Font.Poppins500,
      // color: Color.DarkTextColor,
      fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    },
    CodeStyle: {
      fontFamily: Font.Poppins400,
      fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    },
    ImageUri: {
      height: '100%',
      width: '100%',
    },
  });
export default Country
