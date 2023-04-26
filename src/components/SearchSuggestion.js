import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import BookSvg from '../assets/icons/book-1.svg';
import BookDark from '../assets/icons/book_dark.svg';
import HouseSvg from '../assets/icons/house-2.svg';
import HouseDark from '../assets/icons/house_dark.svg';
import CalendarSvg from '../assets/icons/calendar-2.svg';
import CalendarDark from '../assets/icons/calendar_dark.svg';
import PersonSvg from '../assets/icons/person_outline.svg';
import PersonDark from '../assets/icons/person_dark.svg';
import {Font} from '../utils/font';
import {Color} from '../utils/Colors';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const SearchSuggestion = () => {
  const Theme = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={{
        backgroundColor: Theme ? Color.DarkTheme : Color.White,
        paddingHorizontal:
          w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(0),
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop:
              w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(15),
          }}>
          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(8),
              flexDirection: 'row',
            }}>
            {Theme ? (
              <BookDark
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            ) : (
              <BookSvg
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            )}

            <View style={{paddingHorizontal: moderateScale(10)}}>
              <Text
                style={[
                  {color: Theme ? Color.White : Color.DarkTextColor},
                  styles.TextStyle,
                ]}>
                Sunday Student Manual
              </Text>
            </View>
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(8),
              flexDirection: 'row',
            }}>
            {Theme ? (
              <BookDark
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            ) : (
              <BookSvg
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            )}

            <View style={{paddingHorizontal: moderateScale(10)}}>
              <Text
                style={[
                  {color: Theme ? Color.White : Color.DarkTextColor},
                  styles.TextStyle,
                ]}>
                Sunday Student Manual
              </Text>
            </View>
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(8),
              flexDirection: 'row',
            }}>
            {Theme ? (
              <HouseDark
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            ) : (
              <HouseSvg
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            )}

            <View style={{paddingHorizontal: moderateScale(10)}}>
              <Text
                style={[
                  {color: Theme ? Color.White : Color.DarkTextColor},
                  styles.TextStyle,
                ]}>
                School of Disciple
              </Text>
            </View>
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(8),
              flexDirection: 'row',
            }}>
            {Theme ? (
              <HouseDark
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            ) : (
              <HouseSvg
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            )}

            <View style={{paddingHorizontal: moderateScale(10)}}>
              <Text
                style={[
                  {color: Theme ? Color.White : Color.DarkTextColor},
                  styles.TextStyle,
                ]}>
                RCCG Central Parish{' '}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(8),
              flexDirection: 'row',
            }}>
            {Theme ? (
              <PersonDark
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            ) : (
              <PersonSvg
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            )}

            <View style={{paddingHorizontal: moderateScale(10)}}>
              <Text
                style={[
                  {color: Theme ? Color.White : Color.DarkTextColor},
                  styles.TextStyle,
                ]}>
                Pastor E.A. Adeboye
              </Text>
            </View>
          </View>

          <View
            style={{
              marginVertical:
                w >= 768 && h >= 1024 ? verticalScale(5) : verticalScale(8),
              flexDirection: 'row',
            }}>
            {Theme ? (
              <CalendarDark
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            ) : (
              <CalendarSvg
                height={
                  w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(20)
                }
                width={25}
              />
            )}
            <View style={{paddingHorizontal: moderateScale(10)}}>
              <Text
                style={[
                  {color: Theme ? Color.White : Color.DarkTextColor},
                  styles.TextStyle,
                ]}>
                Sunday Student Manual
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchSuggestion;

const styles = StyleSheet.create({
  TextStyle: {
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
  },
});
