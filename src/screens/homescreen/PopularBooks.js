import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Color} from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import DetailsCard from '../../components/Card/DetailsCard';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const PopularBooks = props => {
  const fourInchPotrait = w <= 350 && h <= 600;
  const Theme = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const books_data = [
    {
      id: 1,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book1.png'),
      year: '2023',
    },

    {
      id: 2,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
    },

    {
      id: 3,
      title: 'Sunday School Teachers',
      manual: 'Manual',
      image: require('../../../src/assets/images/book1.png'),
      year: '2023',
    },

    {
      id: 4,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
    },
    {
      id: 5,
      title: 'Sunday School Teachers',
      manual: 'Manual',
      image: require('../../../src/assets/images/book2.png'),
      year: '2023',
    },
  ];

  return (
    <SafeAreaView
      style={[
        {backgroundColor: Theme ? Color.DarkTheme : Color.White},
        styles.Container,
      ]}>
      <Header text={'Popular Books'} />

      <View
        style={{
          paddingHorizontal:
            w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={books_data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('ViewManual')}>
                <View
                  style={{
                    height:
                      w >= 768 && h >= 1024
                        ? verticalScale(80)
                        : verticalScale(100),

                    flexDirection: 'row',
                    overflow: 'hidden',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <View
                      style={{
                        height: w >= 768 && h >= 1024 ? '68%' : '100%',
                        width: w >= 768 && h >= 1024 ? scale(60) : scale(100),
                      }}>
                      <Image
                        resizeMode="contain"
                        style={{
                          height: '100%',
                          width: '100%',
                        }}
                        source={item?.image}
                      />
                    </View>
                  </View>
                  <View style={{marginVertical: verticalScale(20)}}>
                    <View
                      style={{
                        // height: verticalScale(30),

                        justifyContent: 'center',
                      }}>
                      <Text
                        style={[
                          {
                            color: Theme ? Color.White : Color.DarkTextColor,
                          },
                          styles.BooksTitleStyle,
                        ]}>
                        {item?.title}
                      </Text>
                      <Text
                        style={[
                          {
                            lineHeight: fourInchPotrait
                              ? verticalScale(18)
                              : scale(16),
                          },
                          styles.BooksTitleStyle,
                          {
                            color: Theme ? Color.White : Color.DarkTextColor,
                          },
                        ]}>
                        {item.manual}
                      </Text>
                    </View>
                    <View
                      style={{
                        height:
                          w >= 768 && h >= 1024
                            ? verticalScale(20)
                            : verticalScale(40),
                        justifyContent: 'center',
                      }}>
                      <Text style={styles.YearStyle}> {item?.year}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        {/* <View style ={{height:verticalScale(75)}}/> */}
      </View>
    </SafeAreaView>
  );
};

export default PopularBooks;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
   
  },
  border: {
    borderBottomWidth: scale(3),
    marginTop: verticalScale(20),
    // borderColor: Color.BorderColor,
    borderBottomColor: Color.BorderColor,
  },

  ImageView: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  YearStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(10),
  },
  BooksTitleStyle: {
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(14),
    fontFamily: Font.Poppins600,
  },
  TitleStyle: {
    // color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins600,
    // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

    // paddingHorizontal: verticalScale(50),
  },
});
