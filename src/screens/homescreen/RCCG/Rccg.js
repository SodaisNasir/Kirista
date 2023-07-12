import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  StatusBar,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {verticalScale, scale, moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Color} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import Header from '../../../components/Header';
import CustomNavigator from '../../../components/CustomNavigator';
import {useFocusEffect} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getRCCData } from '../../../redux/actions/UserAction';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { useEffect } from 'react';
import DoubleText from '../../../components/Loader/DoubleText';


const Rccg = ({navigation}) => {
  const Theme = useSelector(state => state.mode)
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const language = useSelector(state => state.language);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const type = 'RCCG';
  const systemFonts = [...defaultSystemFonts, 'Poppins-Medium'];
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  useEffect(() => {
    getRCCData(setData,type,language,setLoader,setTitle)
  },[show])


  const onSubmit = () => {
    setShow(!show)
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }
  
  const result = data?.length > 0 && data?.replace(/class=.?"ql-align-center.?"/g, 'style="text-align: center;"').replace(/<div class=['|"]about_text['|"]>/, `<div style='color: ${Theme === 'dark' ? Color.White : Color.Black}; font-family: ${Font.Poppins500} ; font-size: ${w >= 768 && h >= 1024 ? '20px' : '12px'};'>`);
  
  const source = {
    html: result,
  };
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={[
          {
            backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            flex: 1,
          },
        ]}>
        <StatusBar backgroundColor={ Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}/>

        <Header
          text={title}
          AuthHeaderStyle={{
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(80)
                  : verticalScale(90)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(60)
                : verticalScale(40),
            justifyContent: 'center',
            paddingTop:
              Platform.OS == 'android'
                ? moderateVerticalScale(50)
                : w >= 768 && h >= 1024
                ? moderateVerticalScale(25)
                : moderateVerticalScale(25),
          }}
        />
       {/* {loader ? 
          <View style={{flex:1,justifyContent: 'center',}}>
          <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(250)} />
          </View>
        :   */}
         <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(22),
            }}>
            {/* <View
              style={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(80)
                    : verticalScale(100),
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(30),
                marginBottom:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(5),
              }}>
              <Image
                resizeMode="contain"
                source={require('../../../assets/images/rccg_logo.png')}
                style={{height: '100%', width: '100%'}}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              }}>
                {
                loader ?
                <View style={{flex:1,justifyContent: 'center',}}>
                <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(40) : verticalScale(30)} />
                </View>

               : 
              <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
                fontFamily: Font.Poppins700,
                color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
              }}>
                The Redeemed Christian Church of God
              </Text>
            }
            </View> */}

            {/* Laraib The Great */}

          

           

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              }}>
              

              <View
                style={{
                  borderColor: Theme === 'dark' ? Color.DarkBorderColor : '#E5E5E5',
                  borderWidth: 0.5,
                  width: w >= 768 && h >= 1024 ? '70%' : '100%',
                  alignSelf: 'center',
                }}
              />
              {
                loader ?
                <View style={{flex:1,justifyContent: 'center',}}>
                <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(250)} />
                </View>

               : <RenderHtml contentWidth={w} source={source}  systemFonts={systemFonts} />
              }

<View style={{height: verticalScale(20)}} />
{/* {
                loader ?
                <View style={{flex:1,justifyContent: 'center',}}>
                <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(60) : verticalScale(50)} />
                </View>

               : 
              <View
                style={{
                  alignItems: 'center',
                  marginVertical: verticalScale(15),
                  paddingVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(15)
                      : verticalScale(20),
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
              } */}

              <View
                style={{
                  borderColor: Theme === 'dark' ? Color.DarkBorderColor : '#E5E5E5',
                  borderWidth: 0.5,
                  width: w >= 768 && h >= 1024 ? '70%' : '100%',
                  alignSelf: 'center',
                }}
              />
             
            </View>
            
          </View>
          <View
            style={{
              height: verticalScale(55),
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
          onPressLeft={() => navigation.navigate('RccgContinent')}
          onPressFresh={() => onSubmit()}
          onPressRight={() => navigation.navigate('RccgStructure')}
          />
        </View>
      </View>
    </>
  );
};

export default Rccg;

const styles = StyleSheet.create({});
