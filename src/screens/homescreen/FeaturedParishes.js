import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Color} from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import DetailsCard from '../../components/Card/DetailsCard';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const FeaturedParishes = props => {
  const Theme = useColorScheme() === 'dark';

  // const data = [
  //   {
  //     id: 1,
  //     title: 'RCCG',
  //     manual: 'Central Parish',
  //     image: require('../../src/assets/images/parishsmall_1.png'),
  //     country: 'Abuja',
  //   },

  //   {
  //     id: 2,
  //     title: 'RCCG',
  //     manual: 'Precious Ambassadors',
  //     image: require('../../src/assets/images/parishsmall_2.png'),
  //     country: 'Ghana',
  //   },

  //   {
  //     id: 3,
  //     title: 'RCCG',
  //     manual: 'Salvation Centre',
  //     image: require('../../src/assets/images/parishsmall_3.png'),
  //     country: 'Togo',
  //   },

  //   {
  //     id: 4,
  //     title: 'RCCG',
  //     manual: 'Salvation Centre',
  //     image: require('../../src/assets/images/parishsmall_3.png'),
  //     country: 'Togo',
  //   },
  //   {
  //     id: 5,
  //     title: 'RCCG',
  //     manual: 'Precious Ambassadors',
  //     image: require('../../src/assets/images/parishsmall_2.png'),
  //     country: 'Ghana',
  //   },
  //   {
  //     id: 6,
  //     title: 'RCCG',
  //     manual: 'Salvation Centre',
  //     image: require('../../src/assets/images/parishsmall_3.png'),
  //     country: 'Togo',
  //   },
  // ]

  return (
    <SafeAreaView
      style={[
        styles.Container,
        {
          backgroundColor: Theme ? Color.DarkTheme : Color.White,
        },
      ]}>
      <Header text={'Featured Parishes'} />
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
          resize={'cover'}
          TimeTrue={true}
          date={'November 09, 2023'}
          time={'4PM'}
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
          resize={'cover'}
          manual="Precious Ambassadors "
          TimeTrue={true}
          date={'November 09, 2023'}
          time={'4PM'}
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
          resize={'cover'}
          manual="Salvation Centre"
          TimeTrue={true}
          date={'November 09, 2023'}
          time={'4PM'}
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
          resize={'cover'}
          manual="Salvation Centre"
          TimeTrue={true}
          date={'November 09, 2023'}
          time={'4PM'}
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
    </SafeAreaView>
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
