import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Header from '../../components/Header';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getFAQ} from '../../redux/actions/UserAction';
import {useSelector} from 'react-redux';
import DoubleText from '../../components/Loader/DoubleText';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Faq = ({navigation}) => {
  const Theme = useSelector(state => state.mode);
  const applanguage = useSelector(state => state.applanguage);
  const language = useSelector(state => state.language);

  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [select, setSelect] = useState('');

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    })
    getFAQ(setData, setLoading,language)
  }, []);

  const onSubmit = id => {
    if (select == id) {
      setSelect('');
    } else {
      setSelect(id);
    }
  };
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor:
            Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        }}>
        <StatusBar
          backgroundColor={
            Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor
          }
          barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Header text={applanguage.FAQ} />

        {Loading ? (
            <View style={{
              // flexDirection: '',
              marginTop:scale(20),
              marginHorizontal: scale(20),
              borderRadius:8
            }}>
            <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(60)}/>
            <View style={{height: 0,marginVertical:5}} />
            <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(60)} />
            <View style={{height: 0,marginVertical:5}} />
            <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(60)}/>
            <View style={{height: 0,marginVertical:5}} />
            <DoubleText height={w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(60)}/>
              </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={[
                styles.MainBox,
                {
                  backgroundColor:
                    Theme === 'dark' ? Color.DarkTheme : Color.White,
                },
              ]}>
              {data?.map(item => {
                return (
                  <>
                    <View style={{marginBottom: verticalScale(15)}}>
                      <TouchableOpacity
                        style={[
                          styles.BoxStyle,
                          {
                            backgroundColor:
                              Theme === 'dark'
                                ? Color.ExtraViewDark
                                : Color.HeaderColor,
                          },
                        ]}
                        onPress={() => onSubmit(item.id)}>
                        <View style={{width: '75%'}}>
                          <Text
                            style={[
                              styles.InnerText,
                              {
                                color:
                                  Theme === 'dark'
                                    ? Color.White
                                    : Color.DarkTheme,
                              },
                            ]}>
                            {item?.question}
                          </Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                          <AntDesign
                            name={'minus'}
                            size={24}
                            color={Theme === 'dark' ? Color.White : Color.Black}
                          />
                        </View>
                      </TouchableOpacity>
                      {item?.id == select && (
                        <View
                          style={{
                            backgroundColor:
                              Theme === 'dark' ? Color.Black : Color.White,
                            borderRadius: scale(16),
                            paddingHorizontal: 5,
                            marginTop: verticalScale(10),
                          }}>
                          <Text
                            style={[
                              styles.ExpandedText,
                              {
                                color:
                                  Theme === 'dark'
                                    ? Color.White
                                    : Color.DarkTheme,
                              },
                            ]}>
                            {item?.answer}
                          </Text>
                        </View>
                      )}
                    </View>
                  </>
                );
              })}
              <View style={{height: verticalScale(10)}} />
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

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
    paddingHorizontal: moderateScale(10),
    fontFamily: Font.Inter500,
    color: Color.Black,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
  },
});

export default Faq;
