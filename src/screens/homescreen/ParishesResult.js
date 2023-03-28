import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ScrollView,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  import {Color} from '../../utils/Colors';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import {scale, verticalScale} from 'react-native-size-matters';
  import {Font} from '../../utils/font';
  import Header from '../../components/Header';
  
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;
  
  const ParishesResult = props => {
    const data = [
      {
        id: 1,
        title: 'RCCG',
        manual: 'Central Parish',
        image: require('../../../src/assets/images/parishsmall_1.png'),
        country: 'Abuja',
      },
  
      {
        id: 2,
        title: 'RCCG',
        manual: 'Precious Ambassadors',
        image: require('../../../src/assets/images/parishsmall_2.png'),
        country: 'Ghana',
      },
  
      {
        id: 3,
        title: 'RCCG',
        manual: 'Salvation Centre',
        image: require('../../../src/assets/images/parishsmall_3.png'),
        country: 'Togo',
      },
  
      {
        id: 4,
        title: 'RCCG',
        manual: 'Salvation Centre',
        image: require('../../../src/assets/images/parishsmall_3.png'),
        country: 'Togo',
      },
      {
        id: 5,
        title: 'RCCG',
        manual: 'Precious Ambassadors',
        image: require('../../../src/assets/images/parishsmall_2.png'),
        country: 'Ghana',
      },
      {
        id: 6,
        title: 'RCCG',
        manual: 'Salvation Centre',
        image: require('../../../src/assets/images/parishsmall_3.png'),
        country: 'Togo',
      },
    ];
  
    return (
      <SafeAreaView style={styles.Container}>
        <Header text={'Featured Parishes'} />
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height:
                    w >= 768 && h >= 1024
                      ? verticalScale(95)
                      : verticalScale(120),
                  // marginTop: verticalScale(10),
            
                  flexDirection: 'row',
                  marginHorizontal: verticalScale(20),
                  // marginBottom: verticalScale(20),
                  // marginVertical: verticalScale(10),
                  // paddingVertical: verticalScale(20),
                  // borderRadius: 12,
                  overflow: 'hidden',
                  borderBottomWidth: 1,
                  // paddingVertical: verticalScale(15),
                  borderColor: Color.BorderColor,
                }}>
                <View
                  style={{
                    flex: w >= 768 && h >= 1024? 0.9 : 1 ,
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
                <View style={{flex: w >= 768 && h >= 1024? 3 : 2.1 ,
                    paddingHorizontal:w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(15), marginVertical: verticalScale(25)}}>
                  <View
                    style={{
                      // height: verticalScale(30),
  
                      // backgroundColor: 'yellow',
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.TitleStyle}>{item.title}</Text>
                    <Text
                      style={[
                        {bottom:scale(3)},
                        styles.TitleStyle,
                      ]}>
                      {item.manual}
                    </Text>
                  </View>
                  <View
                    style={{
        
                      height:
                        w >= 768 && h >= 1024 ? verticalScale(20) : scale(40),
                      justifyContent: 'center',
                      right:scale(2)
                    }}>
                    <Text style={styles.CountryStyle}> {item.country}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  };
  
  export default ParishesResult;
  
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
      color: Color.BoldTextColor,
      fontFamily: Font.Poppins400,
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
  