import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
  useColorScheme,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {Color} from '../../utils/Colors';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const LightSplash = () => {
  const Theme = useSelector(state => state.mode)



  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
      }}>
      <StatusBar
        backgroundColor={Theme === 'dark' ? Color.DarkTheme : Color.White}
        barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
        }}
        style={{
          height: '100%',
          width: '100%',
        }}>
        <View
          style={{
            height: '40%',
            backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: w >= 768 && h >= 1024 ? '25%' : '40%',
              width: '70%',
            }}>
            {Theme === 'dark' ? (
              <Image
                resizeMode="contain"
                style={{
                  height: '100%',
                  width: '100%',
                }}
                source={require('../../assets/images/krista_about_dark.png')}
              />
            ) : (
              <Image
                resizeMode="contain"
                style={{
                  height: '100%',
                  width: '100%',
                }}
                source={require('../../assets/images/krista_about.png')}
              />
            )}
          </View>
        </View>
        <View
          style={{
            height: '54%',
            backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '22%',
              width: '85%',
            }}>
            {/* <Text
              style={{
                fontFamily: Font.Poppins500,
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
                color: Theme === 'dark' ? Color.White : Color.Black,
                position: 'absolute',
                left: w >= 768 && h >= 1024 ? scale(130) : scale(115),
                textAlign: 'center',
                // top: w >= 768 && h >= 1024 ? scale(0) : scale(3),
              }}>
              Powered by
            </Text> */}
            {Theme === 'dark' ? (
              <Image
                resizeMode={'contain'}
                style={{
                  height: '50%',
                  width: w >= 768 && h >= 1024 ? '70%' : '50%',
                  alignSelf: 'center',
                }}
                source={require('../../assets/images/dark_splash.png')}
              />
            ) : (
              <Image
                resizeMode={'contain'}
                style={{
                  height: '60%',
                  width: w >= 768 && h >= 1024 ? '70%' : '60%',
                  alignSelf: 'center',
                }}
                source={require('../../assets/images/white_splash.png')}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LightSplash;

const styles = StyleSheet.create({});
