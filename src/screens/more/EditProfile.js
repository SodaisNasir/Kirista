import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import PhoneInput from '../../components/PhoneInput';
import CustomButton from '../../components/CustomButton';
import {version} from 'react/cjs/react.production.min';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Header from '../../components/Header';
import {Color} from '../../utils/Colors';
import Password from '../../components/Password';
import ChangeImage from '../../assets/icons/changeimage.svg';
import Tag from '../../assets/icons/tag.svg';

const EditProfile = () => {
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const Theme = useColorScheme();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <Header text={'Edit Profile'} />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              marginTop: w >= 768 && h >= 1024 ? moderateScale(20) : moderateScale(20)
          }}>
          <View style={{}}>
            <ChangeImage
              width={w >= 768 && h >= 1024 ? scale(80) : scale(130)}
         
            />
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              paddingHorizontal: w >= 768 && h >= 1024 ? moderateScale(10) : moderateScale(15)
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
            <CustomInput text={'Email Address'} placeholder={'Email'} />
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
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
