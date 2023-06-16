import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
  ScrollView,
  useWindowDimensions,
  Platform,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AuthHeader from '../../components/AuthHeader';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomInput from '../../components/CustomInput';
import Password from '../../components/Password';
import { useForm } from 'react-hook-form';
import { change_password } from '../../redux/actions/AuthAction';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const NewPassword = ({navigation,route}) => {
  const {data, id} = route.params;
  const Theme = useSelector(state => state.mode)



  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 600 && height <= 350;
  const tabPotrait = width >= 768 && height >= 1024;
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;

  const type = 'signup';
  const [phoneNumber, setPhoneNumber] = useState('+234');
  const [flagImage, setFlagImage] = useState(
    require('../../assets/images/nig.png'),
  );
  const handlePhoneNumberButtonPress = () => {
    navigation.navigate('SelectCountry', {
      setPhoneNumber: setPhoneNumber,
      setFlagImage: setFlagImage,
    });
  };

  // const onSubmit = (data) => {
  //   if (data.password == data.confirm_password) {
  //     // dispatch(verify_Email(data,navigation,type))
  //     navigation.navigate('OTP',{
  //       type: type,
  //       data: data
  //   })

  //   } else {
  //     alert('password is not same')
  //   }
  // };

  const device = Platform.OS;
  const [notMatched, setNotMatched] = useState(false);

  const onSubmit = (data) => {
    if(data.password == data.confirm_password){
      change_password(data,id,navigation)
      console.log('first',data)
    }else{
      console.log('vvvvvvvv')
    }
  }
  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignSelf:'center',width:'95%'}}>
        <AuthHeader text={'New Password'} />

        <View
          style={{
            justifyContent: 'center',
            marginVertical: scale(10),
          }}>
          <Text
            style={[
              {color: Theme === 'dark' ? Color.DarkThemText2 : Color.TextColor},
              styles.LongText,
            ]}>
            Kindly fill your new password and confirm it.
          </Text>
        </View>

        {/* <View
          style={{
            marginVertical:
              w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(20),
          }}>
          <Password
            restyleBox={{
              marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(30) : verticalScale(25),
            }}
            text={'New Password'}
          />

          <Password password = {true} text={'Confirm Password'} />
        </View> */}
         <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                password={true}
                text={'Password'}
                placeholder={'Password'}
                control={control}
                name="password"
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password too short (minimum length is 8)',
                  },
                  maxLength: {
                    value: 16,
                    message: 'Password too long (maximum length is 16)',
                  },
                }}
                keyboardType="default"
                maxLength={20}
              />
              {errors.password && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(12),
                    },
                    styles.error,
                  ]}>
                  {errors.password.message}
                </Text>
              )}
            </View>
            <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                password={true}
                text={'Confirm Password'}
                placeholder={'Confirm Password'}
                control={control}
                name="confirm_password"
                rules={{
                  required: 'Confirm Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password too short (minimum length is 8)',
                  },
                  maxLength: {
                    value: 16,
                    message: 'Password too long (maximum length is 16)',
                  },
                }}
                keyboardType="default"
                maxLength={20}
              />
              {errors.confirm_password && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(12),
                    },
                    styles.error,
                  ]}>
                  {errors.confirm_password.message}{' '}
                </Text>
              )}
            </View>
            {notMatched ? (
              <Text
                style={[
                  {
                    fontSize: tabPotrait
                      ? verticalScale(11)
                      : fourInchLandscape
                      ? scale(12)
                      : scale(14),
                  },
                  styles.error,
                ]}>
                {' '}
                Password is not matched
              </Text>
            ) : null}

        <View
          style={{
            paddingTop:
              w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
            marginBottom: verticalScale(10),
          }}>
          <CustomButton
            // onPress={() => navigation.navigate('Login')}
            onPress={handleSubmit(onSubmit)}
            text={'Finish'}
          />
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal:
      w >= 768 && h >= 1024 ? moderateScale(30) : moderateScale(20),
  },

  NavigatorStyle: {
    height: verticalScale(64),
    justifyContent: 'center',
    marginTop: scale(10),
  },
  WelcomeText: {
    fontSize: scale(28),
    fontFamily: Font.Poppins700,
    color: Color.Black,
    marginBottom: scale(5),
  },
  LongText: {
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(12),
    marginBottom: scale(5),
  },
  codeFieldRoot: {
    paddingHorizontal: moderateScale(32),
    marginVertical: scale(10),
  },
  cell: {
    width: scale(50),
    height: verticalScale(40),
    fontSize: scale(24),
    borderRadius: scale(16),
    backgroundColor: Color.OtpBoxColor,
    textAlign: 'center',
    color: Color.Black,
    fontFamily: Font.Poppins400,
    textAlignVertical: 'center',
    elevation: 1,
  },
  ImageBox: {
    marginTop: '30%',
    alignItems: 'center',
  },
  Image: {
    width: scale(220),
    height: scale(170),
    resizeMode: 'contain',
  },
  error: {
    color: 'red',
    alignSelf: 'flex-start',
    // marginLeft: scale(25),
    marginTop: 5,
    fontFamily: Font.Inter500,
    marginBottom: -20,
    paddingHorizontal: verticalScale(10),
  },
});
