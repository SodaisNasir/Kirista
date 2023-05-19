import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
  Image,
  StatusBar
} from 'react-native';
import React, {useCallback} from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Color} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';
import Header from '../../../components/Header';
import CustomNavigator from '../../../components/CustomNavigator';
import {useFocusEffect} from '@react-navigation/native';

const RccgStructure = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  return (
    <>
    <SafeAreaView style={{ backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,}} />
       <View
      style={[
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
          flex: 1,
        },
      ]}>
        <StatusBar backgroundColor={ Theme ? Color.ExtraViewDark : Color.HeaderColor}/>
      <Header text={'RCCG Structure'} welcomeText={{paddingTop:moderateScale(5)}}/>
        {/* AuthHeaderStyle={{
            marginTop: 0,
            height:
              w >= 768 && h >= 1024
                ? verticalScale(50)
                : w <= 450 && h <= 750
                ? verticalScale(65)
                : verticalScale(30),
          }}/> */}
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal:
            w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(22),
          }}>
          <View
            style={{
              height:
                w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(100),
              marginTop:
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(30),
              marginBottom:
                w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(5),
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/images/rccg_logo.png')}
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
              Continent 1
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textDecorationLine: 'underline',
              }}>
              Nigeria, North Africa (Ethiopia)
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
              }}>
              Continental Overseer{''}
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                - Pastor J.O. Obayemi
              </Text>
            </Text>

            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins700,
                color: Theme ? Color.White : Color.DarkTextColor,
                textAlign: 'center',
              }}>
              Deputy Continental Overseer {''}
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                - Pastor Tosin Macauley
              </Text>
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
              }}>
              Assistant Continental Overseers
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              Pastor Sunday Akande
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              Pastor Kalu Ndukwe
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              Pastor Margaret Daramola
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
              }}>
              Pastor Tunde Oduwole
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
              Continent 2
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textDecorationLine: 'underline',
                textAlign: 'center',
              }}>
              Abuja, Northern Nigeria, West Africa 1 (Ghana), West Africa 2
              (Cote D'ivoire), West Africa 3 (Gambia), Central Africa (Cameroun)
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
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor E.A. Odeyemi
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Deputy Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor James Dagunduro
                </Text>
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
                }}>
                Assistant Continental Overseers
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Pastor Peter Akalamudo (Cameroun)
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Pastor Peter Akalamudo (Cameroun)
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Pastor Emmanuel Kalejaiye (Gambia)
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Pastor John Temitope (Cote D' Ivoire)
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Pastor Christopher Oni
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Pastor Dele Olowookere
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
              Continent 3
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textDecorationLine: 'underline',
                textAlign: 'center',
              }}>
              Lagos, Southwest Nigeria, Middle East Region 1 & 2
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
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor J.F Odesola
                </Text>
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
              Continent 4
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textDecorationLine: 'underline',
                textAlign: 'center',
              }}>
              Southern Africa 1 (Zambia), Southern Africa 2 (South Africa)
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
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Ayo Adeloye
                </Text>
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
              Continent 5
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textDecorationLine: 'underline',
                textAlign: 'center',
              }}>
              East Africa 1 (Kenya), East Africa 2 (Kenya)
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
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Peter Amenkhienan
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Deputy Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Prince ObasiIke
                </Text>
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
              Continent 6
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textDecorationLine: 'underline',
                textAlign: 'center',
              }}>
              North America (USA, Canada), South America (Brazil), Central
              America (Honduras), Caribbean
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
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor James Fadel
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Deputy Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Femi Olawale
                </Text>
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
              Continent 7
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textDecorationLine: 'underline',
                textAlign: 'center',
              }}>
              Asia 1 (Bangladesh), Asia 2 (Malaysia)
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
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Remi Akintunde
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Deputy Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Kola Olaade
                </Text>
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
              Continent 8
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textDecorationLine: 'underline',
                textAlign: 'center',
              }}>
              Australia, Oceania & South Pacific
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
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Wole Haastrup
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Deputy Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Ibukun Williams
                </Text>
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
              Continent 9
            </Text>
            <Text
              style={{
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                fontFamily: Font.Poppins500,
                color: Theme ? Color.White : Color.DarkTextColor,
                textDecorationLine: 'underline',
                textAlign: 'center',
              }}>
              Europe 1 (Netherlands), Europe 2 (Spain), Europe 3 (Sweden), UK &
              Ireland
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
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Dele Olowu
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Deputy Continental Overseer {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Leke Sanusi
                </Text>
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
              Intercontinental Departments
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
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Intercontinental Evangelist {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor J.T Kalejaiye
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Intercontinental Youth Pastor {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Belemina Obunge
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Intercontinental Prayer Coordinator {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Peter Olawale
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Intercontinental Music Director {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Kunle Ajayi
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Intercontinental Financial Controller {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Joseph Adeyokunnu
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Intercontinental CSR Coordinator {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Idowu Iluyomade
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                  textAlign: 'center',
                }}>
                Intercontinental Security Director {''}
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  - Pastor Oke Mofunaya
                </Text>
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
                w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(15),
            }}>
            <CustomButton restyle={{width: '95%'}} text={'Read More'} />
          </View>
        </View>
        <View style={{height: verticalScale(95)}} />
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
    </View>
    </>
 
  );
};

export default RccgStructure;

const styles = StyleSheet.create({});
