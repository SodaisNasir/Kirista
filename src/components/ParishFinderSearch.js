import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList,View,useColorScheme,StyleSheet, Dimensions } from "react-native";
import DetailsCard from './Card/DetailsCard';
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Color } from "../utils/Colors";


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const ParishFinderSearch = () => {
  const Navigation = useNavigation()
  const Theme = useColorScheme() == 'dark'
  const data = [
    {
      id: 1,
      title: 'Sunday Student',
      manual: 'Manual',
      image: require('../assets/images/book1.png'),
      detail: '2023',
    },
  
    {
      id: 2,
      title: 'RCCG',
      manual: 'Central Parish',
      image: require('../assets/images/parishsmall_1.png'),
      detail: 'Ghana',
    },
  
    {
      id: 3,
      title: 'West Coast 3 Regional',
      manual: 'Convention',
      image: require('../assets/images/event_4.png'),
      detail: 'July 7, 2023.   .   4PM',
    },
    {
      id: 4,
      title: 'RCCG His Grace Assembly',
      manual: '',
      image: require('../assets/images/rcg_centralparish.png'),
      detail: 'Banjul',
    },
    {
      id: 5,
      title: 'Sunday School',
      manual: 'Teachers Manual',
      image: require('../assets/images/book2.png'),
      detail: '2023',
    },
  ];
    return(
        <View style={{flex: 1, paddingHorizontal: moderateScale(20)}}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <DetailsCard
              source={item.image}
              title={item.title}
              resize={'contain'}
              manual={item.manual}
              PlaceTrue={true}
              Place={item.detail}
              MainBoxRestyle={{
                paddingBottom:
                  w >= 768 && h >= 1024
                    ? verticalScale(10)
                    : verticalScale(15),
                marginTop:
                  w >= 768 && h >= 1024
                    ? verticalScale(10)
                    : verticalScale(15),
                borderBottomColor: Theme
                  ? Color.DarkBorder
                  : Color.BorderColor,
                borderBottomWidth: 1,
              }}
            />
          )}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={() => <NoResult />}
        />
        </View>
    )
}
const styles = StyleSheet.create({

})

export default ParishFinderSearch