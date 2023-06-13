import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  useColorScheme,
  Platform,
  Linking,
} from 'react-native';
import {Font} from '../../utils/font';
import {scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const SwiperCard = ({source, live, text_subText,lastText}) => {
  const iosTab = w >= 820 && h >= 1180;
  const fourInchPotrait = w <= 380 && h <= 630;
  const Theme = useColorScheme() === 'dark';
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          paddingVertical: verticalScale(10),
          height:
            w >= 768 && h >= 1024 ? verticalScale(110) : verticalScale(140),
          width: '90%',
          marginRight:
            w >= 768 && h >= 1024 ? verticalScale(8) : verticalScale(0),
          alignSelf: 'center',
          overflow: 'hidden',
          margin: 5,
          borderRadius: scale(20),
        }}>
        <View
          style={{
            width: '100%',
            height: verticalScale(500),
          }}>
          <Image
            resizeMode="contain"
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
            }}
            source={source}
          />
        </View>
        <View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '60%',
              }}>
              <View
                style={{
                //   height: '70%',
                //   width: '0%',
                  padding:20
                }}>
                <Text
                  style={{
                    fontFamily:Font.Poppins700,
                    color: Color.White,
                    textTransform: 'uppercase',
                    // fontSize: iosTab
                    //   ? scale(7)
                    //   : w >= 768 && h >= 1024
                    //   ? scale(7)
                    //   : w <= 350 && h <= 600
                    //   ? scale(12)
                    //   : w < 450 && h < 750
                    //   ? scale(10)
                    //   : scale(13),
                    fontSize:scale(20),
                    elevation: 5,
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10,
                  }}>
                  {text_subText}
                </Text>
                <Text
                  style={{
                    color: Color.White,
                    textTransform: 'uppercase',
                    // fontSize: iosTab
                    //   ? scale(7)
                    //   : w >= 768 && h >= 1024
                    //   ? scale(7)
                    //   : w <= 350 && h <= 600
                    //   ? scale(12)
                    //   : w < 450 && h < 750
                    //   ? scale(10)
                    //   : scale(13),
                    fontSize:scale(20),
                    fontFamily:Font.Poppins700,
                    elevation: 5,
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10,
                  }}>
                  
                   {live && 
                    <Text style={{backgroundColor:'#8F4E04',marginRight:20}}>{'live'}</Text>
                }
                  {lastText}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default SwiperCard;

const styles = StyleSheet.create({});
