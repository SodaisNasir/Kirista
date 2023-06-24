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
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Color} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import Header from '../../../components/Header';
import CustomNavigator from '../../../components/CustomNavigator';
import {useFocusEffect} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getRCCData } from '../../../redux/actions/UserAction';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import { useEffect } from 'react';


const Rccg = ({navigation}) => {
  const Theme = useSelector(state => state.mode)
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const language = useSelector(state => state.language);
  const [data, setData] = useState([]);
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
    getRCCData(setData,type,language,setLoader)
  },[show])


  const onSubmit = () => {
    setShow(!show)
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000);
  }

  let result = data?.length > 0 && data?.replace("<p>",`<p style='color: ${Theme === 'dark' ? Color.White : Color.Black}; font-family: ${Font.Poppins500} ; font-size: ${w >= 768 && h >= 1024 ? '7px' : '12px'};'>`)
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
          text={'RCCG'}
        />
       {loader ? 
     <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
     <ActivityIndicator
          size="large"
          color={Theme === 'dark' ? Color.White : Color.Main}
          />   
          </View>
        :   <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(22),
            }}>
            <View
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
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
                  fontFamily: Font.Poppins700,
                  color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                }}>
                The Redeemed Christian Church of God
              </Text>
            </View>

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
                <RenderHtml contentWidth={w} source={source}  systemFonts={systemFonts} />
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
        </ScrollView>}
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
