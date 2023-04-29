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
import * as Animatable from 'react-native-animatable';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CELL_COUNT = 4;
const OTP = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  const zoomIn = {
    0: {
      opacity: 0,
      scale: 0,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  const [time, setTime] = useState(600);
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const timeString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AuthHeader text={'Email Verification'} />

        <Animatable.View
          iterationDelay={1000}
          duration={300}
          animation={fadeIn}
          style={{
            justifyContent: 'center',
            marginVertical: scale(10),
          }}>
          <Text
            style={[
              {color: Theme ? Color.DarkThemText2 : Color.TextColor},
              styles.LongText,
            ]}>
            We have sent a one-time password to{' '}
            <Text
              style={{
                fontFamily: Font.Poppins700,
                fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(12),
                color: Theme ? Color.DarkThemText2 : Color.TextColor,
              }}>
              maryjames@rccg.com
            </Text>
          </Text>
        </Animatable.View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical:
              w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(10),
          }}>
          <Animatable.Text
            iterationDelay={1300}
            duration={300}
            animation={fadeIn}
            style={[
              {color: Theme ? Color.DarkThemText2 : Color.TextColor},
              styles.OtpText,
            ]}>
            OTP
          </Animatable.Text>

          <Animatable.View
            iterationDelay={1500}
            duration={300}
            animation={fadeIn}>
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
                    color: Theme ? Color.White : Color.Black,
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                    fontFamily: Font.Poppins700,
                  }}>
                  Resend
                </Text>
              </TouchableOpacity>
            ) : (
              <Text
                style={{
                  color: Theme ? Color.White : Color.Black,
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                  alignSelf: 'center',
                  fontFamily: Font.Poppins700,
                }}>
                {timeString}
              </Text>
            )}
          </Animatable.View>
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
            <Animatable.Text
              iterationDelay={1800}
              duration={300}
              animation={fadeIn}
              key={index}
              style={[
                {
                  backgroundColor: Theme
                    ? Color.DarkThemeInputBox
                    : Color.OtpBoxColor,
                },
                {},
                styles.cell,
                isFocused && styles.focusCell,
              ]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Animatable.Text>
          )}
        />
        <Animatable.View
          iterationDelay={2000}
          duration={300}
          animation={zoomIn}
          style={{
            marginVertical:
              w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(25),
          }}>
          <CustomButton
            onPress={() => navigation.navigate('NewPassword')}
            text={'Continue'}
          />
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: Color.White,
    paddingHorizontal:
      w >= 768 && h >= 1024 ? moderateScale(30) : moderateScale(20),
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
    // color: Color.BoldTextColor,
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
  },
  cell: {
    // paddingHorizontal: scale(30),
    paddingTop: moderateVerticalScale(5),
    width: w >= 768 && h >= 1024 ? scale(45) : scale(50),
    height: w >= 768 && h >= 1024 ? verticalScale(28) : verticalScale(40),
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(18),
    borderRadius: scale(16),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Color.Black,
    fontFamily: Font.Poppins400,
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
