import {
  StyleSheet,
  View,
  Dimensions,
  useColorScheme,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useCallback} from 'react';
import {Color} from '../../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import HomeHeader from '../../../components/HomeHeader';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import DetailsCard from '../../../components/Card/DetailsCard';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Events = () => {
  const iosTab = w >= 820 && h >= 1180;
  const navigation = useNavigation();
  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    }),
  );

  const Theme = useColorScheme() === 'dark';

  return (
    

      <View
        style={[
          {
            backgroundColor: Theme ? Color.DarkTheme : Color.White,
            marginTop:
              Platform.OS === 'ios' && w <= 450 && h <= 750
                ? verticalScale(20)
                : Platform.OS === 'ios'
                ? verticalScale(-30)
                : 0,
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
            <DetailsCard
              onPress={() => navigation.navigate('EventScreen')}
              source={require('../../../assets/images/event_1.png')}
              title="West Coast 2 Regional"
              manual="Convention"
              resize={'cover'}
              TimeTrue={true}
              date={'November 09, 2023'}
              time={'4PM'}
              MainBoxRestyle={{
                paddingBottom:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                borderBottomColor: Theme ? Color.DarkBorder : Color.BorderColor,
                borderBottomWidth: 1,
              }}
            />
            <DetailsCard
              source={require('../../../assets/images/event_2.png')}
              title="West Coast 3 Regional"
              resize={'cover'}
              manual="Convention"
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
              source={require('../../../assets/images/event_3.png')}
              title="West Coast 3 Regional"
              resize={'cover'}
              manual="Convention"
              PlaceTrue={true}
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
              source={require('../../../assets/images/EventScreenImage1.png')}
              title="Abuja Special Holy Ghost"
              resize={'cover'}
              manual="Congress"
              PlaceTrue={true}
              // Place="Ghana"
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
              source={require('../../../assets/images/event_2.png')}
              title="West Coast 3 Regional"
              resize={'cover'}
              manual="Convention"
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
