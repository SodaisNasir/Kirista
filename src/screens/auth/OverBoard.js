import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  useColorScheme,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import Kiristalogo from '../../constant/Kiristalogo';
import {Font} from '../../assets/fonts/PoppinsFont';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../components/CustomButton';
import CustomSmallButton from '../../components/CustomSmallButton';
import InvertCustomButton from '../../components/InvertCustomButtom';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '../../utils/Colors';
import { TabActions } from '@react-navigation/native';

const OverBoard = ({navigation}) => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const tabPotrait = width >= 768 && height >= 1024;
  const standardLandscape = width >= 684 && height >= 360;
  const tabLandscape = width >= 768 && height >= 1024;
  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 350 && height <= 600;


  console.log(width,height);
  const Theme = useColorScheme() === 'dark';
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'EN', value: 'EN'},
    {label: 'UR', value: 'UR'},
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={
          Theme
            ? require('../../assets/images/overboard_dark.png')
            : require('../../assets/images/overboard.png')
        }
        // resizeMode="stretch"
        style={styles.ImageBackground}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: tabPotrait ? '85%'  : '90%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: verticalScale(30),
                // paddingHorizontal: verticalScale(15),
              }}>
              <TouchableOpacity

              onPress={()=>{navigation.navigate('Language')}}
                style={{
                  width: tabPotrait ? scale(36) : scale(55),
                  height: tabPotrait ? verticalScale(25) :fourInchPotrait? verticalScale(35) : verticalScale(42),
                  backgroundColor: 'rgba(56, 125, 229, 1)',
                  borderRadius: tabPotrait ? scale(11) : scale(16),
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[
                      {
                        fontSize: tabPotrait ? scale(8) : scale(13),
                        fontFamily: Font.Poppins500,
                        color: 'white',
                        marginRight: scale(2),
                      },
                    ]}>
                    EN
                  </Text>
                  <AntDesign
                    name="down"
                    size={tabPotrait ? scale(10) : scale(16)}
                    color={'white'}
                    style={{
                      alignSelf: 'center',
                    }}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('SettingsGuest')}>
                <Text
                  style={{
                    fontFamily: Font.Poppins600,
                    color: 'rgba(56, 125, 229, 1)',
                    textDecorationLine: 'underline',
                    fontSize: tabPotrait ? scale(11) : scale(15),
                    top: tabPotrait ? scale(0) : scale(5),
                  }}>
                  Skip
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: tabPotrait? '10%' : fourInchPotrait? '10%' : '16%',
            
              }}>
              <Kiristalogo />
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                marginTop: tabPotrait ? '10%' : standardLandscape ? '10%' : '20%',

                alignSelf: 'center',
                width: tabPotrait ? '78%' : standardLandscape? '100%' : '90%',
              }}>
              <View
                style={{
                  width: tabPotrait ? scale(90) : scale(85),
                  height: tabPotrait ? verticalScale(80) : verticalScale(85),
                }}>
                <Image
                  source={
                    Theme
                      ? require('../../assets/images/second_dark.png')
                      : require('../../assets/images/second.png')
                  }
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode={'contain'}
                />
              </View>
              <View
                style={{
                  width: tabPotrait ? scale(45) : scale(45),
                  height: tabPotrait ? scale(50) : scale(60),
                }}>
                <Image
                  source={require('../../assets/images/third.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode={'contain'}
                />
              </View>
              <View
                style={{
                  width: tabPotrait ? scale(85) : scale(85),
                  height: tabPotrait ? scale(80) : scale(60),
                }}>
                <Image
                  source={require('../../assets/images/fourth.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode={'contain'}
                />
              </View>
            </View>

            <View
              style={{
                // backgroundColor: 'purple',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: tabPotrait ? '78%' : '81%',
                alignSelf: 'center',
              }}>
              <CustomSmallButton text={'#Parishes'} />
              <CustomSmallButton text={'#Books'} />
              <CustomSmallButton text={'#Event'} />
              <CustomSmallButton text={'#More'} />
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: tabPotrait ? verticalScale(130) : verticalScale(170),
                // backgroundColor: 'red',
                // paddingHorizontal:1
              }}>
              <Text
                style={{
                  fontFamily: Font.Poppins700,
                  fontSize: tabPotrait ? scale(15) : scale(20),
                  color: Theme ? Color.White : Color.Black,
                }}>
                Welcome, Brethern.
              </Text>
            </View>
            <View
              style={{
                height: tabPotrait ? verticalScale(100) : verticalScale(140),
                marginTop: tabPotrait ? verticalScale(0) : verticalScale(15),
                justifyContent: 'space-between',
              }}>
              <View style={{marginTop: verticalScale(10)}}>
                <CustomButton
                  text={'Create an account'}
                  onPress={() => navigation.navigate('SignUp')}
                />
              </View>

              <View
                style={{
                  marginTop: verticalScale(5),
                  marginBottom: tabPotrait
                    ? verticalScale(10)
                    : verticalScale(15),
                }}>
                <InvertCustomButton
                  text={'Sign In'}
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            </View>

            <View
              style={[
                styles.dialouge,
                {
                  marginVertical: tabPotrait
                    ? verticalScale(10)
                    : verticalScale(20),
                  fontSize: tabPotrait
                    ? {fontSize: scale(8)}
                    : {fontSize: scale(12)},

                  // width: '90%',
                  paddingHorizontal: verticalScale(25),
                  width: tabPotrait ? '60%' : '100%',
                  alignSelf: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                },
              ]}>
              <Text
                style={{
                  fontSize: tabPotrait ? scale(7) : scale(10),
                  color: Color.BoldTextColor,
                  textAlign: 'center',
                  fontFamily: Font.Poppins500,
                }}>
                {' '}
                By continuing, you agree the{' '}
                <Text
                  // onPress={() => navigation.navigate('TermsAndCondition')}
                  style={[
                    styles.term,
                    tabPotrait ? {fontSize: scale(7)} : {fontSize: scale(10)},
                  ]}>
                  Terms of Use
                </Text>
                <Text style={{color: Color.BoldTextColor}}> and </Text>
                <Text
                  // onPress={() => navigation.navigate('TermsAndCondition')}
                  style={[
                    styles.term,
                    tabPotrait ? {fontSize: scale(7)} : {fontSize: scale(10)},
                  ]}>
                  Privacy Policy
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    width: '100%',
  },
  dialouge: {
    textAlign: 'center',
    // fontFamily: Font.Poppins600,
    // marginTop: verticalScale(2),
  },
  term: {
    color: Color.Main,
    fontFamily: Font.Poppins400,
    // top: verticalScale(10),
    // backgroundColor: 'red',
  },
});

export default OverBoard;
