import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  StatusBar,
  ScrollView,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
  LogBox,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import LibraryHeader from '../../components/LibraryHeader';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import DetailsCard from '../../components/Card/DetailsCard';
import {useFocusEffect} from '@react-navigation/native';
import BottomTab from '../../constant/BottomTab';
import {getBooks} from '../../redux/actions/UserAction';
import {useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import Modal from 'react-native-modal';
import AnimatedLottieView from 'lottie-react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const LibraryHome = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [Loading, setLoading] = useState(false);
  const Theme = useSelector(state => state.mode);
  const applanguage = useSelector(state => state.applanguage);
const isGuest = useSelector(state => state.is_guest);
console.log("GUST IS  ============>",isGuest);
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const [selected, setSelected] = useState('');

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      getBooks(setData, setLoading);
    }, []),
  );
  const data2 = [
    {
      id: '1',
      label: applanguage.Title,
    },
    {
      id: '2',
      label: applanguage.RecentActivity,
    },
  ];

  const sortData = () => {
    if (selected === applanguage.Title) {
      const sortedData = [...data].sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
      setData(sortedData);
      setModalVisible(false);

      // Use the sortedData as needed
    } else if (selected === applanguage.RecentActivity) {
      const sortedData = [...data].sort((a, b) => {
        const dateA = new Date(a.updated_at);
        const dateB = new Date(b.updated_at);
        return dateB - dateA;
      });
      setData(sortedData);
      setModalVisible(false);
      // Use the sortedData as needed
    } else {
      alert('Please Select Sort By');
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
        style={{
          flex: 1,
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        }}>
        <StatusBar
          backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.White}
          barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <LibraryHeader
          onPress={() => {
            setShowModal(toggleModal(true));
          }}
          AuthHeaderStyle={{
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(80)
                  : verticalScale(80)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(60)
                : verticalScale(40),
            justifyContent: 'center',
            paddingTop:
              Platform.OS == 'android'
                ? moderateVerticalScale(30)
                : w >= 768 && h >= 1024
                ? moderateVerticalScale(25)
                : moderateVerticalScale(25),
          }}
        />
 {
  isGuest ? <View style={{alignItems:'center', justifyContent:'center', height: Dimensions.get('window').height /2}}>
    <AnimatedLottieView
              style={{
                height: verticalScale(100),
              }}
              source={require('../../components/Lootie/warning.json')}
              autoPlay
              loop
              speed={0.7}
            />
    <Text style={{ color: Theme === 'dark'
                              ?  Color.White :Color.DarkTextColor ,
    fontFamily: Font.Poppins500,}}>{applanguage.Guestpromt}</Text>
    
    </View> :
  <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              }}>
              {data.length > 0 ? (
                data?.map(item => {
                  return (
                    <>
                      <DetailsCard
                        key={item?.id}
                        onPress={() =>
                          navigation.navigate('ViewManual', {
                            item: item,
                          })
                        }
                        source={{uri: item?.cover_image}}
                        title={item?.title}
                        resize={'contain'}
                        manual={item?.category}
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
                          borderBottomColor:
                            Theme === 'dark'
                              ? Color.DarkBorder
                              : Color.BorderColor,
                          borderBottomWidth: 1,
                        }}
                      />
                    </>
                  );
                })
              ) : (
                // <View
                //   style={{
                //     height: (h * 1) / 1.7,
                //     justifyContent: 'center',
                //     alignItems: 'center',
                //   }}>
                //   <Text
                //     style={[
                //       styles.BigTextStyle,
                //       {
                //         color: Theme === 'dark' ? Color.White : Color.Black,
                //       },
                //     ]}>
                //     {applanguage.NoBookAvail}
                //   </Text>
                // </View>
                <ActivityIndicator
                style={{marginTop: '70%'}}
                color={Color.Main}
                size="large"
              />
              )}
            </View>
          </ScrollView>
 }
          
       
        <Modal
          testID={'modal'}
          style={styles.modalStyling}
          backdropOpacity={0.7}
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down">
          <View
            style={[
              styles.modalView,
              {
                backgroundColor:
                  Theme === 'dark' ? Color.DarkTheme : Color.White,
                paddingHorizontal:
                  width >= 768 && height >= 1024 ? scale(25) : scale(20),
              },
            ]}>
            <View
              style={{
                marginVertical: verticalScale(20),
              }}>
              <Text
                style={[
                  styles.BigTextStyle,
                  {
                    color: Theme === 'dark' ? Color.White : Color.Black,
                  },
                ]}>
                {applanguage.SortBy}
              </Text>
            </View>
            <FlatList
              data={data2}
              renderItem={({item}) => (
                <View style={{}}>
                  <TouchableOpacity
                    style={{marginBottom: verticalScale(10)}}
                    onPress={() => setSelected(item.label)}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View style={{}}>
                        <Text
                          style={[
                            styles.SmallTextStyle,
                            styles.BigTextStyle,
                            {
                              color:
                                Theme === 'dark' ? Color.White : Color.Black,
                            },
                          ]}>
                          {item.label}
                        </Text>
                      </View>

                      <View
                        style={{
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            height:
                              width >= 768 && height >= 1024
                                ? verticalScale(15)
                                : verticalScale(20),
                            width:
                              width >= 768 && height >= 1024
                                ? verticalScale(15)
                                : verticalScale(20),
                            backgroundColor: Color.White,
                            borderRadius: scale(50),
                            borderColor: Color.Black,
                            borderWidth: scale(1.5),
                            marginBottom: verticalScale(15),
                          }}>
                          {item.label == selected ? (
                            <View
                              style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: scale(80),
                              }}>
                              <View
                                style={{
                                  height:
                                    width >= 768 && height >= 1024
                                      ? verticalScale(7)
                                      : verticalScale(10),
                                  width:
                                    width >= 768 && height >= 1024
                                      ? verticalScale(7)
                                      : verticalScale(10),
                                  backgroundColor: Color.Black,
                                  borderRadius: scale(50),
                                }}
                              />
                            </View>
                          ) : null}
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />

            <View style={{marginVertical: verticalScale(15)}}>
              <CustomButton onPress={sortData} text={applanguage.Apply} />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
      <BottomTab activeLibary={true} />
    </>
  );
};

export default LibraryHome;

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: scale(3),
    marginTop: verticalScale(20),
    borderColor: Color.BorderColor,
    borderBottomColor: Color.BorderColor,
  },

  ImageView: {
    alignItems: 'center',
  },
  modalStyling: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalView: {
    justifyContent: 'center',
    paddingVertical: moderateScale(20),
    width: '100%',
    borderTopRightRadius: w >= 768 && h >= 1024 ? scale(20) : scale(22),
    borderTopLeftRadius: w >= 768 && h >= 1024 ? scale(20) : scale(22),
    backgroundColor: Color.White,
  },
  BigTextStyle: {
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(18),
    textAlign: 'left',
  },
  SmallTextStyle: {
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(16),
    textAlign: 'left',
  },
});
