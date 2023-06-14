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
  Dimensions,
  Image,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Header from '../../components/Header';
import {Color} from '../../utils/Colors';
import Password from '../../components/Password';
import ChangeImage from '../../assets/icons/changeimage.svg';
import Tag from '../../assets/icons/tag.svg';
import {launchImageLibrary} from 'react-native-image-picker';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/UserAction';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch()

  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const Theme = useColorScheme() === 'dark';
  const userData = useSelector(state => state.user_details)
  const [text, onChangeText] = useState('');

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all',
defaultValues:{
  full_name: userData.data.name,
  phonenumber: userData.data.phone_number,
  email: userData.data.email,
  password: userData.password,
}
});

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);
  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 600 && height <= 350;
  const tabPotrait = width >= 768 && height >= 1024;
  const [saveimage, setsaveimage] = useState();
  const [show, setShow] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('+234');
  const [flagImage, setFlagImage] = useState('32');

  const handlePhoneNumberButtonPress = () => {
    navigation.navigate('SelectCountry', {
      setPhoneNumber: setPhoneNumber,
      setFlagImage: setFlagImage,
      type: 'EditProfile'
    });
  };
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

  const onSubmit = (data) => {
    dispatch(updateProfile(data,userData,saveimage,text,navigation))
  }
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            marginTop:
              w >= 768 && h >= 1024 ? moderateScale(20) : moderateScale(20),
          }}>
          <View >
            {
              show && userData.data.profile_image == null ?
              <ChangeImage
                width={w >= 768 && h >= 1024 ? scale(80) : scale(130)}
              /> :
            <View style={{
              height: scale(125),
              width: scale(125),
              borderRadius: 100,
              overflow: 'hidden',
            }}>
            <Image 
            source={{uri: saveimage?.uri ? saveimage?.uri : userData.data.profile_image}}
            resizeMode='cover'
            style={{
              height: '100%',
              width: '100%'
            }}
            />
          </View>
          }
            
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
            <CustomInput
             text={'Full Name'}
              placeholder={'Full Name'} 
              control={control}
              name="full_name"
              rules={{
                required: 'Full name is required',
                message: 'Please enter your full name',
              }}
              />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
              <CustomInput
                onPress={handlePhoneNumberButtonPress}
                control={control}
                name="phonenumber"
                maxLength={16}
                rules={{
                  required: 'Phone number is required',
                  message: 'Please enter your phone number',
                  maxLength: {
                    value: 15,
                    message: 'Please enter a valid phone number',
                  },
                }}
                // restyleBox={{
                //   marginBottom:
                //     w >= 768 && h >= 1024
                //       ? verticalScale(15)
                //       : verticalScale(15),
                // }}
                placeholder={'Phone Number'}
                keyboardType={'numeric'}
                text={'Phone Number'}
                flagImage={flagImage}
                phoneNumber={phoneNumber}
                phone={true}
                // onChange = value.replace(/(\d{3})(?=\d)/g, '$1 ')
              />
              {errors.phonenumber && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>
                  {errors.phonenumber.message}{' '}
                </Text>
              )}
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <CustomInput 
            text={'Email Address'} 
            placeholder={'Email'}
            control={control}
            name="email"
            rules={{
              required: '*Email is required',
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Email is not valid',
              },
            }}
            keyboardType={'email-address'}
             />
             {errors.email && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>
                  {errors.email.message}{' '}
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
                text={'Old Password'}
                placeholder={'Password'}
                control={control}
                name="password"
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: '*Password too short (minimum length is 8)',
                  },
                  maxLength: {
                    value: 16,
                    message: '*Password too long (maximum length is 16)',
                  },
                }}
                keyboardType="default"
                maxLength={20}
              />
              {errors.password && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>
                  {errors.password.message}
                </Text>
              )}
            </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
            }}>
            <Password
             text={'New Password'}
             password={true}
             onChangeText={onChangeText}
            value={text}
              />
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(30),
            }}>
            <CustomButton text={'Save'} onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </ScrollView>
    </View>
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
