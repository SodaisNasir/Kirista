import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  useColorScheme,
  StatusBar,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Header from '../components/Header';
import {Color} from '../utils/Colors';
import {Font} from '../utils/font';
import ReadNavigator from '../components/ReadNavigator';
import { useSelector } from 'react-redux';
import { getPerishCountry, getPerishProvince, getPerishRegion } from '../redux/actions/UserAction';

const RegionCountry = ({navigation,route}) => {
    const {type,setSelectedLanguage} = route.params

  
  
    const Theme = useSelector(state => state.mode)
    const w = useWindowDimensions().width;
    const h = useWindowDimensions().height;
    const [selected, setSelected] = useState();
    const [data,setData] = useState([])

    useLayoutEffect(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
      if(type == 'region'){
        getPerishRegion(setData)
      }else if(type == 'province'){
        getPerishProvince(setData)
      }else{
        getPerishCountry(setData)
      }
    }, []);

    
  

  
    const handleLanguageSelect = (item) => {
      const nameC = type == 'region' ? item.region : type == 'province' ? item.province : item.country
      navigation.goBack();
      setSelectedLanguage(nameC)
      setSelected(nameC)
    }
  
  
  
    const Item = ({data}) => (
      <TouchableOpacity
        style={[
          {
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(28) : moderateScale(20),
            paddingVertical:
              w >= 768 && h >= 1024
                ? moderateVerticalScale(16)
                : moderateScale(13),
          },
          // styles.item,
        ]}
        onPress={() => handleLanguageSelect(data)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            //   backgroundColor:'red',
            bottom: scale(5),
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  {
                    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(16),
                    color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                  },
                  styles.title,
                ]}>
                {type == 'region' ? data.region : type == 'province' ? data.province : data.country}
           <Text
                  style={[
                    {
                      fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
                      color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                    },
                    styles.Short,
                  ]}>
                  {' '}
                  {data.Short}
                </Text>
              </Text>
            </View>
          </View>
  
          <View style={{justifyContent: 'center', right: scale(5)}}>
            <View
              style={{
                height: w >= 768 && h >= 1024 ? scale(12) : scale(16),
                width: w >= 768 && h >= 1024 ? scale(12) : scale(16),
                backgroundColor: Color.White,
                borderRadius: scale(50),
                borderColor: Color.Main,
                borderWidth: scale(1.5),
                marginBottom: verticalScale(15),
              }}>
              {selected == data.id ? (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: scale(80),
                  }}>
                  <View
                    style={{
                      height: w >= 768 && h >= 1024 ? scale(5) : scale(7),
                      width: w >= 768 && h >= 1024 ? scale(5) : scale(7),
                      backgroundColor: Color.Main,
                      borderRadius: scale(80),
                    }}
                  />
                </View>
              ) : null}
            </View>
          </View>
        </View>
        <View
          style={[
            {
              borderBottomColor: Theme === 'dark'
                ? Color.DarkBorderColor
                : Color.BorderColor,
            },
            styles.BorderBottom,
          ]}
        />
      </TouchableOpacity>
    );
    return (
      <>
      <SafeAreaView
          style={{
            backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
          }}
        />
        {/* <StatusBar backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor }/> */}
      <View
        style={[
          {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
          },
          styles.Container,
        ]}>
       
        <Header text={type == 'province' ? 'Province' : type == 'region' ? 'Region' : 'Country'}  />
         {/* AuthHeaderStyle={{
              
              height:
              Platform.OS == 'android' ? verticalScale(100) :
                w >= 768 && h >= 1024
                  ? verticalScale(50)
                  : w <= 450 && h <= 750
                  ? verticalScale(65)
                  : verticalScale(30),
            }}/> */}
        <FlatList
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.id}
          style={{marginTop: verticalScale(20)}}
        />
  
        <View style={{height: verticalScale(10)}} />
      </View>
      </>
    );
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
    },
  
    item: {
      paddingVertical: moderateVerticalScale(12),
      // height:verticalScale(70)
    },
    BorderBottom: {
      borderBottomWidth: scale(1),
    },
    title: {
      fontFamily: Font.Poppins600,
    },
  
    Short: {
      fontFamily: Font.Poppins400,
    },
  });
export default RegionCountry
