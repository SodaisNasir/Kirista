import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextComponent,
  TouchableOpacity,
  
} from 'react-native';
import React from 'react';
import Kiristalogo from '../../constant/Kiristalogo';
import {Font} from '../../assets/fonts/PoppinsFont';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {Color} from '../../utils/Colors';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import PhoneInput from '../../components/PhoneInput';
import Countrycode from '../../components/Countrycode';
import Password from '../../components/Password';
const SignUp = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginTop: '8%',
        }}>
        <Kiristalogo />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: Font.Poppins700,
            fontSize: scale(25),
            color: 'black',
          }}>
          Create Account
        </Text>
      </View>

      <CustomInput text={'Full Name'} placeholder={'Full Name'} />
      <View>
        <PhoneInput />
      </View>

      <CustomInput text={'Email Address'} placeholder={'Email Address'} />
      <Password />
      <View
        style={{
          marginHorizontal: '5%',
          marginTop: '2%',
        }}>
        <CustomButton
          onPress={() => navigation.navigate('Login')}
          text={'Sign up'}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '7%',
        }}>
        <Text
          style={{
            fontFamily: Font.Poppins500,
            fontSize: scale(15),
            color: Color.TextColor,
          }}>
          If you have an account,
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{
              fontFamily: Font.Poppins700,
              fontSize: 16,
              color: Color.TextColor,
            }}>
            {' '}
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
