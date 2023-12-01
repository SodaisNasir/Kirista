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
import { useDispatch, useSelector } from 'react-redux';
import SkeletonLoader from '../../components/Loader/SkeletonLoader';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const FeaturedParishes = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // console.log('data sadf', data[0].id)
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)
  const parishData = useSelector(state => state.parishData)

  useFocusEffect(
    useCallback(() => {
      dispatch(parish(setData))
    }, []),
  );
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
        edges={["top"]}
    
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
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(80)
                  : verticalScale(60)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(60)
                : verticalScale(40),
            justifyContent: 'center',
            paddingTop:
              Platform.OS == 'android'
                ? moderateVerticalScale(20)
                : w >= 768 && h >= 1024
                ? moderateVerticalScale(25)
                : 0,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
              marginTop: verticalScale(10),
            }}>
            {parishData.length > 0 ? (
              <>
                {parishData?.map((item,index) => {
                  return (
                   (index < 21 && <DetailsCard
                      key={item.id}
                      data={item}
                      onPress={() => {
                        navigation.navigate('ViewParish', {
                          id: item.id,
                          item:item
                        });
                      }}
                      source={item.image}
                      // title="RCCG"
                      manual={item.title}
                      resize={'contain'}
                      PlaceTrue={true}
                      Place={item.location}
                      MainBoxRestyle={{
                        marginTop: verticalScale(10),
                      }}
                    />)
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
