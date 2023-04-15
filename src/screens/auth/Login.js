import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  useColorScheme,
} from 'react-native'
import React from 'react'
import Kiristalogo from '../../constant/Kiristalogo'
import {Font} from '../../assets/fonts/PoppinsFont'
import {scale, verticalScale} from 'react-native-size-matters'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Color} from '../../utils/Colors'
import Password from '../../components/Password'

const Login = ({navigation}) => {
  const w = useWindowDimensions().width
  const h = useWindowDimensions().height
  const tabPotrait = w >= 768 && h >= 1024
  const standardLandscape = w >= 684 && h >= 360
  const tabLandscape = w >= 768 && h >= 1024
  const fourInchPotrait = w <= 350 && h <= 600
  const fourInchLandscape = w <= 350 && h <= 600
  const Theme = useColorScheme() === 'dark'
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme ? Color.DarkTheme : Color.White,
        paddingHorizontal:
          w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
      }}>
      <View
        style={{
          marginTop: '10%',
        }}>
        <Kiristalogo />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10%',
        }}>
        <Text
          style={{
            fontFamily: Font.Poppins700,
            fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(22),
            color: Theme ? Color.White : Color.Black,
          }}>
          Welcome Back,
        </Text>
        <Text
          style={{
            fontFamily: Font.Poppins700,
            fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(22),
            color: Theme ? Color.White : Color.Black,
            alignSelf: 'center',
          }}>
          {' '}
          Brethren.
        </Text>
      </View>
      <View style={{marginVertical: verticalScale(15)}}>
        <CustomInput
          restyleBox={{
            marginBottom:
              w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(20),
          }}
          text={'Email Address'}
          placeholder={'Email Address'}
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
          onPress={() => navigation.navigate('Advertisement')}
          text={'Sign in'}
        />
      </View>

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
          marginTop: '32%',
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
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})
