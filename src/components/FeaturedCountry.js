import React, {useCallback, useEffect,useState} from 'react';
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
import { useFocusEffect } from '@react-navigation/native'
import { getfeaturedcountry } from '../redux/actions/UserAction'
import { useSelector } from 'react-redux';
import { Font } from '../utils/font';
import { Color } from '../utils/Colors';
import Header from './Header';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const FeaturedCountry = ({navigation,route}) => {
    const {setCountry} = route.params;
    const [data,setData] = useState([])
    const Theme = useSelector(state => state.mode)
    const applanguage = useSelector(state => state.applanguage)


    const handlePhoneSelect = (country) => {  
        setCountry(country)
        navigation.goBack();
    }

    useFocusEffect(
        useCallback(() => {
            getfeaturedcountry(setData)
        },[])
    )


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
              {/* <FlatList
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
    
                   
                  </View>
                )}
                keyExtractor={item => item.continent}
              /> */}
               <FlatList
                      style={{
                        borderBottomColor: Theme === 'dark'
                          ? Color.DarkBorderColor
                          : Color.BorderColor,
                        borderBottomWidth: 1,
                      }}
                      data={data}
                      renderItem={({item}) => (
                        <TouchableOpacity 
                          onPress={() => handlePhoneSelect(item)}>
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
                                {item.country_name}
                              </Text>
                            </View>
    
                            <View
                              style={{
                                flexDirection: 'row',
                                marginVertical: verticalScale(5),
                                width: '30%',
                                justifyContent: 'flex-end'
                              }}>
                              <View
                                style={{
                                //   width:
                                //     w >= 768 && h >= 1024 ? scale(20) : scale(30),
                                //   height:
                                //     w >= 768 && h >= 1024
                                //       ? verticalScale(15)
                                //       : verticalScale(20),
                                flex: 1,
                                  marginHorizontal:
                                    w >= 768 && h >= 1024 ? scale(5) : scale(10),
                                    
                                }}>
                                <Text style={{ fontSize: 20 }}>{item.flag_code}</Text>
                              </View>
    
                              <View>
                                <Text
                                  style={[
                                    {
                                      color: Theme === 'dark'
                                        ? Color.White
                                        : Color.DarkTextColor,
                                    },
    
                                    styles.CodeStyle,
                                  ]}>
                                  {item.country_code}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
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
export default FeaturedCountry
