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
import TickModal from '../../components/Modals/TickModal';
import Loader from '../../components/Modals/Loader';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const NewPassword = ({navigation,route}) => {
  const {data, id} = route.params;
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)

  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 600 && height <= 350;
  const tabPotrait = width >= 768 && height >= 1024;
  const {
    control,
    handleSubmit,
    watch,
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
  const [check, setCheck] = useState(false)
  const confirmPasswordRef = useRef()
  const [isVisible, setVisible] = useState(true);
  const [isVisible2, setVisible2] = useState(true);
  const [loader, setLoader] = useState(false);


  const onSubmit = (data) => {
    if(data.password == data.confirm_password){
      change_password(data,id,navigation,setCheck,setLoader)
      // setCheck(true)
    }else{
      console.log('incorrect')
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
        <AuthHeader text={applanguage.NewPassword} />

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
            {/* Kindly fill your new password and confirm it. */}
            {applanguage.KindlyFill}
          </Text>
        </View>

         <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                password={true}
                text={applanguage.Password}
                placeholder={applanguage.Password}
                control={control}
                name="password"
                rules={{
                  required: applanguage.RequiredPassword,
                  minLength: {
                    value: 8,
                    message: applanguage.PasswordMax,
                  },
                  maxLength: {
                    value: 16,
                    message: applanguage.PasswordMin,
                  },
                }}
                keyboardType="default"
                maxLength={20}
                onSubmitEditing={() => confirmPasswordRef.current.focus()}
                secureTextEntry={isVisible}
                PIname={isVisible ? 'eye-off-outline' : 'eye-outline'}
                onShowPass={() => setVisible(!isVisible)}
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
                text={applanguage.ConfirmPassword}
                placeholder={applanguage.ConfirmPassword}
                control={control}
                name="confirm_password"
                rules={{
                  required: applanguage.RequiredConfirmPassword,
                  minLength: {
                    value: 8,
                    message: applanguage.ConfirmPasswordMax,
                  },
                  maxLength: {
                    value: 16,
                    message: applanguage.ConfirmPasswordMin,
                  },
                  validate: {
                    positive: (value) =>
                      value === watch('password') || applanguage.PasswordMatch,
                  },
                }}
                keyboardType="default"
                maxLength={20}
                ref={(e) => (confirmPasswordRef.current = e)}
                secureTextEntry={isVisible2}
                PIname={isVisible2 ? 'eye-off-outline' : 'eye-outline'}
                onShowPass={() => setVisible2(!isVisible2)}
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
            

        <View
          style={{
            paddingTop:
              w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
            marginBottom: verticalScale(10),
          }}>
          <CustomButton
            // onPress={() => navigation.navigate('Login')}
            onPress={handleSubmit(onSubmit)}
            text={applanguage.Finish}
          />
        </View>
        </View>
      </ScrollView>
      <TickModal
          text={applanguage.CompletePass}
          onPress={() => setCheck(false)}
          onBackdropPress={() => setCheck(false)}
          isVisible={check}
        />
        <Loader
   onBackdropPress={() => setLoader(false)}
   isVisible={loader}
/> 
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
