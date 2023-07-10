import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
  Platform,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import AuthHeader from '../../components/AuthHeader';
import {useDispatch, useSelector} from 'react-redux';
import {OTPMethod, register, sign_in, verify_Email_before_password} from '../../redux/actions/AuthAction';
import IncorrectModal from '../../components/Modals/IncorrectModal';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CELL_COUNT = 4;
const OTP = ({navigation, route}) => {
  const {type, data, id,device} = route.params;
  const dispatch = useDispatch();
  const otp = useSelector((state) => state.otp)
  const applanguage = useSelector(state => state.applanguage)


  const Theme = useSelector(state => state.mode)
  const [value, setValue] = useState();
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [check, setCheck] = useState(false)
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [time, setTime] = useState(5);
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const timeString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const handleOtp = () => {
    if (otp == value) {
      navigation.navigate('NewPassword', {
        data: data,
        id: id
      });
    } else {
      // alert('Incorrect OTP!!');
      setCheck(true)
    }
  };

  const resendOtp = () => {
      dispatch(verify_Email_before_password(data,navigation, 'resend' ,setTime))
 }

  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: 'center', width: '95%'}}>
          <AuthHeader text={applanguage.EmailVerification} />

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
              {applanguage.OtpText}{' '}
              <Text
                style={{
                  fontFamily: Font.Poppins700,
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(12),
                  color: Theme === 'dark' ? Color.DarkThemText2 : Color.TextColor,
                }}>
                {/* maryjames@rccg.com */}
                {data?.email}
              </Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(10),
            }}>
            <Text
              style={[
                {color: Theme === 'dark' ? Color.DarkThemText2 : Color.TextColor},
                styles.OtpText,
              ]}>
              {applanguage.OTP}
            </Text>

            <View>
              {time == 0 ? (
                <TouchableOpacity
                  style={{
                    // padding: 7,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: scale(10),
                  }}
                  onPress={resendOtp}>
                  <Text
                    style={{
                      color: Theme === 'dark' ? Color.White : Color.Black,
                      fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                      fontFamily: Font.Poppins700,
                    }}>
                     {applanguage.Resend}
                  </Text>
                </TouchableOpacity>
              ) : (
                <Text
                  style={{
                    color: Theme === 'dark' ? Color.White : Color.Black,
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                    alignSelf: 'center',
                    fontFamily: Font.Poppins700,
                  }}>
                  {timeString}
                </Text>
              )}
            </View>
          </View>
          <CodeField
            ref={ref}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={[
              styles.codeFieldRoot,
              {
                color: Theme === 'dark' ? Color.White : Color.Black,
                borderRadius: scale(16),
              },
            ]}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                style={{
                  backgroundColor: Theme === 'dark'
                    ? Color.DarkThemeInputBox
                    : Color.OtpBoxColor,
                  borderRadius: scale(16),
                }}>
                <Text
                  key={index}
                  style={[
                    {color: Theme === 'dark' ? Color.White : Color.Black},
                    styles.cell,
                    isFocused && styles.focusCell,
                    Platform.OS == 'ios'
                      ? {lineHeight: verticalScale(30)}
                      : {textAlignVertical: 'center'},
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(25),
            }}>
            <CustomButton onPress={() => handleOtp()} text={applanguage.Continue} />
          </View>
        </View>
      </ScrollView>
      <IncorrectModal
          text={applanguage.IncorctOtp}
          onPress={() => setCheck(false)}
          onBackdropPress={() => setCheck(false)}
          isVisible={check}
        />
    </SafeAreaView>
  );
};

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
  OtpText: {
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
  },

  codeFieldRoot: {
    paddingHorizontal: moderateScale(32),
    marginVertical: scale(10),
    borderRadius: scale(16),
  },
  cell: {
    paddingTop: moderateVerticalScale(5),
    width: w >= 768 && h >= 1024 ? scale(50) : scale(50),
    height: w >= 768 && h >= 1024 ? verticalScale(45) : verticalScale(40),
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(18),
    textAlign: 'center',
    // textAlignVertical: 'center',
    fontFamily: Font.Poppins400,
    elevation: 1,

    // borderRadius:scale(16),
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
});

export default OTP;
