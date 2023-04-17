import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState,useLayoutEffect} from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Color} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';
import Header from '../../../components/Header';
import CustomNavigator from '../../../components/CustomNavigator';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const RccgContinent = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    })
  }, [])

  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          flex: 1,
        },
      ]}>
      <Header text={'RCCG Continent 2'} />
      <ScrollView>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
          <View
            style={{
              //   backgroundColor:'red',
              alignItems: 'center',
              height: H * 0.1,
              // width: W * 1,

              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(30),
              marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(5),
            }}>
            <Image
              resizeMode="cover"
              source={require('../../../assets/images/continent2_logo.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',

              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins700,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              RCCG Continent 2
            </Text>
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins700,
                color: Theme ? Color.White : Color.DarkTextColor,
                textAlign: 'center',
              }}>
              Pastor E.A. Odeyemi
            </Text>

            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textAlign: 'center',
              }}>
              (Continent 2 Overseer)
            </Text>
          </View>

          <View
            style={{
                paddingVertical:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),

              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins700,
                color: Theme ? Color.White : Color.DarkTextColor,
                textAlign: 'center',
              }}>
              RCCG Northern Zone, Nigeria
            </Text>

            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textAlign: 'center',
              }}>
              This is coordinated by the Continent 2 Overseer, whose
              headquarters are in Abuja. It is divided into ten regions, which
              are located in various geopolitical zones: Region 7-Yola, Region
              8-Jos, Region 9-Kano, Region 10-Abuja, Region 16-Borno, Region
              17-Bauchi, Region 18-Sokoto, Region 24-Lokoja, Region
              28-Nassarawa, and Region 30-Kaduna. These Regions have a total
              average attendance of 422,130 people and are made up of 68
              Provinces, 893 Zones, 2,177 Areas, and 7,921 Parishes.
            </Text>
          </View>

          <View
            style={{
              borderColor: Theme ? Color.White : Color.Black,
              borderWidth: 1,
              borderStyle: 'dashed',
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginVertical: verticalScale(15),
              paddingVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(25),
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins700,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              RCCG West Africa Region I
            </Text>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Coordinated by
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Pastor James Dangoduro
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                (Deputy Continental Overseer- West Coast I)
              </Text>
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                It has its Regional Headquarters in Ghana. This Region, which
                includes Ghana Provinces 1 and 2, is divided into 26 Zones, 22
                Areas, and 105 Parishes, with a total average attendance of
                6,910.
              </Text>
            </View>
          </View>

          <View
            style={{
              borderColor: Theme ? Color.White : Color.Black,
              borderWidth: 1,
              borderStyle: 'dashed',
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginVertical: verticalScale(15),
              paddingVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins700,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              RCCG West Africa Region II
            </Text>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Coordinated by
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Pastor J.O. Temitope
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                (Deputy Continental Overseer- West Coast I)
              </Text>
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                It has its Regional Headquarters in Ghana. This Region, which
                includes Ghana Provinces 1 and 2, is divided into 26 Zones, 22
                Areas, and 105 Parishes, with a total average attendance of
                20,685.
              </Text>
            </View>
          </View>

          <View
            style={{
              borderColor: Theme ? Color.White : Color.Black,
              borderWidth: 1,
              borderStyle: 'dashed',
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              alignItems: 'center',
              marginVertical: verticalScale(15),

              paddingVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins700,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              RCCG West Africa Region III
            </Text>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Coordinated by
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Pastor J.O. Temitope
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                (Deputy Continental Overseer- West Coast I)
              </Text>
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                It has its Regional Headquarters in Ghana. This Region, which
                includes Ghana Provinces 1 and 2, is divided into 26 Zones, 22
                Areas, and 105 Parishes, with a total average attendance of
                20,685.
              </Text>
            </View>
          </View>

          <View
            style={{
              borderColor: Theme ? Color.White : Color.Black,
              borderWidth: 1,
              borderStyle: 'dashed',
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              alignItems: 'center',
              marginVertical: verticalScale(15),
              paddingVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins700,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              RCCG West Africa Region IV
            </Text>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Coordinated by
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Pastor J.O. Temitope
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                (Deputy Continental Overseer- West Coast I)
              </Text>
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                It has its Regional Headquarters in Ghana. This Region, which
                includes Ghana Provinces 1 and 2, is divided into 26 Zones, 22
                Areas, and 105 Parishes, with a total average attendance of
                20,685.
              </Text>
            </View>
          </View>

          <View
            style={{
              borderColor: Theme ? Color.White : Color.Black,
              borderWidth: 1,
              borderStyle: 'dashed',
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginVertical: verticalScale(15),
                paddingVertical:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins700,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              RCCG Central Africa Region
            </Text>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Coordinated by
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Pastor Peter Akalamodu
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                (Deputy Continental Overseer- West Coast I)
              </Text>
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                It has its Regional Headquarters in Ghana. This Region, which
                includes Ghana Provinces 1 and 2, is divided into 26 Zones, 22
                Areas, and 105 Parishes, with a total average attendance of
                20,685.
              </Text>
            </View>
          </View>

          <View
            style={{
              borderColor: Theme ? Color.DarkBorderColor : Color.BorderColor,
              borderWidth: 1,
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              alignItems: 'center',
              marginVertical: verticalScale(15),
              paddingVertical:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(20),
            }}>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              Pastor E.A. Adeboye
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                fontFamily: Font.Poppins700,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              General Overseer, RCCG World Wide
            </Text>
          </View>

          <View
            style={{
              borderColor: Theme ? Color.DarkBorderColor : Color.BorderColor,
              borderWidth: 1,
              width: w >= 768 && h >= 1024 ? '70%' : '100%',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(25),
            }}>
            <CustomButton restyle={{width: '95%'}} text={'Read More'} />
          </View>
        </View>
        <View
          style={{
            height: verticalScale(95),
          }}
        />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: Color.White,
        }}>
        <CustomNavigator />
      </View>
    </SafeAreaView>
  );
};

export default RccgContinent;

const styles = StyleSheet.create({});
