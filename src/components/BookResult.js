import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList,View,useColorScheme,StyleSheet, Dimensions, SafeAreaView } from "react-native";
import DetailsCard from './Card/DetailsCard';
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Color } from "../utils/Colors";
import { useSelector } from "react-redux";
import NoResult from "./NoResult";


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const BookResult = ({data}) => {
  // console.log('data', data)
    const navigation = useNavigation()
    const Theme = useSelector(state => state.mode)

    // const newData = data != null ? data : data
    // console.log('newData', newData)
const getData = data?.filter((item) => item.type == 'books')
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: moderateScale(20)}}>
    <FlatList
      data={getData}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return(
      item.type == 'books' && (  <DetailsCard
        onPress={() => navigation.navigate('ViewManual',{
          item:item
        })}
        source={item?.cover_image}
        title={item?.title}
        resize={'contain'}
        // manual="Teachers Man.."
        PlaceTrue={true}
        Place={item?.release_year}
        MainBoxRestyle={{
          paddingBottom:
            w >= 768 && h >= 1024
              ? verticalScale(10)
              : verticalScale(15),
          marginTop:
            w >= 768 && h >= 1024
              ? verticalScale(10)
              : verticalScale(15),
          // backgroundColor:'red'
          borderBottomColor: Theme === 'dark'
            ? Color.DarkBorder
            : Color.BorderColor,
          borderBottomWidth: 1,
        }}
      />)
      )}}
    //   keyExtractor={item => item.id.toString()}
      ListEmptyComponent={() => (
      <View  style={{
        height: (h * 1) / 1.7,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <NoResult />
      </View>
      )}
    />
    </SafeAreaView>
  )
}

export default BookResult

const styles = StyleSheet.create({})