import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList,View,useColorScheme,StyleSheet, Dimensions, SafeAreaView } from "react-native";
import DetailsCard from './Card/DetailsCard';
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Color } from "../utils/Colors";
import { useSelector } from "react-redux";
import NoResult from "./NoResult";
import { format } from 'date-fns';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const EventsResult = ({data}) => {
    const navigation = useNavigation()
    const Theme = useSelector(state => state.mode)

    const newData = data != null ? [data] : data
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: moderateScale(20)}}>
    <FlatList
      data={newData}
      showsVerticalScrollIndicator={false}
      renderItem={({item,index}) => (
        <DetailsCard
        onPress={() => {
          navigation.navigate('EventScreen', {id: item.id});
        }}
        source={{uri: item?.image}}
        title={item?.title}
        resize={'cover'}
        // manual="Convention"
        TimeTrue={true}
        date={format(new Date(item?.start_date), 'MMMM d, yyyy')}
        time={item?.start_time}
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
      /> 
      )}
    //   keyExtractor={index}
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

export default EventsResult

const styles = StyleSheet.create({})