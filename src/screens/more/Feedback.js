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
import { base_Url } from '../../utils/Url';
import { useSelector } from 'react-redux';
import Loader from '../../components/Modals/Loader';
import Header from '../../components/Header';

const Feedback = ({navigation}) => {
  const user_details = useSelector(state => state.user_details)
  const applanguage = useSelector(state => state.applanguage)
  const Theme = useSelector(state => state.mode)
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [text, onChangeText] = useState('');
  const [saveimage, setsaveimage] = useState();
  const [show, setShow] = useState(true);
  const [loader, setLoader] = useState(false);


  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);

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
        setsaveimage({
          name: res.assets?.[0]?.fileName,
          uri: res.assets?.[0]?.uri,
          type: res.assets?.[0]?.type,
        })
        setShow(false);
      }
    });
  };

  const feedbackApi = async (setLoader) => {
    try {
setLoader(true);
      let base_url = `${base_Url}feedback/${user_details.data.id}`;
      let myData = new FormData();
  
      myData.append('text', text);
    { saveimage &&
    myData.append('image', saveimage);
}
      const response = await fetch(base_url, {
        method: 'post',
        body: myData,
      });

      const responseData = await response.json();
      console.log('responseData', responseData);
      if(responseData.success.status === 200){
        setLoader(true);
        alert('Thank you for your valuebale feedback')
        
        setTimeout(() => {
          navigation.goBack()
        }, 2000);
      }
      
    } catch (error) {
      setLoader(true);
      console.log('error', error)
    }
  }

  const  onSumbit = () => {
    if(text != ''){
      feedbackApi(setLoader)
    }else{
      alert('Please fill the form')
    }

  }
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
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
        backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}
        barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Header text={applanguage.Feedback}
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
      {/* <CustomHeader text={applanguage.Feedback} AuthHeaderStyle={{
         height:
         Platform.OS == 'android'
           ? w >= 768 && h >= 1024
             ? verticalScale(85)
             : verticalScale(110)
           : w >= 768 && h >= 1024
           ? verticalScale(80)
           : w <= 450 && h <= 750
           ? verticalScale(60)
           : verticalScale(60),
           paddingTop:
           w >= 768 && h >= 1024
             ? moderateVerticalScale(30)
             : moderateVerticalScale(25),
       
      }}/> */}
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
              placeholder={applanguage.FeedbackBrief}
              placeholderTextColor={Theme === 'dark' ? '#404F64' : '#C6CAD1'}
              style={[
                {
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                  fontFamily: Font.Poppins400,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                  color: Theme === 'dark' ? Color.DarkThemeInputText : Color.TextColor,
                  // flex: 1,
                  // textAlignVertical: 'top',
                },
              ]}
              onChangeText={onChangeText}
              value={text}
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
              <AttachButton text={applanguage.Upload} />
            </TouchableOpacity>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(35),
              }}>
              <CustomButton 
              // onPress={() => navigation.goBack()}
              onPress={onSumbit}
               text={applanguage.Send} />
            </View>
          </View>

        </KeyboardAvoidingView>
      </View>
      <Loader
   onBackdropPress={() => setLoader(false)}
   isVisible={loader}
/>
    </View>
    </>
  );
};

export default Feedback;

const styles = StyleSheet.create({});
