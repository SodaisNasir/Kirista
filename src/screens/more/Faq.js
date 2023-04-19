import React, {useLayoutEffect, useState} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  useColorScheme,
} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import Header from '../../components/Header'
import {Color} from '../../utils/Colors'
import {Font} from '../../utils/font'
import AntDesign from 'react-native-vector-icons/AntDesign'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const Faq = ({navigation}) => {
  const Theme = useColorScheme() === 'dark'
  const [expanded1, setExpanded1] = useState(false)
  const [expanded2, setExpanded2] = useState(false)
  const [expanded3, setExpanded3] = useState(false)
  const [expanded4, setExpanded4] = useState(false)
  const [expanded5, setExpanded5] = useState(false)

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    })
  }, [])

  const handlePress1 = () => {
    setExpanded1(!expanded1)
  }
  const handlePress2 = () => {
    setExpanded2(!expanded2)
  }
  const handlePress3 = () => {
    setExpanded3(!expanded3)
  }
  const handlePress4 = () => {
    setExpanded4(!expanded4)
  }
  const handlePress5 = () => {
    setExpanded5(!expanded5)
  }

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme ? Color.DarkTheme : Color.White}}>
      <ScrollView>
        <Header text={'FAQ'} />
        <View
          style={[
            styles.MainBox,
            {
              backgroundColor: Theme ? Color.DarkTheme : Color.White,
            },
          ]}>
          <View style={{marginVertical: verticalScale(15)}}>
            <TouchableOpacity
              style={[
                styles.BoxStyle,
                {
                  backgroundColor: Theme
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                },
              ]}
              onPress={handlePress1}>
              <View style={{width: '75%'}}>
                <Text
                  style={[
                    styles.InnerText,
                    {
                      color: Theme ? Color.White : Color.DarkTheme,
                    },
                  ]}>
                  How can I download Kirista app?
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <AntDesign
                  name={'minus'}
                  size={24}
                  color={Theme ? Color.White : Color.Black}
                />
              </View>
            </TouchableOpacity>
            {expanded1 && (
              <View
                style={{
                  backgroundColor: Theme
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                    borderRadius: scale(16),
                  paddingHorizontal: 5,
                  marginTop: verticalScale(10),
                }}>
                <Text
                  style={[
                    styles.ExpandedText,
                    {
                      color: Theme ? Color.White : Color.DarkTheme,
                    },
                  ]}>
                  Kirista is a mobile application that provides brethren with
                  access to a library of books that they can read on their
                  devices.
                </Text>
              </View>
            )}
          </View>

          <View style={{marginVertical: verticalScale(15)}}>
            <TouchableOpacity
              style={[
                styles.BoxStyle,
                {
                  backgroundColor: Theme
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                },
              ]}
              onPress={handlePress2}>
              <View style={{width: '75%'}}>
                <Text
                  style={[
                    styles.InnerText,
                    {
                      color: Theme ? Color.White : Color.Black,
                    },
                  ]}>
                  What is the goal of Kirista App?
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <AntDesign
                  name={'minus'}
                  size={24}
                  color={Theme ? Color.White : Color.Black}
                />
              </View>
            </TouchableOpacity>
            {expanded2 && (
              <View
                style={{
                  backgroundColor: Theme
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                   borderRadius: scale(16),
                  paddingHorizontal: 5,
                  marginTop: verticalScale(10),
                }}>
                <Text
                  style={[
                    styles.ExpandedText,
                    {
                      color: Theme ? Color.White : Color.DarkTheme,
                    },
                  ]}>
                  Kirista is a mobile application that provides brethren with
                  access to a library of books that they can read on their
                  devices.
                </Text>
              </View>
            )}
          </View>

          <View style={{marginVertical: verticalScale(15)}}>
            <TouchableOpacity
              style={[
                styles.BoxStyle,
                {
                  backgroundColor: Theme
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                },
              ]}
              onPress={handlePress3}>
              <View style={{width: '75%'}}>
                <Text
                  style={[
                    styles.InnerText,
                    {
                      color: Theme ? Color.White : Color.Black,
                    },
                  ]}>
                  How can I download Kirista app?
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <AntDesign
                  name={'minus'}
                  size={24}
                  color={Theme ? Color.White : Color.Black}
                />
              </View>
            </TouchableOpacity>
            {expanded3 && (
              <View
                style={{
                  backgroundColor: Theme
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                   borderRadius: scale(16),
                  paddingHorizontal: 5,
                  marginTop: verticalScale(10),
                }}>
                <Text
                  style={[
                    styles.ExpandedText,
                    {
                      color: Theme ? Color.White : Color.DarkTheme,

                    },
                  ]}>
                  Kirista is a mobile application that provides brethren with
                  access to a library of books that they can read on their
                  devices.
                </Text>
              </View>
            )}
          </View>

          <View style={{marginVertical: verticalScale(15)}}>
            <TouchableOpacity
              style={[
                styles.BoxStyle,
                {
                  backgroundColor: Theme
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                },
              ]}
              onPress={handlePress4}>
              <View style={{width: '75%'}}>
                <Text
                  style={[
                    styles.InnerText,
                    {
                      color: Theme ? Color.White : Color.Black,
                    },
                  ]}>
                  Are the books on Kirista app really free?
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <AntDesign
                  name={'minus'}
                  size={24}
                  color={Theme ? Color.White : Color.Black}
                />
              </View>
            </TouchableOpacity>
            {expanded4 && (
              <View
                style={{
                  backgroundColor: Theme
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                   borderRadius: scale(16),
                  paddingHorizontal: 5,
                  marginTop: verticalScale(10),
                }}>
                <Text
                  style={[
                    styles.ExpandedText,
                    {
                      color: Theme ? Color.White : Color.DarkTheme,
                    },
                  ]}>
                  Kirista is a mobile application that provides brethren with
                  access to a library of books that they can read on their
                  devices.
                </Text>
              </View>
            )}
          </View>

          <View style={{marginVertical: verticalScale(15)}}>
            <TouchableOpacity
              style={[
                styles.BoxStyle,
                {
                  backgroundColor: Theme
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                },
              ]}
              onPress={handlePress5}>
              <View style={{width: '75%'}}>
                <Text
                  style={[
                    styles.InnerText,
                    {
                      color: Theme ? Color.White : Color.Black,
                    },
                  ]}>
                  What types of books are available on Kirista app?
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <AntDesign
                  name={'minus'}
                  size={24}
                  color={Theme ? Color.White : Color.Black}
                />
              </View>
            </TouchableOpacity>
            {expanded5 && (
              <View
                style={{
                  backgroundColor: Theme
                    ? Color.ExtraViewDark
                    : Color.HeaderColor,
                   borderRadius: scale(16),
                  paddingHorizontal: 5,
                  marginTop: verticalScale(10),
                }}>
                <Text
                  style={[
                    styles.ExpandedText,
                    {
                      color: Theme ? Color.White : Color.DarkTheme,
                    },
                  ]}>
                  Kirista is a mobile application that provides brethren with
                  access to a library of books that they can read on their
                  devices.
                </Text>
              </View>
            )}
          </View>

          <View style={{height: verticalScale(150)}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MainBox: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
    marginTop: '5%',
  },
  BoxStyle: {
    backgroundColor: Color.HeaderColor,
    borderRadius: scale(16),
    height: w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(70),
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
  },
  InnerText: {
    fontFamily: Font.Inter700,
    color: Color.DarkTextColor,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(14),
    // backgroundColor:'red',
  },
  ExpandedText: {
    marginVertical: verticalScale(15),
    paddingHorizontal:moderateScale(10),
    fontFamily: Font.Inter500,
    color: Color.Black,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
  },
})

export default Faq
