import React, {useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import PhoneInput from '../../components/PhoneInput';
import CustomButton from '../../components/CustomButton';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Header from '../../components/Header';
import {Color} from '../../utils/Colors';
import Password from '../../components/Password';
import ChangeImage from '../../assets/icons/changeimage.svg';
import Tag from '../../assets/icons/tag.svg';
import {launchImageLibrary} from 'react-native-image-picker';

const EditProfile = ({navigation}) => {
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const Theme = useColorScheme() === 'dark';

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
    <>
         <SafeAreaView
        style={{
          backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
    <View
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <StatusBar
        backgroundColor={Theme ? Color.ExtraViewDark : Color.White}
        barStyle={Theme ? 'light-content' : 'dark-content'}
      />
      <Header text={'Edit Profile'} />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            marginTop:
              w >= 768 && h >= 1024 ? moderateScale(20) : moderateScale(20),
          }}>
          <View style={{}}>
            <ChangeImage
              width={w >= 768 && h >= 1024 ? scale(80) : scale(130)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              photosave();
            }}
            style={{
              justifyContent: 'center',
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(10) : moderateScale(15),
            }}>
            <Tag
              // height={40}
              width={w >= 768 && h >= 1024 ? scale(65) : scale(140)}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            marginVertical:
              w >= 768 && h >= 1024 ? moderateScale(10) : moderateScale(20),
          }}>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput text={'Full Name'} placeholder={'Full Name'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <PhoneInput text={'Phone Number'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput text={'Email Address'} placeholder={'Email'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <Password text={'New Password'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <Password text={'Old Password'} />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(30),
            }}>
            <CustomButton text={'Save'} />
          </View>
        </View>
      </ScrollView>
    </View>
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
