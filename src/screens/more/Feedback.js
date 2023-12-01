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
  ScrollView,
  Keyboard,
  PermissionsAndroid,
  Alert,
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
import {base_Url} from '../../utils/Url';
import {useSelector} from 'react-redux';
import Loader from '../../components/Modals/Loader';
import Header from '../../components/Header';
import TickModal from '../../components/Modals/TickModal';
import Permissions from 'react-native-permissions';

const Feedback = ({navigation}) => {
  const user_details = useSelector(state => state.user_details);
  const applanguage = useSelector(state => state.applanguage);
  const Theme = useSelector(state => state.mode);
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [text, onChangeText] = useState('');
  const [saveimage, setsaveimage] = useState();
  const [show, setShow] = useState(true);
  const [loader, setLoader] = useState(false);
  const [internet, setInternet] = useState(false);
  const [msg, setMsg] = useState('');
  console.log('saveimage', saveimage);

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);


  const savePhoto = () =>{
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
        setsaveimage({
          name: res.assets?.[0]?.fileName,
          uri: res.assets?.[0]?.uri,
          type: res.assets?.[0]?.type,
        });
        setShow(false);
      }
    });
  }
  
  const permissions = async () => {
  try {
    if (Platform.OS=="android") {
      const status =  await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );

      console.log("STATUs ANDROID ======>",status,);
      if (status == PermissionsAndroid.RESULTS.GRANTED) {
        savePhoto();
      } else {
        const request = await PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        console.log("REQUEST ANDROID ===>",PermissionsAndroid.RESULTS.GRANTED);
        if (request == PermissionsAndroid.RESULTS.GRANTED) {
          savePhoto();
        }
      }
    } else {
      const status = await Permissions.check(
        Platform.select({
          ios: Permissions.PERMISSIONS.IOS.PHOTO_LIBRARY,
        }),
      );
      if (status == Permissions.RESULTS.GRANTED) {
        savePhoto();
      } else {
        const request = await Permissions.request(
          Platform.select({
            ios: Permissions.PERMISSIONS.IOS.PHOTO_LIBRARY,
          }),
        );
        if (request == PermissionsAndroid.RESULTS.GRANTED) {
          savePhoto();
        }
        else{
          alert(
            `Kirista would like to access your photos: Kirista uses photo library to let you select which photo to upload.(Go to Setting and allow Kirista to access your photos)`,
          );
          // Alert.alert("Photo Library Permission",`Kirista would like to access your photos: Kirista uses photo library to let you select which photo to upload.(Go to Setting and allow Kirista to access your photos)`)

        }
      }
    }
  } catch (error) {
    console.log("error in permission");
  }
  };

  const feedbackApi = async setLoader => {
    try {
      setLoader(true);
      let base_url = `${base_Url}feedback/${user_details.data.id}`;
      let myData = new FormData();

      myData.append('text', text);
      {
        saveimage && myData.append('image', saveimage);
      }
      const response = await fetch(base_url, {
        method: 'post',
        body: myData,
      });

      const responseData = await response.json();

      if (responseData?.success?.status === 200) {
        setMsg(applanguage.ThanksFB);
        setLoader(false);
        
        setTimeout(() => {
          setInternet(true);
        }, 1000);
      } else {
        console.log('first');
      }
    } catch (error) {
      setLoader(false);
      console.log('error', error);
    }
  };

  const onSumbit = () => {
    if (text != '') {
      feedbackApi(setLoader);
    } else {
      alert('Please fill the form');
    }
  };
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor:
            Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={[
          {
            backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            flex: 1,
          },
        ]}>
        <StatusBar
          backgroundColor={
            Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor
          }
          barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Header
          text={applanguage.Feedback}
          AuthHeaderStyle={{
            height:
              Platform.OS == 'android'
                ? verticalScale(80)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w >= 768 && h >= 1024
                ? verticalScale(65)
                : w <= 450 && h <= 750
                ? verticalScale(50)
                : verticalScale(45),
          }}
        />
        <ScrollView style={{height: '100%', width: '100%'}}>
          {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            }}>
            <View style={{height: verticalScale(400)}}>
              <View
                style={{
                  flex: 1,
                  marginTop: scale(10),
                  // paddingTop: moderateVerticalScale(10),
                  // paddingLeft: moderateScale(10),
                  // paddingRight: moderateScale(30),
                }}>
                <TextInput
                  multiline={true}
                  placeholder={applanguage.FeedbackBrief}
                  placeholderTextColor={
                    Theme === 'dark' ? '#404F64' : '#C6CAD1'
                  }
                  style={{
                    // fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                    // fontFamily: Font.Poppins400,
                    // paddingTop: scale(10),
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    // color: Theme === 'dark' ? Color.DarkThemeInputText : Color.TextColor,
                    //  flex: 1,
                    //  textAlignVertical: 'top',
                    // textAlignVertical: 'center'
                    flex: 1,
                    paddingRight: scale(15),
                    color:
                      Theme === 'dark'
                        ? Color.DarkThemeInputText
                        : Color.TextColor,
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                    fontFamily: Font.Poppins400,
                    paddingTop: scale(10),
                    textAlignVertical: 'top',
                    maxWidth: '90%',
                  }}
                  onChangeText={onChangeText}
                  value={text}
                />
              </View>
            </View>
            <View
              style={{
                height: verticalScale(200),
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  permissions()
                }}
                style={{
                  paddingVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(0)
                      : verticalScale(10),
                }}>
                <AttachButton
                  text={applanguage.Upload}
                  sstext={
                    saveimage != null
                      ? applanguage.Uploaded
                      : applanguage.ScreenShotUpload
                  }
                  img={saveimage?.uri}
                />
              </TouchableOpacity>

              <View
                style={{
                  marginTop:
                    w >= 768 && h >= 1024
                      ? verticalScale(25)
                      : verticalScale(30),
                }}>
                <CustomButton onPress={onSumbit} text={applanguage.Send} />
              </View>
            </View>
          </View>
          {/* </KeyboardAvoidingView> */}
        </ScrollView>
        <Loader onBackdropPress={() => setLoader(false)} isVisible={loader} />
        <TickModal
          text={msg}
          onPress={() => {navigation.goBack()}}
          isVisible={internet}
          onBackdropPress={() => navigation.goBack()}
        />
      </View>
    </>
  );
};

export default Feedback;

const styles = StyleSheet.create({});
