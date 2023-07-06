import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useColorScheme,
  StatusBar,
  Platform
} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomHeader from '../../components/CustomHeader';
import {Color} from '../../utils/Colors';
import {verticalScale, scale, moderateVerticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import CustomButton from '../../components/CustomButton';
import {useFocusEffect} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Share from 'react-native-share'
import { useState } from 'react';
import { getChapters, markData } from '../../redux/actions/UserAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALLBOOKMARK } from '../../redux/reducer';
import { useEffect } from 'react';
import RNFS from 'react-native-fs';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ViewManual = ({navigation,route}) => {
  const dispatch = useDispatch()
  const {item,htmlContent} = route.params
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)
  const is_guest = useSelector(state => state.is_guest)
  const user_details = useSelector(state => state.user_details)
  const allbookmark = useSelector(state => state.allbookmark)
  const [data,setData] = useState()

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      dispatch(getChapters(setData,item.id))
    }, []),
  );
  // useEffect(() => {
  //   const epubUrl = item.ebook_url;
  //   const filePath = RNFS.DocumentDirectoryPath   + '/data.epub';
  //   RNFS.downloadFile({
  //     fromUrl: epubUrl,
  //     toFile: filePath,
  //   })
  //     .promise.then((success) => {
  //       console.log('EPUB file saved successfully!',success);
  //     })
  //     .catch((error) => {
  //       console.error('Failed to save EPUB file:', error);
  //     });
  // }, [item.ebook_url]);

  // useEffect(() => {
  //   const downloadFile = (url, filePath) => {
  //     return new Promise((resolve, reject) => {
  //       // Check if the file already exists
  //       RNFS.exists(filePath)
  //         .then(exists => {
  //           if (exists) {
  //             // File already exists, resolve immediately
  //             console.log('first')
  //             resolve();
  //           } else {
  //             // File doesn't exist, start the download
  //             RNFS.downloadFile({
  //               fromUrl: url,
  //               toFile: filePath,
  //             }).promise
  //               .then(res => {
  //                 console.log('File downloaded successfully!', res);
    
  //                 // Read the saved file and log its contents
  //                 RNFS.readFile(filePath, 'utf8')
  //                   .then(data => {
  //                     console.log('File contents:', data);
  //                   })
  //                   .catch(error => {
  //                     console.error('Failed to read file:', error);
  //                   });
    
  //                 resolve();
  //               })
  //               .catch(error => {
  //                 console.error('Failed to download file:', error);
  //                 reject(error);
  //               });
  //           }
  //         })
  //         .catch(error => {
  //           console.error('Failed to check file existence:', error);
  //           reject(error);
  //         });
  //     });
  //   };
    
    
  //   // Usage
  //   const downloadFiles = async () => {
  //     const items = [
  //       { ebook_url: 'https://kirista.s3.amazonaws.com/epub/1688622448.epub' },
  //       { ebook_url: 'https://kirista.s3.amazonaws.com/epub/1688533069.epub' },
  //       // Add more items as needed
  //     ];
    
  //     for (const item of items) {
  //       const epubUrl = item.ebook_url;
  //       const filePath = RNFS.DocumentDirectoryPath + '/data.epub';
    
  //       try {
  //        await downloadFile(epubUrl, filePath);
         
  //       } catch (error) {
  //         // Handle error if necessary
  //         console.log('error', error)
  //       }
  //     }
  //   };
    
  //   // Call the downloadFiles function to start downloading multiple files
  //   downloadFiles();
    
  // }, [])

  const [isChecked, setIsChecked] = useState(false);
  const shareBook = (data) => {
    let shareImageBase64 = {
      title: 'Book',
      url: `Monkey D. Luffy`,
      subject: 'Share Book Link', //  for email
    }
    Share.open(shareImageBase64).catch((error) => console.log(error))
  }
const type = 'book'

useEffect(() => {
  addBookmark()
},[allbookmark])

const addBookmark = () => {
  const extrxtIds = allbookmark.find((elm) => elm.id == item.id)
  if(extrxtIds != null || undefined){
    setIsChecked(true);
  }else{
    setIsChecked(false)
  }
}

const handleSubmit = async () => {
    const findData = allbookmark?.find((elm) => elm.id == item?.id)

    if (findData) {
      const updatedData = allbookmark.filter((elm) => elm.id !== findData.id);
      dispatch({type: ALLBOOKMARK, payload: updatedData})
      await AsyncStorage.setItem('allbookmark', JSON.stringify(updatedData));
      setIsChecked(false)
      console.log('laraib =========>')
    } else {
      markData(type,item.id,user_details)
      dispatch({type: ALLBOOKMARK, payload: [...allbookmark, item]})
      console.log('laraib =========> Object not found in the array');
      setIsChecked(true);
      await AsyncStorage.setItem('allbookmark', JSON.stringify([...allbookmark, item]));
    }
    
}

  return (
    <>
    <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <StatusBar barStyle={Theme === 'dark' ? 'light-content' : 'dark-content' } backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor}/>
    <View
      style={[
        {backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
          marginTop:Platform.OS == 'ios' && w <= 450 && h <= 750 ? 0 : Platform.OS == 'ios' ? verticalScale(-20) : 0
          
        },
        styles.Container,
      ]}>
     
        <CustomHeader
         goPress={() => navigation.goBack()}
         shareicon={true}
         BookPress={handleSubmit}
         saveicon={is_guest == true ? false : true}
         shareOnPress={shareBook}
         select={isChecked}
         AuthHeaderStyle={{
          height:
            Platform.OS == 'android'
              ? w >= 768 && h >= 1024
                ? verticalScale(80)
                : verticalScale(70)
              : w >= 768 && h >= 1024
              ? verticalScale(70)
              : w <= 450 && h <= 750
              ? verticalScale(60)
              : verticalScale(40),
          justifyContent: 'center',
          paddingTop:
            Platform.OS == 'android'
              ? moderateVerticalScale(20)
              : w >= 768 && h >= 1024
              ? moderateVerticalScale(25)
              : moderateVerticalScale(25),
        }}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ImageViewStyle}>
          <Image
            resizeMode="contain"
            source={{uri: item?.cover_image}}
            style={{height: '100%', width: '100%',borderRadius:scale(10)}}
          />
        </View>
        <View style={{marginTop: verticalScale(10)}}>
          <Text
            style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.TextStyle,
            ]}>
            {/* Sunday School Student */}
            {item?.title}
          </Text>
          {/* <Text
            style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.TextStyle,
            ]}>
            Manual
          </Text> */}
        </View>

        <View
          style={{
            height:
              w >= 768 && h >= 1024 ? verticalScale(50) : verticalScale(80),
            justifyContent: 'center',
            paddingHorizontal: verticalScale(20),
          }}>
          <CustomButton
            // onPress={() => navigation.navigate('Readone',{
            //   id: item?.id,
            //   item:item
            // })}
            onPress={() => navigation.navigate('Readtwo',{
              id:item?.id,
              bookData:item,
              chapterOne: 1,
              url: item.ebook_url
            })}
              
            text={applanguage.Read}
          />
        </View>

        <View></View>

        <View
          style={{
            height: verticalScale(18),
            backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-evenly',
            width: '100%',
            alignSelf: 'center',
            height:
              w >= 768 && h >= 1024 ? verticalScale(80) : verticalScale(120),
            backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
            // height: verticalScale(80),
            paddingHorizontal:
              w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(20),
          }}>
          <View
            style={{
              borderRightColor: Color.BorderColor,
              borderRightWidth: 1,
              paddingHorizontal: verticalScale(10),
              alignSelf: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={[styles.DetailTextStyle,{color:Theme === 'dark' ? '#fff' : '#D1D2D4'}]}>{applanguage.LanguagePlain}</Text>
            <Text
              style={[
                {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                styles.BoldDetailTextStyle,
              ]}>
               {item?.language}
            </Text>
          </View>
          <View
            style={{
              borderRightColor: Color.BorderColor,
              borderRightWidth: 1,
              paddingHorizontal: verticalScale(10),
              alignSelf: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={[styles.DetailTextStyle,{color:Theme === 'dark' ? '#fff' : '#D1D2D4'}]}>{applanguage.Category}</Text>
            <Text
              style={[
                {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                styles.BoldDetailTextStyle,
              ]}>
              {item?.category}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: verticalScale(10),
              alignSelf: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={[styles.DetailTextStyle,{color:Theme === 'dark' ? '#fff' : '#D1D2D4'}]}>{applanguage.Released}</Text>
            <Text
              style={[
                {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
                styles.BoldDetailTextStyle,
              ]}>
               {item?.release_year}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: verticalScale(18),
            backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
          }}
        />

        <View
          style={{
            height: verticalScale(70),
            justifyContent: 'center',
            borderBottomColor: Theme === 'dark'
              ? Color.DarkBorderColor
              : Color.BorderColor,
            borderBottomWidth: 1,
            marginHorizontal: verticalScale(20),
          }}>
          <Text
            style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.AuthorText,
            ]}>
            {applanguage.Author}
          </Text>
          <Text
            style={[
              {color: Theme === 'dark' ? Color.White : Color.DarkTextColor},
              styles.AuthorNameText,
            ]}>
           {item?.author}
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: verticalScale(20),
            marginVertical: verticalScale(15),
          }}>
          <Text
            style={[styles.About, {color: Theme === 'dark' ? Color.White : Color.Black}]}>
            {applanguage.About}
          </Text>

          <Text
            style={[
              styles.AboutText,
              {color: Theme === 'dark' ? Color.White : Color.Black},
            ]}>
            {/* This Sunday School year is expected to be a year of firm and
            dedicated study. This year's manual is a compilation of sound
            biblical doctrines. Our personal goal should be to study the Bible
            to discover the treasures in it. */}
            {item?.about}
          </Text>
        </View>

        <View style={{height: verticalScale(6)}}></View>
          </ScrollView>
    </View>
    </>
  );
};

export default ViewManual;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ImageViewStyle: {
    height: w >= 768 && h >= 1024 ? verticalScale(140) : verticalScale(200),
    marginTop: w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(15),
    marginBottom: w >= 768 && h >= 1024 ? verticalScale(0) : verticalScale(5),
    alignSelf: 'center',
    width: '45%',
  },
  TextStyle: {
    fontFamily: Font.Poppins600,
    textAlign: 'center',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(16),
    width: '80%',
    alignSelf: 'center'
  },
  DetailTextStyle: {
    fontFamily: Font.Poppins400,
    color: Color.GreyText,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
    textAlign: 'center',
  },
  BoldDetailTextStyle: {
    fontFamily: Font.Poppins700,
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    lineHeight: verticalScale(30),
    // backgroundColor:'green',
    textAlign: 'center',
  },
  AuthorText: {
    fontFamily: Font.Poppins600,

    textAlign: 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
  About: {
    fontFamily: Font.Poppins600,

    textAlign: w >= 768 && h >= 1024 ? 'center' : 'left',
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15),
  },
  AuthorNameText: {
    fontFamily: Font.Poppins400,

    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    lineHeight: verticalScale(30),
    textAlign: 'left',
  },
  AboutText: {
    fontFamily: Font.Poppins400,

    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(13),
    marginTop: verticalScale(5),
  },
});
