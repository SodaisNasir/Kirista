import React, {useEffect} from 'react';
import {useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  useColorScheme,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import Header from './Header';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const SelectCountry = ({navigation}) => {
  const Theme = useColorScheme() === 'dark';
  useEffect(() => {}, [Theme]);
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  });
  const DATA = [
    {
      id: '1',
      continent: 'West Africa 1',
      countries: [
        {
          country: 'Nigeria (NG)',
          code: '+234',
          flag: require('../assets/images/nig.png'),
        },

        {
          country: 'Benin (BJ)',
          code: '+229',
          flag: require('../assets/images/arg.png'),
        },

        {
          country: 'Burkina Faso',
          code: '+226',
          flag: require('../assets/images/aus.png'),
        },

        {
          country: 'Ghana (GH)',
          code: '+233',
          flag: require('../assets/images/ghana.png'),
        },

        {
          country: 'Niger (NE)',
          code: '+227',
          flag: require('../assets/images/niger.png'),
        },

        {
          country: 'Togo',
          code: '+228',
          flag: require('../assets/images/bang.png'),
        },
      ],
    },

    {
      id: '2',
      continent: 'West Africa 2',
      countries: [
        {
          country: 'Cote D’Ivoire',
          code: '+225',
          flag: require('../assets/images/nig.png'),
        },

        {
          country: 'Liberia',
          code: '+229',
          flag: require('../assets/images/aus.png'),
        },

        {
          country: 'Mali (ML)',
          code: '+223',
          flag: require('../assets/images/ghana.png'),
        },

        {
          country: 'Sierra Leone (SL)',
          code: '+232',
          flag: require('../assets/images/bang.png'),
        },
      ],
    },
    {
      id: '3',
      continent: 'West Africa 3',
      countries: [
        {
          country: 'Gambia (GM)',
          code: '+220',
          flag: require('../assets/images/nig.png'),
        },

        {
          country: 'Senegal (SN)',
          code: '+221',
          flag: require('../assets/images/bang.png'),
        },

        {
          country: 'Mauritania',
          code: '+222',
          flag: require('../assets/images/ghana.png'),
        },

        {
          country: 'Sierra Leone (SL)',
          code: '+232',
          flag: require('../assets/images/arg.png'),
        },
        {
          country: 'Guinea Conakry',
          code: '+224',
          flag: require('../assets/images/niger.png'),
        },
      ],
    },

    {
      id: '4',
      continent: 'Central Africa',
      countries: [
        {
          country: 'Cameroon (CM)',
          code: '+237',
          flag: require('../assets/images/nig.png'),
        },

        {
          country: 'Central Africa Republic',
          code: '+236',
          flag: require('../assets/images/aus.png'),
        },

        {
          country: 'Congo (CG)',
          code: '+242',
          flag: require('../assets/images/bang.png'),
        },

        {
          country: 'Equatorial Guinea',
          code: '+240',
          flag: require('../assets/images/niger.png'),
        },

        {
          country: 'Sao Tome',
          code: '+239',
          flag: require('../assets/images/ghana.png'),
        },

        {
          country: 'Chad (TD)',
          code: '+235',
          flag: require('../assets/images/aus.png'),
        },

        {
          country: 'Gabon',
          code: '+241',
          flag: require('../assets/images/arg.png'),
        },
      ],
    },
    {
      id: '5',
      continent: 'Other Countries',
      countries: [
        {
          country: 'Argentina (AR)',
          code: '+54',
          flag: require('../assets/images/nig.png'),
        },

        {
          country: 'Australia (AU)',
          code: '+61',
          flag: require('../assets/images/arg.png'),
        },
        {
          country: 'Aruba (AW)',
          code: '+297',
          flag: require('../assets/images/aus.png'),
        },

        {
          country: 'Bosnia and Herzegovina (BA)',
          code: '+387',
          flag: require('../assets/images/bang.png'),
        },
      ],
    },
  ];
  return (
    <SafeAreaView
      style={[
        styles.Container,
        Theme === 'dark'
          ? {backgroundColor: Color.DarkTheme}
          : {backgroundColor: Color.White},
      ]}>
      <View
        style={[
          //   Theme === 'dark'
          //     ? {borderColor: Color.AcitivityBorderColorBlack}
          //     : {borderColor: Color.AcitivityBorderColorWhie},
          styles.backBox,
        ]}>
        <Header text={'Select Country'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.MainBox}>
          <FlatList
            scrollEnabled={false}
            data={DATA}
            renderItem={({item}) => (
              <View
                style={[
                  {marginTop: verticalScale(5)},
                  Theme === 'dark'
                    ? {borderBottomColor: Color.Black}
                    : {borderBottomColor: Color.Main},
                ]}>
                <View
                  style={{
                    marginVertical: verticalScale(10),
                    borderBottomColor: Color.BorderColor,
                    borderBottomWidth: 1,
                    // borderTopColor:Color.BorderColor,
                    // borderTopWidth:1,
                    // backgroundColor:'red',
                    height:
                      w >= 768 && h >= 1024
                        ? verticalScale(30)
                        : verticalScale(40),
                  }}>
                  <Text
                    style={[
                      styles.title,
                      Theme === 'dark'
                        ? {color: Color.TextDark}
                        : {color: Color.Black},
                    ]}>
                    {item.continent}
                  </Text>
                </View>

                <FlatList
                  style={{
                    // paddingHorizontal: moderateScale(10),
                    borderBottomColor: Color.BorderColor,
                    borderBottomWidth: 1,
                  }}
                  data={item.countries}
                  renderItem={({item}) => (
                    <TouchableOpacity>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        
                      }}>
                      <View style={{marginVertical: verticalScale(5)}}>
                        <Text
                          style={[
                            Theme === 'dark'
                              ? {color: Color.White}
                              : {color: Color.DarkTextColor},

                            ,
                            styles.CountryStyle,
                          ]}>
                          {item.country}
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: verticalScale(5),
                        }}>
                        <View
                          style={{
                            width:
                              w >= 768 && h >= 1024 ? scale(20) : scale(30),
                            height:
                              w >= 768 && h >= 1024
                                ? verticalScale(15)
                                : verticalScale(20),
                            marginHorizontal:
                              w >= 768 && h >= 1024 ? scale(5) : scale(10),
                          }}>
                          <Image source={item.flag} style={styles.ImageUri} />
                        </View>

                        <View>
                          <Text
                            style={[
                              Theme === 'dark'
                                ? {color: Color.White}
                                : {color: Color.DarkTextColor},

                              ,
                              styles.CodeStyle,
                            ]}>
                            {item.code}
                          </Text>
                        </View>
                      </View>
                    </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />
                {/* <View style={{height: verticalScale(10),borderBottomColor: Color.BorderColor,
                        borderBottomWidth: 1,}} /> */}
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{height: verticalScale(40)}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  MainBox: {
    paddingHorizontal: moderateScale(20),
  },
  title: {
    fontFamily: Font.Poppins300,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(14),
    color: Color.DarkTextColor,
    // backgroundColor:'red'
  },
  CountryStyle: {
    fontFamily: Font.Poppins500,
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
  },
  CodeStyle: {
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
  },
  ImageUri: {
    height: '100%',
    width: '100%',
  },
});
export default SelectCountry;
