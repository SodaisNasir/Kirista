import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  ScrollView,
  Dimensions,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useState} from 'react';
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
import {parish} from '../../redux/actions/UserAction';
import { useSelector } from 'react-redux';
import SkeletonLoader from '../../components/Loader/SkeletonLoader';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const FeaturedParishes = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  // console.log('data sadf', data[0].id)
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)


  useFocusEffect(
    useCallback(() => {
      parish(setData);
    }, []),
  );
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={[
          styles.Container,
          {
            backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
          },
        ]}>
        <Header
          text={applanguage.FeaturedParishes}
          AuthHeaderStyle={{
            marginTop: Platform.OS == 'ios' ? verticalScale(-25) : 0,
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(65)
                  : verticalScale(80)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(50)
                : verticalScale(50),
            paddingTop:
              w >= 768 && h >= 1024
                ? moderateVerticalScale(7)
                : moderateVerticalScale(10),
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
              marginTop: verticalScale(10),
            }}>
            {data.length > 0 ? (
              <>
                {data?.map(item => {
                  return (
                    <DetailsCard
                      key={item.id}
                      data={item}
                      onPress={() => {
                        navigation.navigate('ViewParish', {
                          id: item.id,
                        });
                      }}
                      source={{uri: item.image}}
                      // title="RCCG"
                      manual={item.title}
                      resize={'contain'}
                      PlaceTrue={true}
                      Place={item.location}
                      MainBoxRestyle={{
                        marginTop: verticalScale(10),
                      }}
                    />
                  );
                })}
              </>
            ) : (
              <View style={{
                // flexDirection: '',
                marginTop:scale(20)
              }}>
              <SkeletonLoader />
              <View style={{height: 0,marginVertical:5}} />
              <SkeletonLoader />
              <View style={{height: 0,marginVertical:5}} />
              <SkeletonLoader />
              <View style={{height: 0,marginVertical:5}} />
              <SkeletonLoader />
                </View>
            )}
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
