import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  useColorScheme,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Kiristalogo from '../../constant/Kiristalogo';
import {Font} from '../../assets/fonts/PoppinsFont';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../utils/Colors';
import Password from '../../components/Password';
import {useDispatch} from 'react-redux';
import {LOGIN} from '../../redux/reducer';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const Login = ({navigation}) => {
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;

  const iosTab = w >= 820 && h >= 1180;
  const tabPotrait = w >= 768 && h >= 1024;
  const standardLandscape = w >= 684 && h >= 360;
  const tabLandscape = w >= 768 && h >= 1024;
  const fourInchPotrait = w <= 350 && h <= 600;
  const fourInchLandscape = w <= 350 && h <= 600;
  const [email, setEmail] = useState(null);
  const Dispatch = useDispatch();
  const Theme = useColorScheme() === 'dark';
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme ? Color.DarkTheme : Color.White,
        paddingHorizontal:
          w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: '0%',
          }}>
          <Kiristalogo />
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: '0%',
            // backgroundColor:'red',
          
            
          }}>
          <Text
            style={{
              fontFamily: Font.Poppins700,
              fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(20),
              color: Theme ? Color.White : Color.Black,
            }}>
            Welcome Back,
          </Text>
          <Text
            style={{
              fontFamily: Font.Poppins700,
              fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(20),
              color: Theme ? Color.White : Color.Black,
              alignSelf: 'center',
              marginTop:Platform.OS == 'ios'? verticalScale(-5) : verticalScale(-10)
            }}>
            Brethren.
          </Text>
        </View>

        <View style={{marginVertical: verticalScale(20),}}>
          <CustomInput
            onChangeText={txt => {
              console.log('text ==>', email);
              setEmail(txt);
            }}
            restyleBox={{
              marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(20),
            }}
            text={'Email Address'}
            placeholder={'Email Address'}
            keyboardType={'email-address'}
          />

          <Password text={'Password'} />
        </View>

        <View
          style={{
            // marginHorizontal: '5%',
            marginVertical:
              w >= 768 && h >= 1024 ? verticalScale(22) : verticalScale(30),
          }}>
          <CustomButton
            onPress={() => navigation.navigate('BottomTabNavigator')}
            // onPress={() =>
            //   email != null
            //     ? Dispatch({type: LOGIN, payload: email})
            //     : alert('Complete the form')
            // }
            text={'Sign in'}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: Font.Poppins700,
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(15),
                color: Theme ? Color.White : Color.TextColor,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: Platform.OS == 'ios' ? iosTab? '49%' : '55%' : '42%',
              // alignSelf:'center'
              // backgroundColor:'red',
              // 
            }}>
            <Text
              style={{
                fontFamily: Font.Poppins400,
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
                color: Theme ? Color.White : Color.TextColor,
              }}>
              Don’t have an account?
              <Text
                onPress={() => navigation.navigate('SignUp')}
                style={{
                  fontFamily: Font.Poppins700,
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(13),
                  color: Theme ? Color.White : Color.TextColor,
                }}>
                {' '}
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;