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
import ReadNavigator from '../../components/ReadNavigator';

const Language = ({navigation,route}) => {
  const Type = route.params.type
  console.log('Type ====>',Type)
  const Provence = Type == 'Provence';
  const Region = Type == 'Region'
  const handleSubmit = () => {
    navigation.goBack();
  };
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [selected, setSelected] = useState();
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);

  let DATA = [
    {
      id: '1',
      title: Provence ?  'Province 1' : Region ? 'Region 1' : 'English',
      Short: '(EN)',
    },
    {
      id: '2',
      title: Provence ?  'Province 2' : Region ? 'Region 2' : 'Hausa',
      Short: '(HA)',
    },
    {
      id: '3',
      title: Provence ?  'Province 3' : Region ? 'Region 3' : 'Français',
      Short: '(FR)',
    },
    {
      id: '4',
      title: Provence ?  'Province 4' : Region ? 'Region 4' : 'Português',
      Short:  '(PO)',
    },
    {
      id: '5',
      title: Provence ?  'Province 5' : Region ? 'Region 5' : 'Pidgin',
      Short:  '(PN)',
    },
    {
      id: '6',
      title: Provence ?  'Province 6' : Region ? 'Region 6' : 'Fula',
      Short: '(FU)',
    },
    {
      id: '7',
      title: Provence ?  'Province 7' : Region ? 'Region 7' : 'Español',
      Short: '(ES)',
    },
  ];

  const [option, setOption] = useState(null);

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
      onPress={() => [setSelected(data.title), setTimeout(() => {
        navigation.goBack()
      }, 1000)]}>
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
                  color: Theme ? Color.White : Color.DarkTextColor,
                },
                styles.title,
              ]}>
              {data.title}
             { Region || Provence ?  null : <Text
                style={[
                  {
                    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
                    color: Theme ? Color.White : Color.DarkTextColor,
                  },
                  styles.Short,
                ]}>
                {' '}
                {data.Short}
              </Text>}
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
            borderBottomColor: Theme
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
          backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
    <View
      style={[
        {backgroundColor: Theme ? Color.DarkTheme : Color.White,
        },
        styles.Container,
      ]}>
     
      <Header text={Provence ? 'Province' : Region ? 'Region' : 'Language'} />
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
        style={{marginTop: verticalScale(20)}}
      />

      <View style={{height: verticalScale(10)}} />
    </View>
    </>
  );
};

export default Language;

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
