import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  useColorScheme,
  ImageBackground,
  useWindowDimensions,
  Platform,
  StatusBar,
} from 'react-native';
import React,{useState} from 'react';
import Kiristalogo from '../../constant/Kiristalogo';
import {Font} from '../../assets/fonts/PoppinsFont';
import {moderateScale, moderateVerticalScale, scale, verticalScale} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import CustomSmallButton from '../../components/CustomSmallButton';
import InvertCustomButton from '../../components/InvertCustomButtom';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '../../utils/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {IS_GUEST, LOGIN, USER_DETAILS} from '../../redux/reducer';
import { skipGuest } from '../../redux/actions/AuthAction';


const OverBoard = ({navigation}) => {
  const Theme = useSelector(state => state.mode)

  const getlanguage = useSelector(state => state.getlanguage)
  const applanguage = useSelector(state => state.applanguage)
  const defaulLang = getlanguage != null ? getlanguage : 'EN'

  const [selectedLanguage, setselectedLanguage] = useState(defaulLang)

  const handleLanguageButtonPress = () => {
    navigation.navigate('Language', {
      type : 'Language',
      setSelectedLanguage: setselectedLanguage,
    });
  };


 
  const dispatch = useDispatch();

  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const tabPotrait = width >= 768 && height >= 1024;
  const standardLandscape = width >= 684 && height >= 360;
  const tabLandscape = width >= 768 && height >= 1024;
  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 350 && height <= 600;

  const device = Platform.OS;
  const handelSkip = () => {
    dispatch(skipGuest(device))
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
      }}>
         {/* <StatusBar backgroundColor={Theme === 'dark' ? Color.DarkTheme : Color.White} barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'} /> */}
         <StatusBar  translucent={true} backgroundColor={'transparent'} barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'} />
      <ImageBackground
        source={
          Theme === 'dark'
            ? require('../../assets/images/overboard_dark.png')
            : width >= 768 && height >= 1024
            ? require('../../assets/images/Overboard_tab.png')
            : require('../../assets/images/overboard.png')
        }
        resizeMode="stretch"
        style={styles.ImageBackground}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: tabPotrait ? '85%' : '90%',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop:verticalScale(20)
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: verticalScale(30),
                marginHorizontal:scale(8)
              }}>
              <TouchableOpacity
                onPress={handleLanguageButtonPress}
                style={{
                  paddingHorizontal:moderateScale(15),
                  // paddingVertical:moderateVerticalScale(10),
                  height:width >= 768 && height >= 1024 ? verticalScale(25) : verticalScale(30),
                  backgroundColor: 'rgba(56, 125, 229, 1)',
                  borderRadius: tabPotrait ? scale(11) : scale(100),
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[
                      {
                        fontSize: tabPotrait ? scale(8) : scale(13),
                        fontFamily: Font.Poppins500,
                        color: 'white',
                        marginRight: scale(2),
                        top: verticalScale(1),
                      },
                    ]}>
                    {selectedLanguage}
                  </Text>
                  <AntDesign
                    name="down"
                    size={tabPotrait ? scale(10) : scale(16)}
                    color={'white'}
                    style={{
                      top: verticalScale(1),
                    }}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handelSkip()}>
                <Text
                  style={{
                    fontFamily: Font.Poppins600,
                    color: 'rgba(56, 125, 229, 1)',
                    textDecorationLine: 'underline',
                    fontSize: tabPotrait ? scale(9) : scale(15),
                    top: tabPotrait ? scale(0) : Platform.OS == 'ios' ?  scale(7) : scale(5),
                  }}>
                  {applanguage.Skip}
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: tabPotrait ? '9%' : fourInchPotrait ? '10%' : '13%',
              }}>
              <Kiristalogo />
            </View>
            <View style={{width:scale(150),height:verticalScale(50),alignSelf:'center',marginTop:verticalScale(10),marginBottom:verticalScale(15) }}>
              <Image style={{width: '100%',height:'100%'}} resizeMode='contain' source={require('../../assets/images/first.png')}/>
              </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                // marginTop: tabPotrait
                //   ? '20%'
                //   : standardLandscape
                //   ? '10%'
                //   : '18%',
                alignSelf: 'center',
                width: tabPotrait ? '78%' : standardLandscape ? '100%' : '90%',
              }}>
              <View
                style={{
                  width: tabPotrait ? scale(80) : scale(85),
                  height: tabPotrait ? verticalScale(45) : verticalScale(40),
                  borderWidth: scale(2),
                  borderColor: Color.Main,
                  borderRadius: scale(10),
                  padding: Theme === 'dark' ? 0 : 3,
                }}>
                <Image
                  source={
                    Theme === 'dark'
                      ? require('../../assets/images/continent2_dark.png')
                      : require('../../assets/images/continent2.png')
                  }
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode={Theme === 'dark' ? 'cover' : 'contain'}
                />
              </View>
              <View
                style={{
                  width: tabPotrait ? scale(40) : scale(45),
                  height: tabPotrait ? verticalScale(45) : verticalScale(40),
                  borderWidth: scale(2),
                  borderColor: Color.Main,
                  borderRadius: scale(10),
                }}>
                <Image
                  source={require('../../assets/images/ad_book_tablet.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode={'contain'}
                />
              </View>
              <View
                style={{
                  width: tabPotrait ? scale(75) : scale(75),
                  height: tabPotrait ? scale(37) : scale(40),
                  borderWidth: scale(2),
                  borderColor: Color.Main,
                  borderRadius: scale(10),
                }}>
                <Image
                  source={require('../../assets/images/event_screen_image.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: scale(8),
                  }}
                  resizeMode={'cover'}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: tabPotrait ? '70%' : '81%',
                alignSelf: 'center',
                marginTop: verticalScale(20),
              }}>
              <CustomSmallButton text={`#${applanguage.Parishes}`} />
              <CustomSmallButton text={`#${applanguage.Books}`} />
              <CustomSmallButton text={`#${applanguage.Events}`} />
              <CustomSmallButton text={`#${applanguage.More}`} />
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: tabPotrait ? verticalScale(130) : verticalScale(110)
              }}>
              <Text
                style={{
                  fontFamily: Font.Poppins700,
                  fontSize: tabPotrait ? scale(15) : scale(20),
                  color: Theme === 'dark' ? Color.White : Color.Black,
                }}>
                {applanguage.Welcome}{applanguage.Brethen}
              </Text>
            </View>
            <View
              style={{
                height: tabPotrait ? verticalScale(100) : verticalScale(120),
                marginTop: tabPotrait ? verticalScale(0) : verticalScale(15),
                justifyContent: 'space-between',
              }}>
              <View style={{marginTop: verticalScale(4)}}>
                <CustomButton
                  text={applanguage.NewAccount}
                  onPress={() => navigation.navigate('SignUp')}
                />
              </View>

              <View
                style={{
                  marginTop: verticalScale(5),
                  marginBottom: tabPotrait
                    ? verticalScale(10)
                    : verticalScale(10),
                }}>
                <InvertCustomButton
                  text={applanguage.SignIn}
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
                    : verticalScale(10),
                  fontSize: tabPotrait
                    ? {fontSize: scale(8)}
                    : {fontSize: scale(12)},

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
                {applanguage.Terms}{' '}
                <Text
                  onPress={() => navigation.navigate('Terms')}
                  style={[
                    styles.term,
                    tabPotrait ? {fontSize: scale(7)} : {fontSize: scale(10)},
                  ]}>
                  {applanguage.OfUse}
                </Text>
                <Text style={{color: Color.BoldTextColor}}> {applanguage.And} </Text>
                <Text
                  onPress={() => navigation.navigate('Privacy')}
                  style={[
                    styles.term,
                    tabPotrait ? {fontSize: scale(7)} : {fontSize: scale(10)},
                  ]}>
                  {applanguage.Privacy}
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    width: '100%',
  },
  dialouge: {
    textAlign: 'center',
  },
  term: {
    color: Color.Main,
    fontFamily: Font.Poppins400
  },
});

export default OverBoard;
