import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  ScrollView,
  Dimensions,
  useColorScheme,
} from 'react-native';
import React, {useCallback} from 'react';
import {Color} from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import DetailsCard from '../../components/Card/DetailsCard';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const FeaturedParishes = props => {
  const navigation = useNavigation();
  const Theme = useColorScheme() === 'dark';
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={[
          styles.Container,
          {
            backgroundColor: Theme ? Color.DarkTheme : Color.White,
          },
        ]}>
        <Header
          text={'Featured Parishes'}
          AuthHeaderStyle={{
            paddingTop:
              w >= 768 && h >= 1024
                ? moderateVerticalScale(10)
                : moderateVerticalScale(10),
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(70)
                  : verticalScale(70)
                : w >= 768 && h >= 1024
                ? verticalScale(50)
                : w <= 450 && h <= 750
                ? verticalScale(50)
                : verticalScale(30),
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
              marginTop: verticalScale(10),
            }}>
            <DetailsCard
              source={require('../../assets/images/parishsmall_1.png')}
              title="RCCG "
              manual="Central Parish"
              resize={'contain'}
              PlaceTrue={true}
              Place={'Abuja'}
              MainBoxRestyle={{
                paddingBottom:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth: 1,
              }}
            />
            <DetailsCard
              source={require('../../assets/images/parishsmall_2.png')}
              title="RCCG"
              resize={'contain'}
              manual="Precious Ambassadors "
              PlaceTrue={true}
              Place={'Ghana'}
              MainBoxRestyle={{
                paddingBottom:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth: 1,
              }}
            />

            <DetailsCard
              source={require('../../assets/images/parishsmall_3.png')}
              title="RCCG"
              resize={'contain'}
              Place={'Togo'}
              manual="Salvation Centre"
              PlaceTrue={true}
              MainBoxRestyle={{
                paddingBottom:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth: 1,
              }}
            />

            <DetailsCard
              source={require('../../assets/images/parishsmall_3.png')}
              title="RCCG"
              resize={'contain'}
              manual="Salvation Centre"
              PlaceTrue={true}
              Place={'Togo'}
              MainBoxRestyle={{
                paddingBottom:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth: 1,
              }}
            />
            <DetailsCard
              source={require('../../assets/images/parishsmall_2.png')}
              title="RCCG"
              resize={'contain'}
              manual="Precious Ambassadors "
              PlaceTrue={true}
              Place={'Ghana'}
              MainBoxRestyle={{
                paddingBottom:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth: 1,
              }}
            />
            <DetailsCard
              source={require('../../assets/images/parishsmall_3.png')}
              title="RCCG"
              resize={'contain'}
              manual="Salvation Centre"
              PlaceTrue={true}
              Place={'Togo'}
              MainBoxRestyle={{
                paddingBottom:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                // backgroundColor:'red'
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View style={{height: verticalScale(75)}} />
        </ScrollView>
      </View>
    </>
  );
};

export default FeaturedParishes;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  border: {
    borderBottomWidth: scale(3),
    marginTop: verticalScale(20),
    borderColor: Color.BorderColor,
    borderBottomColor: Color.BorderColor,
  },

  ImageView: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  CountryStyle: {
    // color: Color.BoldTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
  TitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins700,
  },
});
