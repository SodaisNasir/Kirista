import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
  Dimensions,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback} from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Color} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';
import Header from '../../../components/Header';
import CustomNavigator from '../../../components/CustomNavigator';
import {useFocusEffect} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { useState } from 'react';
import { getRCCData } from '../../../redux/actions/UserAction';
import { useEffect } from 'react';
import Loader from '../../../components/Modals/Loader';
import DoubleText from '../../../components/Loader/DoubleText';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const RccgContinent = ({navigation}) => {
  const Theme = useSelector(state => state.mode)
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const language = useSelector(state => state.language);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const type = 'RCCG Continent 2';
  const systemFonts = [...defaultSystemFonts, 'Poppins-Medium'];


  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );

  useEffect(() => {
    getRCCData(setData,type,language,setLoader)
  },[show])



  const onSubmit = () => {
    setShow(!show)
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }

  let result =data?.length > 0 && data?.replace("<p>",`<p style='color: ${Theme === 'dark' ? Color.White : Color.Black};font-family: ${Font.Poppins500} ; font-size: ${w >= 768 && h >= 1024 ? '7px' : '12px'};'>`)
  const source = {
    html: result,
  };
  return (
    <>
     <SafeAreaView style={{ backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,}} />
    <View
      style={[
        {
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
          flex: 1,
        },
      ]}>
        <StatusBar backgroundColor={ Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}/>

      <Header text={'RCCG Continent 2'} />
     {/* { loader ? 
     <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
     <ActivityIndicator
          size="large"
          color={Theme === 'dark' ? Color.White : Color.Main}
          />   
          </View>
        : */}
         <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal:
            w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(22),
          }}>
          <View
            style={{
              alignItems: 'center',
              height: H * 0.1,
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(30),
              marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(5),
            }}>
            {Theme === 'dark' ? (
              <Image
                resizeMode="cover"
                source={require('../../../assets/images/continent2_dark.png')}
                style={{height: '100%', width: '100%'}}
              />
            ) : (
              <Image
                resizeMode="cover"
                source={require('../../../assets/images/continent2_logo.png')}
                style={{height: '100%', width: '100%'}}
              />
            )}
          </View>

          {
                loader ?
                <View style={{flex:1,justifyContent: 'center',}}>
                <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(300) : verticalScale(250)} />
                </View>

               : 
          <RenderHtml contentWidth={w} source={source} systemFonts={systemFonts} />
               }

          <View
            style={{
              borderColor: Theme === 'dark' ? Color.DarkBorderColor : Color.BorderColor,
              borderWidth: 1,
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          />
           {
                loader ?
                <View style={{flex:1,justifyContent: 'center',}}>
                <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(25)} />
                </View>
               : 
          <View
            style={{
              alignItems: 'center',
              marginVertical: verticalScale(15),
              paddingVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(20),
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                fontFamily: Font.Poppins500,
                color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
              }}>
              Pastor E.A. Adeboye
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                fontFamily: Font.Poppins700,
                color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
              }}>
              General Overseer, RCCG World Wide
            </Text>
          </View>
           }
{/* 
          <View
            style={{
              borderColor: Theme === 'dark' ? Color.DarkBorderColor : Color.BorderColor,
              borderWidth: 1,
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          /> */}
          {/* <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(25),
            }}>
            <CustomButton restyle={{width: '95%'}} text={'Read More'} />
          </View> */}
        </View>
        <View
          style={{
            height: verticalScale(60),
          }}
        />
      </ScrollView>
      {/* } */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: Color.White,
        }}>
        <CustomNavigator 
          onPressLeft={() => navigation.navigate('RccgStructure')}
          onPressFresh={() => onSubmit()}
          onPressRight={() => navigation.navigate('Rccg')}
        />
      </View>
    </View>
    </>
  );
};

export default RccgContinent;

const styles = StyleSheet.create({});
