import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  useColorcheme,
  useColorScheme,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Header from '../../components/Header';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Language = ({navigation}) => {
  const [selected, setSelected] = useState();

  let DATA = [
    {
      id: '1',
      title: 'English',
      Short: '(EN)',
    },
    {
      id: '2',
      title: 'Hausa',
      Short: '(HA)',
    },
    {
      id: '3',
      title: 'Français',
      Short: '(FR)',
    },
    {
      id: '4',
      title: 'Português',
      Short: '(PO)',
    },
    {
      id: '5',
      title: 'Pidgin',
      Short: '(PN)',
    },
  ];

  const [option, setOption] = useState(null);

  const Item = ({data}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSelected(data.title)}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        //   backgroundColor:'red',
          bottom:scale(4)
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.title]}>
              {data.title}
              <Text style={[styles.Short]}> {data.Short}</Text>
            </Text>
          </View>
        </View>

        <View style={{justifyContent: 'center', right: scale(5)}}>
          <View
            style={{
              height: w >= 768 && h >= 1024 ? scale(12) : scale(18),
              width: w >= 768 && h >= 1024 ? scale(12) : scale(18),
              backgroundColor: Color.White,
              borderRadius: scale(50),
              borderColor: Color.Main,
              borderWidth: scale(1.5),
              marginBottom: verticalScale(15),
            }}>
            {selected == data.title ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: scale(80),
                }}>
                <View
                  style={{
                    height: w >= 768 && h >= 1024 ? scale(5) : scale(8),
                    width: w >= 768 && h >= 1024 ? scale(5) : scale(8),
                    backgroundColor: Color.Main,
                    borderRadius: scale(50),
                  }}
                />
              </View>
            ) : null}
          </View>
        </View>
      </View>
      <View style={[styles.BorderBottom]} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView
      style={[
        styles.Container,
        // Theme === 'dark'
        //   ? {
        //       backgroundColor: Color.ThemeBlack,
        //     }
        //   : {
        //       backgroundColor: Color.White,
        //     },
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header text={'Language'} />
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.id}
          style={{marginTop: verticalScale(20)}}
        />

        <View style={{height: verticalScale(10)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Language;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  item: {
    paddingHorizontal: w >= 768 && h >= 1024 ? moderateScale(28) : moderateScale(20),
    paddingVertical: moderateVerticalScale(15),
    // height:verticalScale(70)
  },
  BorderBottom: {
    borderBottomWidth: scale(1.5),
    borderBottomColor: Color.BorderColor,
  },
  title: {
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins600,
  },

 
  Short: {
    color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
    fontFamily: Font.Poppins400,
  },
});
