import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {Color} from '../../utils/Colors';
import {Font} from '../../assets/fonts/PoppinsFont';
import {scale} from 'react-native-size-matters';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const LightSplash = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';

  setTimeout(() => {
    navigation.navigate('OverBoard');
  }, 3000);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme ? Color.DarkTheme : Color.White,
      }}>
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
            backgroundColor: Theme ? Color.DarkTheme : Color.White,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: w >= 768 && h >= 1024 ? '25%' : '40%',
              width: '70%',
            }}>
            {Theme ? (
              <Image
                resizeMode="center"
                style={{
                  height: '100%',
                  width: '100%',
                }}
                source={require('../../assets/images/krista_about_dark.png')}
              />
            ) : (
              <Image
                resizeMode="center"
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
            backgroundColor: Theme ? Color.DarkTheme : Color.White,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '20%',
              width: '85%',
            }}>
            <Text
              style={{
                fontFamily: Font.Poppins500,
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
                color: Theme ? Color.White : Color.Black,
                position: 'absolute',
                left: w >= 768 && h >= 1024 ? scale(130) : scale(115),
                textAlign: 'center',
                // top: w >= 768 && h >= 1024 ? scale(0) : scale(3),
              }}>
              Powered by
            </Text>
            {Theme ? (
              <Image
                resizeMode="cover"
                style={{
                  height: '70%',
                  width: w >= 768 && h >= 1024 ? '70%' : '80%',
                }}
                source={require('../../assets/images/continent2_logo_dark.png')}
              />
            ) : (
              <Image
                resizeMode="cover"
                style={{
                  height: '70%',
                  width: w >= 768 && h >= 1024 ? '70%' : '80%',
                  alignSelf: 'center',
                }}
                source={require('../../assets/images/continent2_logo.png')}
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
