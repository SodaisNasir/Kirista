import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import AuthHeader from '../../components/AuthHeader';

const CELL_COUNT = 4;
const OTP = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [time, setTime] = useState(600);
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const timeString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <SafeAreaView style={styles.Container}>
      <AuthHeader text={'Email Verification'} />

      <View
        style={{
          justifyContent: 'center',
          marginVertical: scale(10),
        }}>
        <Text style={styles.LongText}>
          We have sent a one-time password to{' '}
          <Text
            style={{
              fontFamily: Color.Poppins700,
              fontSize: scale(12),
              color: Color.BoldTextColor,
            }}>
            maryjames@rccg.com
          </Text>
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: scale(5),
        }}>
        <Text style={styles.OtpText}>OTP</Text>
        <View>
          {time == 0 ? (
            <TouchableOpacity
              style={{
                // padding: 7,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: scale(10),
              }}
              onPress={() => setTime(600)}>
              <Text
                style={{
                  color: Color.Black,
                  fontSize: scale(15),
                  fontFamily: Font.Poppins700,
                }}>
                Resend
              </Text>
            </TouchableOpacity>
          ) : (
            <Text
              style={{
                color: Color.Black,
                fontSize: scale(16),
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
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={{marginVertical: scale(5)}}>
        <CustomButton text={'Continue'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
    // paddingTop: moderateScale(50),
    paddingHorizontal: moderateScale(20),
  },

  NavigatorStyle: {
    height: verticalScale(64),
    // backgroundColor: 'red',
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
    color: Color.TextColor,
    fontFamily: Font.Poppins400,
    fontSize: scale(12),
    marginBottom: scale(5),
  },
  OtpText: {
    color: Color.TextColor,
    fontFamily: Font.Poppins400,
    fontSize: scale(14),
  },

  codeFieldRoot: {
    paddingHorizontal: moderateScale(32),
    marginVertical: scale(10),
  },
  cell: {
    // paddingHorizontal: scale(30),
    width: scale(50),
    height: verticalScale(40),
    fontSize: scale(24),
    // borderWidth: 2,
    borderRadius: scale(16),
    // borderColor: Color.Main,
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
});

export default OTP;