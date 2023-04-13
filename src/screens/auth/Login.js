import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Kiristalogo from '../../constant/Kiristalogo';
import {Font} from '../../assets/fonts/PoppinsFont';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../utils/Colors';
import Password from '../../components/Password';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Login = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
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
            color: 'black',
          }}>
          Welcome Back,
        </Text>
        <Text
          style={{
            fontFamily: Font.Poppins700,
            fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(22),
            color: Color.Black,
            alignSelf: 'center',
          }}>
          {' '}
          Brethren.
        </Text>
      </View>
      <CustomInput
        restyleBox={{
          marginBottom:
            w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(25),
        }}
        text={'Email Address'}
        placeholder={'Email Address'}
      />
      <Password text={'Password'} />

      <View
        style={{
          // marginHorizontal: '5%',
          marginVertical:
            w >= 768 && h >= 1024 ? verticalScale(22) : verticalScale(30),
        }}>
        <CustomButton
        
        onPress={()=>navigation.navigate('Advertisement')}
        text={'Sign in'} />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ResetPassword')}
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: Font.Poppins700,
            fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
            color: Color.TextColor,
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '35%',
        }}>
        <Text
          style={{
            fontFamily: Font.Poppins500,
            fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
            color: Color.TextColor,
          }}>
          Don’t have an account?
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={{
              fontFamily: Font.Poppins700,
              fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
              color: Color.TextColor,
            }}>
            {' '}
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
