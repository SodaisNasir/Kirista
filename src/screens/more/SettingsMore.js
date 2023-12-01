import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  useColorScheme,
  StatusBar,
  Linking,
  Platform,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Edit from '../../assets/icons/edit.svg';
import About from '../../assets/icons/about.svg';
import AboutDark from '../../assets/icons/about_dark.svg';
import LanguageDark from '../../assets/icons/language_dark.svg';
import Feedback from '../../assets/icons/feedback.svg';
import Feedback_dark from '../../assets/icons/feedback_dark.svg';
import Language from '../../assets/icons/language.svg';
import DarkMode from '../../assets/icons/dakrmode.svg';
import Dark_dark from '../../assets/icons/dark_dark.svg';
import Call_dark from '../../assets/icons/call_dark.svg';
import Logout from '../../assets/icons/logout.svg';
import Notification from '../../assets/icons/notification.svg';
import Notification_dark from '../../assets/icons/notification_dark.svg';
import FAQ from '../../assets/icons/faq.svg';
import Faq_dark from '../../assets/icons/faq_dark.svg';
import Terms from '../../assets/icons/terms.svg';
import Terms_dark from '../../assets/icons/terms_dark.svg';
import Privacy from '../../assets/icons/privacy.svg';
import Privacy_dark from '../../assets/icons/privacy_dark.svg';
import Contact from '../../assets/icons/contact.svg';
import CustomSwitch from '../../components/CustomSwitch';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {IS_GUEST, LOGIN, USER_DETAILS} from '../../redux/reducer';
import BottomTab from '../../constant/BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogOut } from '../../redux/actions/AuthAction';
import Loader from '../../components/Modals/Loader';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const SettingsMore = () => {
  const [email, setEmail] = useState(null);
  const userData = useSelector(state => state.user_details)
  const applanguage = useSelector(state => state.applanguage)
  const guestId = useSelector(state => state.guestId)
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const Theme = useSelector(state => state.mode)
  const navigation = useNavigation();
  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    }),
  );

  const is_guest = useSelector(state => state.is_guest);

  const guestLogout = () =>{
    dispatch({type: IS_GUEST, payload: false});
    dispatch({type: USER_DETAILS, payload: null});
  }
  
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        }}>
        <StatusBar
          backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}
          barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
        />

        <View
          style={[
            styles.HeaderStyle,
            {
              backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
            },
          ]}>
          <View style={styles.WelcomeView}>
            {is_guest  ? (
              <Text
                style={[
                  styles.WelcomeText,
                  {
                    color: Theme === 'dark' ? Color.White : Color.Black,
                  },
                ]}>
              {/* Guest, {applanguage.Brethen} */}
              {applanguage.Guest}, {applanguage.Brethen}
              </Text>
            ) : (
              <Text
                style={[
                  styles.WelcomeText,
                  {
                    color: Theme === 'dark' ? Color.White : Color.Black,
                  },
                ]}>
                {/* Hello, Brethren. */}
                {applanguage.Hello}, {applanguage.Brethen}.
              </Text>
            )}
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.MainView]}>
            <TouchableOpacity
            activeOpacity={1}
            onPress={() => is_guest ? guestLogout() : console.log('asdf')}
              style={[
                styles.UserInfo,
                {
                  backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              <View style={styles.ImageAndText}>
                <View
                  style={{
                    width: w >= 768 && h >= 1024 ? scale(30) : scale(55),
                    height: w >= 768 && h >= 1024 ? scale(30) : scale(55),
                  }}>
                    {
                      userData?.data?.profile_image != null ?
                      <Image
                    source={{uri: userData?.data?.profile_image}}
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: scale(100),
                    }}
                    resizeMode="contain"
                  />
                      :
                  <Image
                    source={
                      is_guest
                        ? require('../../assets/images/rccg_logo.png')
                        : require('../../assets/images/krista_settings.png')
                    }
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: scale(100),
                    }}
                    resizeMode="contain"
                  />
                    }
                </View>

                <View
                  style={{
                    marginHorizontal: verticalScale(10),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {is_guest ? (
                   <View>
                      <Text
                        style={[
                          styles.UserNameText,
                          {
                            color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                            fontFamily: Font.Poppins700,
                            alignSelf: 'flex-start',
                          },
                        ]}>
                        {applanguage.SignIn}
                      </Text>
                      <Text
                        style={[
                          styles.UserInfoText,
                          {
                            color: Theme === 'dark' ? Color.White : Color.Black,
                          },
                        ]}>
                        <Text
                          style={{
                            color: Theme === 'dark' ? Color.White : Color.Black,
                            fontFamily: Font.Poppins700,
                            fontSize:
                              w >= 768 && h >= 1024 ? scale(8) : scale(11),
                          }}>
                          ID:{' '}
                        </Text>
                        {guestId}
                      </Text>
                      </View>
                  ) : (
                    <View>
                      <Text
                        style={[
                          styles.UserNameText,
                          {
                            color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                          },
                        ]}>
                        {/* Mary David */}
                        {userData.data.name}
                      </Text>
                      <Text
                        style={[
                          styles.UserInfoText,
                          {
                            color: Theme === 'dark' ? Color.White : Color.Black,
                          },
                        ]}>
                        <Text
                          style={{
                            color: Theme === 'dark' ? Color.White : Color.Black,
                            fontFamily: Font.Poppins700,
                            fontSize:
                              w >= 768 && h >= 1024 ? scale(8) : scale(11),
                          }}>
                          ID:{' '}
                        </Text>
                        {/* IOS0000192 */}
                        {userData.data.new_id}
                      </Text>
                     </View>
                  )}
                </View>
              </View>
              {is_guest ? (
                <View style={styles.ArrowStyle}>
                  <Ionicons
                    name="chevron-forward"
                    size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                    color={Color.ArrowBorder}
                  />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditProfile')}>
                  <Edit
                    height={w >= 768 && h >= 1024 ? scale(18) : scale(22)}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: verticalScale(20),
              backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
            }}
          />
          <View style={styles.MainView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('About')}
              style={[
                styles.AllItems,
                {
                  backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              <View style={styles.IconAndText}>
                {Theme === 'dark' ? (
                  <AboutDark
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                ) : (
                  <About
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                )}

                <Text
                  style={[
                    styles.TextStyle,
                    {
                      color: Theme === 'dark' ? Color.White : Color.Black,
                    },
                  ]}>
                  {applanguage.About}
                </Text>
              </View>

              <View style={styles.ArrowStyle}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                  color={Color.ArrowBorder}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Language', {type: 'Language'})
              }
              style={[
                styles.AllItems,
                {
                  backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              <View
                style={[
                  styles.IconAndText,
                  {
                    color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                  },
                ]}>
                {Theme === 'dark' ? (
                  <LanguageDark
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                ) : (
                  <Language
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                )}

                <Text
                  style={[
                    styles.TextStyle,
                    {
                      color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                    },
                  ]}>
                  {applanguage.Language}
                </Text>
              </View>

              <View style={styles.ArrowStyle}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                  color={Color.ArrowBorder}
                />
              </View>
            </TouchableOpacity>
            {
              is_guest ?
              null :
            <TouchableOpacity
              style={[
                styles.AllItems,
                {
                  backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              <View style={[styles.IconAndText]}>
                {Theme === 'dark' ? (
                  <Notification_dark
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                ) : (
                  <Notification
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                )}

                <Text
                  style={[
                    styles.TextStyle,
                    {
                      color: Theme === 'dark' ? Color.White : Color.Black,
                    },
                  ]}>
                  {applanguage.Notifications}
                </Text>
              </View>
              <CustomSwitch />
            </TouchableOpacity>
                  }

            <TouchableOpacity
              onPress={() => navigation.navigate('DarkMode')}
              style={[
                styles.AllItems,
                {
                  backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              <View style={styles.IconAndText}>
                {Theme === 'dark' ? (
                  <Dark_dark
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                ) : (
                  <DarkMode
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                )}
                <Text
                  style={[
                    styles.TextStyle,
                    {
                      color: Theme === 'dark' ? Color.White : Color.Black,
                    },
                  ]}>
                 {applanguage.DarkMode} 
                </Text>
              </View>

              <View style={styles.ArrowStyle}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                  color={Color.ArrowBorder}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: verticalScale(20),
              backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
            }}
          />
          <View style={[styles.MainView]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Faq')}
              style={[
                styles.AllItems,
                {
                  backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              <View style={styles.IconAndText}>
                {Theme === 'dark' ? (
                  <Faq_dark
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                ) : (
                  <FAQ height={w >= 768 && h >= 1024 ? scale(16) : scale(18)} />
                )}

                <Text
                  style={[
                    styles.TextStyle,
                    {
                      color: Theme === 'dark' ? Color.White : Color.Black,
                    },
                  ]}>
                  {applanguage.FAQ} 
                </Text>
              </View>

              <View style={styles.ArrowStyle}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                  color={Color.ArrowBorder}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Terms')}
              style={[
                styles.AllItems,
                {
                  backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              <View style={styles.IconAndText}>
                {Theme === 'dark' ? (
                  <Terms_dark
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                ) : (
                  <Terms
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                )}

                <Text
                  style={[
                    styles.TextStyle,
                    {
                      color: Theme === 'dark' ? Color.White : Color.Black,
                    },
                  ]}>
                  {applanguage.TermsPlain}
                </Text>
              </View>

              <View style={styles.ArrowStyle}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                  color={Color.ArrowBorder}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Privacy')}
              style={[
                styles.AllItems,
                {
                  backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              <View style={styles.IconAndText}>
                {Theme === 'dark' ? (
                  <Privacy_dark
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                ) : (
                  <Privacy
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                )}

                <Text
                  style={[
                    styles.TextStyle,
                    {
                      color: Theme === 'dark' ? Color.White : Color.Black,
                    },
                  ]}>
                  {applanguage.PrivacyPlain}
                </Text>
              </View>

              <View style={styles.ArrowStyle}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                  color={Color.ArrowBorder}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: verticalScale(20),
              backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
            }}
          />

          <View style={styles.MainView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Feedback')}
              style={[
                styles.AllItems,
                {
                  backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              <View style={styles.IconAndText}>
                {Theme === 'dark' ? (
                  <Feedback_dark
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                ) : (
                  <Feedback
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                )}

                <Text
                  style={[
                    styles.TextStyle,
                    {
                      color: Theme === 'dark' ? Color.White : Color.Black,
                    },
                  ]}>
                  {applanguage.Feedback}
                </Text>
              </View>

              <View style={styles.ArrowStyle}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                  color={Color.ArrowBorder}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Contact')}
              style={[
                styles.AllItems,
                {
                  backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              <View style={styles.IconAndText}>
                {Theme === 'dark' ? (
                  <Call_dark
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                ) : (
                  <Contact
                    height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                  />
                )}

                <Text
                  style={[
                    styles.TextStyle,
                    {
                      color: Theme === 'dark' ? Color.White : Color.Black,
                    },
                  ]}>
                  {applanguage.Contact}
                </Text>
              </View>

              <View style={styles.ArrowStyle}>
                <Ionicons
                  name="chevron-forward"
                  size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                  color={Color.ArrowBorder}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.SocialBox}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.facebook.com/Kiristahq')
              }
              style={[styles.IconBox]}>
              <FontAwesome5
                name="facebook"
                color={Color.Main}
                size={w >= 768 && h >= 1024 ? scale(12) : scale(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/Kiristahq/')
              }
              style={styles.IconBox}>
              <Entypo
                name="instagram"
                color={Color.Main}
                size={w >= 768 && h >= 1024 ? scale(12) : scale(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://twitter.com/Kiristahq')
              }
              style={styles.IconBox}>
              <Entypo
                name="twitter-with-circle"
                color={Color.Main}
                size={w >= 768 && h >= 1024 ? scale(12) : scale(20)}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignSelf: 'center',
              height: verticalScale(40),
            }}>
            <Text style={[styles.VersionText]}>{applanguage.Version} 1.3.1</Text>
          </View>
          {is_guest ? null : (
            <>
              <View
                style={{
                  height: verticalScale(20),
                  backgroundColor: Theme === 'dark'
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                }}
              />
              <View
                style={[
                  styles.MainView,
                  {
                    backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                  },
                ]}>
                <TouchableOpacity
                  onPress={()=> dispatch(LogOut(setLoader))}
                  style={[
                    styles.AllItems,
                    {
                      backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
                    },
                  ]}>
                  <View style={styles.IconAndText}>
                    <Logout
                      height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}
                    />

                    <Text style={[styles.LogoutTextStyle]}>{applanguage.LogOut}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: verticalScale(20),
                  backgroundColor: Theme === 'dark'
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                }}
              />
            </>
          )}
     <Loader
   onBackdropPress={() => setLoader(false)}
   isVisible={loader}
/> 
          {/* <View style={{height: verticalScale(90)}}></View> */}
        </ScrollView>
      </View>
      <BottomTab activeMore={true} homePress={() => navigation.navigate('Home')}/>
    </>
  );
};

export default SettingsMore;

const styles = StyleSheet.create({
  HeaderStyle: {
    height:
      Platform.OS == 'android'
        ? w >= 768 && h >= 1024
          ? verticalScale(80)
          : verticalScale(100)
        : w >= 768 && h >= 1024
        ? verticalScale(50)
        : w <= 450 && h <= 750
        ? verticalScale(66)
        : verticalScale(60),
    justifyContent:
      Platform.OS == 'android'
        ? 'center'
        : w <= 450 && h <= 750
        ? 'center'
        : null,
    paddingTop:
    Platform.OS == 'android' ?
      w >= 768 && h >= 1024
        ? moderateVerticalScale(20)
        : moderateVerticalScale(50): 
        w >= 768 && h >= 1024 ? moderateVerticalScale(20)
        : moderateVerticalScale(25) ,
  },
  WelcomeView: {
    marginBottom: w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(8),
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(15),
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(13) : scale(22),
    fontFamily: Font.Poppins500,
    color: Color.Black,
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(10),
  },
  MainView: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
  },
  UserInfo: {
    backgroundColor: Color.White,
    height: w >= 768 && h >= 1024 ? verticalScale(65) : verticalScale(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AllItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: verticalScale(55),
    backgroundColor: Color.White,
  },
  IconAndText: {
    flexDirection: 'row',
  },
  ImageAndText: {
    flexDirection: 'row',
  },
  ArrowStyle: {
    borderRadius: w >= 768 && h >= 1024 ? scale(4) : scale(8),
    borderColor: Color.ArrowBorder,
    borderWidth: 2,
    height: w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(24),
    width: w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    color: Color.Black,
    paddingHorizontal: moderateScale(15),
  },
  UserInfoText: {
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(11),
    // color: Color.Black,
  },
  UserNameText: {
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
    color: Color.Black,
  },
  SocialBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: verticalScale(15),
    height: w >= 768 && h >= 1024 ? verticalScale(35) : verticalScale(50),
    width: w >= 768 && h >= 1024 ? '32%' : '45%',
    alignSelf: 'center',
    paddingHorizontal: verticalScale(25),
    alignItems: 'center',
  },
  IconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(50),
    aspectRatio: 1 / 1,
    borderRadius: scale(100),
  },
  FacebookIconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(50),
    aspectRatio: 1 / 1,
    borderRadius: scale(100),
  },
  VersionText: {
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
    color: '#D1D2D4',
    paddingHorizontal: moderateScale(15),
  },
  LogoutTextStyle: {
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
    color: Color.Red,
    paddingHorizontal: moderateScale(15),
  },
});
