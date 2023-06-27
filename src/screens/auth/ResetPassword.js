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
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import AuthHeader from '../../components/AuthHeader';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomInput from '../../components/CustomInput';
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { verify_Email_before_password } from '../../redux/actions/AuthAction';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ResetPassword = ({navigation}) => {
  const dispatch = useDispatch()
  const applanguage = useSelector(state => state.applanguage)
  const iosTab = w >= 820 && h >= 1180;
  const Theme = useSelector(state => state.mode)
  const [message,setMessage] = useState('')

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  const type = 'forgot'


  const handleNextButton = (data) => {
    dispatch(verify_Email_before_password(data,navigation,type,setMessage,applanguage))
   };
  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center', width: '90%'}}>
          <AuthHeader text={applanguage.ResetPassword} />

          <View
            style={{
              justifyContent: 'center',
              marginVertical: scale(20),
            }}>
            <Text
              style={[
                {color: Theme === 'dark' ? Color.DarkThemText2 : Color.TextColor},
                styles.LongText,
              ]}>
              {applanguage.ResetPasswordText}
            </Text>
            <Text   style={[
                {color: 'red'},
                styles.LongText,
              ]}>{message}</Text>
          </View>

          <View
            style={{
              marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(20),
            }}>
            <CustomInput
              control={control}
              name="email"
              rules={{
                required: applanguage.RequiredEmail,
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: applanguage.ValidEmail,
                },
              }}
              restyleBox={{
                marginBottom:
                  w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(20),
              }}
              text={applanguage.EmailAddress}
              placeholder={applanguage.EmailAddress}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={styles.error}>{errors.email.message} </Text>
            )}
          </View>

          <View
            style={{
              marginBottom: verticalScale(10),
             
            }}>
            <CustomButton
              onPress={handleSubmit(handleNextButton)}
              text={applanguage.Next}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
    fontFamily: Font.Poppins500,
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
    color: `red`,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(12),
    alignSelf: 'flex-start',
    // marginLeft: scale(15),
    // marginTop: 5,
    marginTop: -10,
    // backgroundColor:'red',
    
    fontFamily: 'Poppins-SemiBold',
  },
});

export default ResetPassword;
