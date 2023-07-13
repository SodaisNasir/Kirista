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
import DoubleText from './Loader/DoubleText';

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
              {
                data?.length > 0
                ?
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
                     : 
                     <>
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(35)} />
                     <View style={{height: 0,marginVertical: verticalScale(5)}} />
                     </>
              }
              <View style={{height: verticalScale(10)}} />
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
export default FeaturedCountry
