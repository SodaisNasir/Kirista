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

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Events = () => {
  const [event, setEvent] = useState([]);

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      active_event(setEvent);
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
            marginTop: verticalScale(10),
          }}>
          {event.length > 0 ? (
            <>
              {event?.map((item, index) => {
                return (
                  index < 4 && (
                    <DetailsCard
                      key={item.id}
                      data={item}
                      onPress={() => {
                        navigation.navigate('EventScreen', {id: item.id});
                      }}
                      source={{uri: item.image}}
                      manual={item.title}
                      // title="West Coast 2 Regional"
                      resize={'cover'}
                      TimeTrue={true}
                      date={moment(item.start_date).format('MMM Do YY')}
                      time={item.start_time}
                      MainBoxRestyle={{
                        marginTop: verticalScale(12),
                      }}
                    />
                  )
                );
              })}
            </>
          ) : (
            <View
              style={{
                marginTop: '70%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator
                size="large"
                color={Theme === 'dark' ? Color.White : Color.DarkTheme}
              />
            </View>
          )}
         
        </View>
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
