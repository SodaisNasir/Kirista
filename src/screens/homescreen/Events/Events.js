import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
 import { Color } from '../../../utils/Colors';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import {scale, verticalScale} from 'react-native-size-matters';
  import {Font} from '../../../utils/font';
  import HomeHeader from '../../../components/HomeHeader';
import { useNavigation } from '@react-navigation/native';
 
  
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;
  
  const Events = props => {
    const navigation =  useNavigation();
    const data = [
      {
        id: 1,
        title: 'West Coast 2 Regional ',
        manual: 'Convention',
        image: require('../../../assets/images/event_1.png'),
        date: 'June 22, 2023.',
        time: '4PM',
      },
  
      {
        id: 2,
        title: 'West Coast 3 Regional ',
        manual: 'Convention',
        image: require('../../../assets/images/event_2.png'),
        date: 'July 7, 2023.',
        time: '4PM',
      },
  
      {
        id: 3,
        title: 'West Coast 1 Regional ',
        manual: 'Convention',
        image: require('../../../assets/images/event_3.png'),
        date: 'July 21, 2023.',
        time: '4PM',
      },
  
      {
        id: 4,
        title: 'Abuja Special Holy Ghost',
        manual: 'Congress',
        image: require('../../../assets/images/event_4.png'),
        date: 'November 09, 2023',
        time: '4PM',
      },
      {
        id: 5,
        title: 'West Coast 1 Regional ',
        manual: 'Convention',
        image: require('../../../assets/images/event_1.png'),
        date: 'July 21, 2023',
        time: '4PM',
      },
    ];
  
    return (
      <SafeAreaView style={styles.Container}>
        <HomeHeader
          EventRestyle={{color: Color.Main, fontFamily: Font.Poppins700}}
          EventUnderLineStyle={{
            width: '55%',
            backgroundColor: Color.Main,
            height: verticalScale(2),
            bottom: scale(4),
          }}
        />
    
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
              onPress={ ()=>navigation.navigate('EventScreen')}
                style={{
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(95)
                      : verticalScale(120),
                    
  
                  flexDirection: 'row',
                  marginHorizontal: verticalScale(20),
                  overflow: 'hidden',
                  borderBottomWidth: 1,
                  borderColor: Color.BorderColor,
                }}>
                <View
                  style={{
                    flex: w >= 768 && h >= 1024 ? 0.9 : 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: w >= 768 && h >= 1024 ? '60%' : '100%',
                      width: scale(90),
                    }}>
                    <Image
                      resizeMode="contain"
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      source={item.image}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: w >= 768 && h >= 1024 ? 3 : 2.1,
                    paddingHorizontal:
                      w >= 768 && h >= 1024
                        ? verticalScale(0)
                        : verticalScale(15),
                    marginVertical: verticalScale(25),
                  }}>
                  <View
                    style={{
                      // height: verticalScale(30),
  
                      // backgroundColor: 'yellow',
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.TitleStyle}>{item.title}</Text>
                    <Text style={[{bottom: scale(3)}, styles.TitleStyle]}>
                      {item.manual}
                    </Text>
                  </View>
                  <View
                    style={{
                      // height:
                      //   w >= 768 && h >= 1024 ? verticalScale(20) : scale(40),
                      justifyContent: 'space-around',
                      right: scale(2),
                      //   flexDirection:'row',
                    }}>
                    <Text style={[styles.DateStyle]}>
                      {' '}
                      {item.date}{'   '}
                      <Text
                        style={{
                          color: Color.BoldTextColor,
                          fontFamily: Font.Poppins700,
  
                          fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                        }}>
                        .
                      </Text>{'   '}
                      {item.time}{' '}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    );
  };
  
  export default Events;
  
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
    DateStyle: {
      color: Color.BoldTextColor,
      fontFamily: Font.Poppins600,
  
      fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
    },
    TitleStyle: {
      color: Color.DarkTextColor,
      fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
      fontFamily: Font.Poppins700,
      // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',
  
      // paddingHorizontal: verticalScale(50),
    },
  });
  