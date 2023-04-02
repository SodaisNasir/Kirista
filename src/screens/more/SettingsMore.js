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
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Edit from '../../assets/icons/edit.svg';
import About from '../../assets/icons/about.svg';
import Feedback from '../../assets/icons/feedback.svg';
import Language from '../../assets/icons/language.svg';
import DarkMode from '../../assets/icons/dakrmode.svg';
import Notification from '../../assets/icons/notification.svg';
import FAQ from '../../assets/icons/faq.svg';
import Terms from '../../assets/icons/terms.svg';
import Privacy from '../../assets/icons/privacy.svg';
import Contact from '../../assets/icons/contact.svg';
import CustomSwitch from '../../components/CustomSwitch';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const SettingsMore = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.HeaderStyle}>
          <View style={styles.WelcomeView}>
            <Text style={styles.WelcomeText}>Hello, Brethen</Text>
          </View>
        </View>

        <View style={styles.MainView}>
          <View style={styles.UserInfo}>
            <View style={styles.ImageAndText}>
              <View
                style={{
                  width: w >= 768 && h >= 1024 ? scale(25) : scale(50),
                  height: w >= 768 && h >= 1024 ? scale(40) : scale(60),
                }}>
                <Image
                  source={require('../../assets/images/krista_settings.png')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                />
              </View>

              <View
                style={{
                  marginHorizontal: verticalScale(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.UserNameText}>Mary David</Text>
                <Text style={styles.UserInfoText}>
                  <Text
                    style={{
                      color: Color.Black,
                      fontFamily: Font.Poppins700,
                      fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(11),
                    }}>
                    ID:{' '}
                  </Text>
                  IOS0000192
                </Text>
              </View>
            </View>

            <Edit height={w >= 768 && h >= 1024 ? scale(16) : scale(22)} />
          </View>

          <TouchableOpacity
            //onPress={() => navigation.navigate('about')}
            style={styles.AllItems}>
            <View style={styles.IconAndText}>
              <About height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}  />

              <Text style={[styles.TextStyle]}>About</Text>
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
            //onPress={() => navigation.navigate('about')}
            style={styles.AllItems}>
            <View style={styles.IconAndText}>
              <Language height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}/>

              <Text style={[styles.TextStyle]}>Language</Text>
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
            //onPress={() => navigation.navigate('about')}
            style={styles.AllItems}>
            <View style={styles.IconAndText}>
              <Notification height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}/>

              <Text style={[styles.TextStyle]}>Notifications</Text>
            </View>

            <View></View>
            <CustomSwitch />
          </TouchableOpacity>
          <TouchableOpacity
            //onPress={() => navigation.navigate('about')}
            style={styles.AllItems}>
            <View style={styles.IconAndText}>
              <DarkMode height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}/>

              <Text style={[styles.TextStyle]}>DarkMode</Text>
            </View>

            <View style={styles.ArrowStyle}>
              <Ionicons
                name="chevron-forward"
                size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                color={Color.ArrowBorder}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: verticalScale(20),
              backgroundColor: Color.HeaderColor,
            }}
          />

          <TouchableOpacity
            //onPress={() => navigation.navigate('about')}
            style={styles.AllItems}>
            <View style={styles.IconAndText}>
              <FAQ height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}/>

              <Text style={[styles.TextStyle]}>FAQ</Text>
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
            //onPress={() => navigation.navigate('about')}
            style={styles.AllItems}>
            <View style={styles.IconAndText}>
              <Terms height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}/>

              <Text style={[styles.TextStyle]}>Terms</Text>
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
            //onPress={() => navigation.navigate('about')}
            style={styles.AllItems}>
            <View style={styles.IconAndText}>
              <Privacy height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}/>

              <Text style={[styles.TextStyle]}>Privacy</Text>
            </View>

            <View style={styles.ArrowStyle}>
              <Ionicons
                name="chevron-forward"
                size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                color={Color.ArrowBorder}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: verticalScale(20),
              backgroundColor: Color.HeaderColor,
            }}
          />

          <TouchableOpacity
            //onPress={() => navigation.navigate('about')}
            style={styles.AllItems}>
            <View style={styles.IconAndText}>
              <Feedback height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}/>

              <Text style={[styles.TextStyle]}>Feedback</Text>
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
            //onPress={() => navigation.navigate('about')}
            style={styles.AllItems}>
            <View style={styles.IconAndText}>
              <Contact height={w >= 768 && h >= 1024 ? scale(16) : scale(18)}/>

              <Text style={[styles.TextStyle]}>Contact</Text>
            </View>

            <View style={styles.ArrowStyle}>
              <Ionicons
                name="chevron-forward"
                size={w >= 768 && h >= 1024 ? scale(10) : scale(14)}
                color={Color.ArrowBorder}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.SocialBox}>
          <TouchableOpacity style={[styles.IconBox]}>
            <FontAwesome5
              name="facebook"
              color={Color.Main}
              size={w >= 768 && h >= 1024 ? scale(10) : scale(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.IconBox}>
            <Entypo name="twitter" color={Color.Main} size={w >= 768 && h >= 1024 ? scale(10) : scale(18)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.IconBox}>
            <Entypo name="instagram" color={Color.Main} size={w >= 768 && h >= 1024 ? scale(10) : scale(18)} />
          </TouchableOpacity>
        </View>
        <View>
        <Text style={[styles.TextStyle]}>Language</Text>

        </View>
      
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsMore;

const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: Color.HeaderColor,
    height: verticalScale(90),
    justifyContent: 'flex-end',
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
    height: w >= 768 && h >= 1024 ? verticalScale(40) : verticalScale(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //   backgroundColor: 'red',
  },
  AllItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: verticalScale(60),
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
    height: w >= 768 && h >= 1024 ? verticalScale(14) : verticalScale(24),
    width: w >= 768 && h >= 1024 ? verticalScale(16) : verticalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
    color: Color.Black,
    paddingHorizontal: moderateScale(15),
  },
  UserInfoText: {
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(11),
    color: Color.Black,
  },
  UserNameText: {
    fontFamily: Font.Poppins600,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
    color: Color.Black,
  },
  SocialBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: verticalScale(15),
    width:w >= 768 && h >= 1024 ? '45%' : '50%',
    alignSelf:'center',
    backgroundColor:'red',
    paddingHorizontal:verticalScale(25)
  },
  IconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(50),
    aspectRatio: 1 / 1,
    borderRadius: scale(100),
  },
  FacebookIconBox:{
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(50),
    aspectRatio: 1 / 1,
    borderRadius: scale(100),

  }
});
