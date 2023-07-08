import {
  StyleSheet,
  View,
  Dimensions,
  useColorScheme,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Color} from '../../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import DetailsCard from '../../../components/Card/DetailsCard';
import {active_event} from '../../../redux/actions/UserAction';
import moment from 'moment';
import { useSelector } from 'react-redux';
import SkeletonLoader from '../../../components/Loader/SkeletonLoader';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Events = () => {
  const event = useSelector(state => state.activeEvents);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
    }, []),
  );
  const Theme = useSelector(state => state.mode)

  return (
    <View
      style={[
        {
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        },
        styles.Container,
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
            // marginTop: verticalScale(10),
          }}>
          {event.length > 0 ? (
            <>
              {event?.map((item, index) => {
                console.log('item.start_time', item.start_time)
                return (
                    <DetailsCard
                      key={item.id}
                      data={item}
                      onPress={() => {
                        navigation.navigate('EventScreen', {id: item.id});
                      }}
                      title={item.title}
                      manual={item.country}
                      source={{uri: item.image}}
                      resize={'contain'}
                      TimeTrue={true}
                      date={moment(item.start_date).format('MMM Do, YYYY.')}
                      time={item.start_time}
                      MainBoxRestyle={{
                        marginTop: verticalScale(12),
                      }}
                    />
                  
                );
              })}
            </>
          ) : (
            <View style={{
              // flexDirection: ''
            }}>
            <SkeletonLoader />
            <View style={{height: 0,marginVertical:5}} />
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
        <View style={{height: verticalScale(10)}} />
      </ScrollView>
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  border: {
    borderBottomWidth: scale(3),
    marginTop: verticalScale(20),
    borderColor: Color.BorderColor,
    borderBottomColor: Color.BorderColor,
  },

  ImageView: {
    alignItems: 'center',
  },
  DateStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins600,

    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
  TitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins700,
  },
});
