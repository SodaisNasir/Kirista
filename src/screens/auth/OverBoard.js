import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
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

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const OverBoard = ({navigation}) => {
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
        backgroundColor: 'white',
        paddingHorizontal: verticalScale(20),
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: verticalScale(30),
            // paddingHorizontal: verticalScale(15),
          }}>
          <TouchableOpacity
            style={{
              width: w >= 768 && h >= 1024 ? scale(38) : scale(50),
              height:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(38),
              backgroundColor: 'rgba(56, 125, 229, 1)',
              borderRadius: scale(15),
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  {
                    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(13),
                    fontFamily: Font.Poppins600,
                    color: 'white',
                    marginRight: scale(2),
                  },
                ]}>
                EN
              </Text>
              <AntDesign
                name="down"
                size={w >= 768 && h >= 1024 ? scale(11) : scale(16)}
                color={'white'}
                style={{
                  alignSelf: 'center',
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                fontFamily: Font.Poppins700,
                color: 'rgba(56, 125, 229, 1)',
                textDecorationLine: 'underline',
                fontSize: w >= 768 && h >= 1024 ? scale(11) : scale(15),
                top: w >= 768 && h >= 1024 ? scale(0) : scale(5),
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: '10%',
          }}>
          <Kiristalogo />
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            marginTop: 768 && h >= 1024 ? '10%' : '18%',
            paddingHorizontal:
              768 && h >= 1024 ? verticalScale(40) : verticalScale(20),
          }}>
          <View
            style={{
              width: w >= 768 && h >= 1024 ? scale(90) : scale(85),
              height:
                w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(85),
            }}>
            <Image
              source={require('../../assets/images/second.png')}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              width: w >= 768 && h >= 1024 ? scale(45) : scale(45),
              height: w >= 768 && h >= 1024 ? scale(50) : scale(60),
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
              width: w >= 768 && h >= 1024 ? scale(85) : scale(85),
              height: w >= 768 && h >= 1024 ? scale(80) : scale(60),
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
            justifyContent: 'space-around',
            width: w >= 768 && h >= 1024 ? '78%' : '85%',
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
            height:
              w >= 768 && h >= 1024 ? verticalScale(130) : verticalScale(180),
            // backgroundColor: 'red',
          }}>
          <Text
            style={{
              fontFamily: Font.Poppins700,
              fontSize: w >= 768 && h >= 1024 ? scale(15) : scale(24),
              color: 'black',
            }}>
            Welcome, Brethern
          </Text>
        </View>
        <View
          style={{
            height:
              w >= 768 && h >= 1024 ? verticalScale(100) : verticalScale(140),
            marginTop:
              w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(15),
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
              marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
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
              // backgroundColor: 'red',
              // alignItems: 'center',
              width: w >= 768 && h >= 1024 ? '60%' : '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            },
          ]}>
          <Text
            style={{
              fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
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
                w >= 768 && h >= 1024
                  ? {fontSize: scale(7)}
                  : {fontSize: scale(10)},
              ]}>
              Terms of Use
            </Text>
            <Text style={{color: Color.BoldTextColor}}> and </Text>
            <Text
              // onPress={() => navigation.navigate('TermsAndCondition')}
              style={[
                styles.term,
                w >= 768 && h >= 1024
                  ? {fontSize: scale(7)}
                  : {fontSize: scale(10)},
              ]}>
              Privacy Policy
            </Text>
          </Text>
        </View>

        {/* <View
          style={{marginVertical: verticalScale(25), backgroundColor: 'red'}}>
          <Text
            style={{
              width: '90%',
              alignSelf: 'center',
              fontFamily: Font.Poppins500,
              fontSize: 14,
              textAlign: 'center',
              color: Color.TextColor,
              paddingHorizontal: verticalScale(10),
            }}>
            By continuing, you agree the
            <TouchableOpacity>
              <Text
                style={{top: verticalScale(3), color: 'rgba(56, 125, 229, 1)'}}>
                {' '}
                Terms of Use
              </Text>
            </TouchableOpacity>{' '}
            and
          </Text>

          <View>
            <TouchableOpacity style={{backgroundColor: 'purple'}}>
              <Text
                style={{
                  top: verticalScale(2),
                  alignSelf: 'center',
                  color: 'rgba(56, 125, 229, 1)',
                  fontFamily: Font.Poppins400,
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* <View style={{backgroundColor: 'red'}}>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: Font.Poppins500,
              fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
              textAlign: 'center',
              color: Color.TextColor,
              // paddingHorizontal: verticalScale(10),
            }}>
            By continuing, you agree the
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                  // top: verticalScale(3),
                  color: 'rgba(56, 125, 229, 1)',
                }}>
                {' '}
                Terms of Use
              </Text>
            </TouchableOpacity>{' '}
            and
            <TouchableOpacity style={{backgroundColor: 'purple'}}>
              <Text
                style={{
                  // top: verticalScale(2),
                  // alignSelf: 'center',
                  color: 'rgba(56, 125, 229, 1)',
                  fontFamily: Font.Poppins400,
                  // marginTop: '-2%',
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                  // textAlign: 'center',
                }}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dialouge: {
    textAlign: 'center',
    // fontFamily: Font.Poppins600,
    // marginTop: verticalScale(2),
    marginVertical:
      w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(20),
    fontSize:
      w >= 768 && h >= 1024 ? {fontSize: scale(8)} : {fontSize: scale(12)},

    // width: '90%',
    paddingHorizontal: verticalScale(25),
  },
  term: {
    color: Color.Main,
    fontFamily: Font.Poppins500,
    // top: verticalScale(10),
    // backgroundColor: 'red',
  },
});

export default OverBoard;
