import React, {useState, useEffect} from 'react'
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
} from 'react-native'
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters'
import Header from '../../components/Header'
import {Color} from '../../utils/Colors'
import {Font} from '../../utils/font'
import ReadNavigator from '../../components/ReadNavigator'

const Language = ({navigation}) => {
  const handleSubmit = () => {
    navigation.goBack()
  }
  const Theme = useColorScheme() === 'dark'
  const w = useWindowDimensions().width
  const h = useWindowDimensions().height
  const [selected, setSelected] = useState()

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
  ]

  const [option, setOption] = useState(null)

  const Item = ({data}) => (
    <TouchableOpacity
      style={[
        {
          paddingHorizontal:
            w >= 768 && h >= 1024 ? moderateScale(28) : moderateScale(20),
        },
        styles.item,
      ]}
      onPress={() => setSelected(data.title)}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          //   backgroundColor:'red',
          bottom: scale(4),
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
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
                  color: Theme ? Color.White : Color.DarkTextColor,
                },
                styles.title,
              ]}>
              {data.title}
              <Text
                style={[
                  {
                    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(12),
                    color: Theme ? Color.White : Color.DarkTextColor,
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
          {borderBottomColor: Theme ? Color.Black : Color.BorderColor},
          styles.BorderBottom,
        ]}
      />
    </TouchableOpacity>
  )
  return (
    <SafeAreaView
      style={[
        styles.Container,
        {backgroundColor: Theme ? Color.DarkTheme : Color.White},
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header text={'Language'} />
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={(item) => item.id}
          style={{marginTop: verticalScale(20)}}
        />

        <View style={{height: verticalScale(10)}} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Language

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  item: {
    paddingVertical: moderateVerticalScale(15),
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
})
