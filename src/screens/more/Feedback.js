import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomHeader from '../../components/CustomHeader';
import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import AttachButton from '../../components/AttachButton';
import {launchImageLibrary} from 'react-native-image-picker';

const Feedback = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);

  const [saveimage, setsaveimage] = useState();
  const [show, setShow] = useState(true);
  const photosave = () => {
    let options = {
      storageOptions: {
        mediaType: 'photo',
        path: 'image',
        includeExtra: true,
      },
      selectionLimit: 1,
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('ez pz');
      } else if (res.error) {
        console.log('ez pz win');
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        setsaveimage(res.assets?.[0]?.uri);
        setShow(false);
      }
    });
  };
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          flex: 1,
        },
      ]}>
      <StatusBar
        backgroundColor={Theme ? Color.ExtraViewDark : Color.HeaderColor}
        barStyle={Theme ? 'light-content' : 'dark-content'}
      />
      <CustomHeader text={'Feedback'} />
      <View
        style={{
          paddingHorizontal:
            w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
        }}>
        <View style={{height: '60%', width: '100%'}}>
          <View
            style={{
              flex: 1,
              width: '100%',
              paddingTop: moderateVerticalScale(10),
              paddingLeft: moderateScale(10),
              paddingRight: moderateScale(30),
            }}>
            <TextInput
              multiline={true}
              placeholder={`Briefly explain what isn't working or what happened`}
              placeholderTextColor={Theme ? '#404F64' : '#C6CAD1'}
              style={[
                {
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                  fontFamily: Font.Poppins400,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                  color: Theme ? Color.DarkThemeInputText : Color.TextColor,
                  // flex: 1,
                  // textAlignVertical: 'top',
                },
              ]}
            />
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View
            style={{
              height: '40%',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                photosave();
              }}
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(10),
              }}>
              <AttachButton text={'Upload'} />
            </TouchableOpacity>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(35),
              }}>
              <CustomButton onPress={() => navigation.goBack()} text={'Send'} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({});
