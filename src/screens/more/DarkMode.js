import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  useColorScheme,
  Image,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {MODE} from '../../redux/reducer';
import Modal from 'react-native-modal'
const DarkMode = () => {
  const getTheme = useColorScheme();

  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const dispatch = useDispatch();
  const Theme = useSelector(state => state.mode);
  const applanguage = useSelector(state => state.applanguage);
 const [selected, setSelected] = useState('');
 const mode = useSelector(state => state.mode)

 console.log('selected', selected)

 useEffect(() => {
  modeCheck()
}, [mode,Theme])
 
  const modeCheck = async () => {
    const getMode = await AsyncStorage.getItem('mode');
    const cnvrtMode = JSON.parse(getMode);
    const uplodadData = cnvrtMode != null ? cnvrtMode : 'device setting'
    setSelected(uplodadData);
  };



  let DATA = [
    {
      id: '1',
      title: applanguage.Off,
      name: 'off'
    },
    {
      id: '2',
      title: applanguage.On,
      name: 'on'
    },
    {
      id: '3',
      title: applanguage.DeviceSettings,
      name: 'device setting'
    },
  ];

  const Item = ({data}) => (
    <TouchableOpacity
      style={[
        {
          paddingHorizontal:
            w >= 768 && h >= 1024 ? moderateScale(28) : moderateScale(20),
        },
        styles.item,
      ]}
      onPress={() => onSubmit(data)}>
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
                  color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                },
                styles.title,
              ]}>
              {data.title}
            </Text>
          </View>
        </View>

        <View style={{justifyContent: 'center', right: scale(5)}}>
          <View
            style={{
              height: w >= 768 && h >= 1024 ? scale(12) : scale(16),
              width: w >= 768 && h >= 1024 ? scale(12) : scale(16),

              borderRadius: scale(50),
              borderColor: Color.Main,
              borderWidth: scale(1.5),
              marginBottom: verticalScale(15),
            }}>
            {selected == data.name ? (
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
            borderBottomColor:
              Theme === 'dark' ? Color.DarkBorderColor : Color.BorderColor,
          },
          styles.BorderBottom,
        ]}
      />
    </TouchableOpacity>
  );

  const onSubmit = async data => {
    setSelected(data.name);
    // dispatch({type: MODE, payload: data.title})
    await AsyncStorage.setItem('mode', JSON.stringify(data.name));

    const onMode = 'dark';
    const ofMode = 'light';

    if (data.name === 'on') {
      dispatch({type: MODE, payload: onMode});
    } else if (data.name === 'off') {
      dispatch({type: MODE, payload: ofMode});
    } else if (data.name === 'device setting') {
      dispatch({type: MODE, payload: getTheme});
      console.log('first')
    } else {
      console.log('vvvvvvv');
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
      <SafeAreaView
        style={[
          styles.Container,
          {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White},
        ]}>
        <StatusBar
          backgroundColor={
            Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor
          }
        />
        <Header text={applanguage.DarkMode} />
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.id}
          style={{marginTop: verticalScale(20)}}
        />
        <View style={{height: verticalScale(10)}} />
      </SafeAreaView>
    </>
  );
};

export default DarkMode;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  item: {
    paddingVertical: moderateVerticalScale(10),
  },
  BorderBottom: {
    borderBottomWidth: scale(1),
  },
  title: {
    fontFamily: Font.Poppins500,
  },
});
