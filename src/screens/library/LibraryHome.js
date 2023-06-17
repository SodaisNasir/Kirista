import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  useColorScheme,
  StatusBar,
  ScrollView,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import React, {useCallback, useState} from 'react';
import LibraryHeader from '../../components/LibraryHeader';
import {scale, verticalScale, moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import FilterModal from '../../components/Modals/FilterModal';
import DetailsCard from '../../components/Card/DetailsCard';
import {useFocusEffect} from '@react-navigation/native';
import BottomTab from '../../constant/BottomTab';
import { getBooks } from '../../redux/actions/UserAction';
import { useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import ModalBtnF from '../../components/ModalBtnF';
import Modal from 'react-native-modal'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const LibraryHome = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const Theme = useSelector(state => state.mode)
  const [isModalVisible, setModalVisible] = useState(false);
  const [data,setData] = useState([])
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const width = useWindowDimensions().width
  const height = useWindowDimensions().height
  const [selected, setSelected] = useState('')



  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      getBooks(setData)
    }, []),
  );
  const data2 = [
    {
      id: '1',
      label: 'Title',
    },
    {
      id: '2',
      label: 'Recent Activity',
    },
  ]

  
  const sortData = () => {
    if (selected === 'Title') {
      const sortedData = [...data].sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        setModalVisible(false);
        return 0;
      });
      setData(sortedData)
      
      // Use the sortedData as needed
    } else if (selected === 'Recent Activity') {
      const sortedData = [...data].sort((a, b) => {
        const dateA = new Date(a.updated_at);
        const dateB = new Date(b.updated_at);
        return dateB - dateA;
      });
      setModalVisible(false);
      setData(sortedData)
      // Use the sortedData as needed
    }else{
      alert('Please Select Sort By')
    }
  };

  return (
    <>
     <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
    <SafeAreaView
      style={{flex: 1, backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White}}>
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
        Platform.OS == 'android' ? moderateVerticalScale(30) :
          w >= 768 && h >= 1024
            ? moderateVerticalScale(25)
            : moderateVerticalScale(25),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false} >
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
          }}>
            {data.length > 0 ?
              data?.map((item) => {
                return(
                  <>
                  <DetailsCard
                  key={item?.id}
                  onPress={() => navigation.navigate('ViewManual',{
                    item:item
                  })}
                  source={{uri: item?.cover_image}}
                  title={item?.title}
                  resize={'contain'}
                  manual={item?.category}
                  PlaceTrue={true}
                  Place={item?.release_year}
                  MainBoxRestyle={{
                    paddingBottom:
                      w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                    marginTop:
                      w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
                    // backgroundColor:'red'
                    borderBottomColor: Theme === 'dark' ? Color.DarkBorder : Color.BorderColor,
                    borderBottomWidth: 1,
                  }}
                />
                  </>
                )
              })
              : <View
              style={{
                height: (h * 1) / 1.7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={[
                styles.BigTextStyle,
                {
                  color: Theme === 'dark' ? Color.White : Color.Black,
                },
              ]}>No Books Available</Text>
            </View>
            }
         
          
        </View>
      </ScrollView>
{/*      
      <FilterModal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        onPress={() => sortData()}
        // onPress={() => setModalVisible(false)}
        data={data2}
        // selectPress={}
        selected={selected}
      /> */}
        <Modal
        testID={'modal'}
        style={styles.modalStyling}
        backdropOpacity={0.7}
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        >
        <View
          style={[
            styles.modalView,
            {
              backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
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
              Sort By
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
                        color: Theme === 'dark' ? Color.White : Color.Black,
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
                    {item.label == selected  ? (
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
                            backgroundColor:  Color.Black,
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
            <CustomButton 
            onPress={sortData} 
            text={'Apply'} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
    <BottomTab  activeLibary={true}/>
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
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  // DateStyle: {
  //   color: Color.BoldTextColor,
  //   fontFamily: Font.Poppins600,

  //   fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  // },
  // TitleStyle: {
  //   // color: Color.DarkTextColor,
  //   fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
  //   fontFamily: Font.Poppins700,
  //   // maxWidth: w >= 768 && h >= 1024 ? '0%' : '90%',

  //   // paddingHorizontal: verticalScale(50),
  // },
  modalStyling: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalView: {
    justifyContent: 'center',
    // alignItems: 'center',
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
