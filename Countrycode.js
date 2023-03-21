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
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import { Font } from './src/assets/fonts/PoppinsFont';
// import BackWithName from '../../../../components/BackWithName';
// import CustomSearch from '../../../../components/CustomSearch';
// import {Colors} from '../Kirista/src/assets/colours';
// import {Font} from '../../../../utils/font';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Countrycode = ({navigation}) => {
  const Theme = useColorScheme();
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
      title: 'Nigeria',
      flag: 'https://img.icons8.com/color/256/nigeria-flag.png',
      countrycode: '+234',
      type: 'Nigeria',
    },
    {
      id: '2',
      title: 'Argentina',
      flag: 'https://img.icons8.com/office/256/argentina.png',
      countrycode: '+54',
    },
    {
      id: '3',
      title: 'Australia',
      flag: 'https://img.icons8.com/color/256/australia-flag.png',
      countrycode: '+61',
    },
    {
      id: '4',
      title: 'Aruba',
      flag: 'https://img.icons8.com/color/256/aruba.png',
      countrycode: '+297',
    },
    {
      id: '5',
      title: 'Bosnia and Harzegovina',
      flag: 'https://img.icons8.com/color/256/bosnia-and-herzegovina.png',
      countrycode: '+387',
    },
    {
      id: '6',
      title: 'Bangladesh',
      flag: 'https://img.icons8.com/color/256/bangladesh.png',
      countrycode: '+880',
    },
    {
      id: '7',
      title: 'Bahrain',
      flag: 'https://img.icons8.com/color/256/bahrain.png',
      countrycode: '+973',
    },
    {
      id: '8',
      title: 'Bermuda',
      flag: 'https://img.icons8.com/color/256/bermuda.png',
      countrycode: '+1441',
    },
    {
      id: '9',
      title: 'Benin',
      flag: 'https://img.icons8.com/color/256/benin.png',
      countrycode: '+229',
    },
    {
      id: '10',
      title: 'Bolivia, Plurinational',
      flag: 'https://img.icons8.com/fluency/256/bolivia.png',
      countrycode: '+591',
    },
    {
      id: '11',
      title: 'Brazil',
      flag: 'https://img.icons8.com/color/256/brazil.png',
      countrycode: '+55',
    },
    {
      id: '12',
      title: 'Bahamas',
      flag: 'https://img.icons8.com/color/256/bahamas.png',
      countrycode: '+1242',
    },
  ];
  return (
    <SafeAreaView
      style={[
        styles.Container,
        // Theme === 'dark'
        //   ? {backgroundColor: Colors.ThemeBlack}
        //   : {backgroundColor: Colors.White},
      ]}>
      <View
        style={[
        //   Theme === 'dark'
        //     ? {borderColor: Colors.AcitivityBorderColorBlack}
        //     : {borderColor: Colors.AcitivityBorderColorWhie},
          styles.backBox,
        ]}>
        {/* <BackWithName
          title="Select Country"
          ContainerRestyle={{
            width: '100%',
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(30) : moderateScale(20),
          }}
        /> */}
        {/* <CustomSearch placeholder="Search" SearchBoxrestyle={{marginTop: 0}} /> */}
      </View>
      <View style={styles.MainBox}>
        <FlatList
          // scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity
            onPress={()=>navigation.navigate('SignUp')
            }
              style={[
                styles.item,
                {
                  borderBottomWidth:
                    item.type === 'Nigeria' ? scale(1.5) : scale(0.5),
                  borderBottomColor:
                    item.type === 'Nigeria'
                    //   ? Colors.Homeborder
                    //   : Colors.Homeborder,
                },
              ]}>
              <View
                style={{
                  height: '100%',
                  width: '67%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    styles.title,
                    Theme === 'dark'
                    //   ? {color: Colors.TextDark}
                    //   : {color: Colors.Black},
                  ]}>
                  {item.title}
                </Text>
              </View>
              <View
                style={{
                  height: '100%',
                  width: '33%',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: w >= 768 && h >= 1024 ? scale(20) : scale(30),
                      height:
                        w >= 768 && h >= 1024
                          ? verticalScale(15)
                          : verticalScale(20),
                    }}>
                    <Image
                      source={{
                        uri: item.flag,
                      }}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    height: '100%',
                    width: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={[
                      styles.title1,
                      Theme === 'dark'
                        // ? {color: Colors.TextDark}
                        // : {color: Colors.Black},
                    ]}>
                    {item.countrycode}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        <View style={{height: verticalScale(10)}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  backBox: {
    borderWidth: scale(1.5),
    borderBottomRightRadius: scale(12),
    borderBottomLeftRadius: scale(12),
    borderTopWidth: 0,
    paddingTop: moderateVerticalScale(5),
    paddingBottom: moderateVerticalScale(15),
    marginBottom: verticalScale(10),
  },
  item: {
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    borderBottomWidth: scale(1),
    borderBottomColor: 'black',
    alignItems: 'center',
    height: verticalScale(50),
  },

  title: {
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
    textTransform: 'capitalize',
    fontFamily:Font.Poppins500,
  },

  title1: {
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(15),
    textTransform: 'capitalize',
    fontFamily:Font.Poppins600,
  },
  MainBox: {
    width: w >= 768 && h >= 1024 ? '90%' : '85%',
    alignSelf: 'center',
  },
});
export default Countrycode;