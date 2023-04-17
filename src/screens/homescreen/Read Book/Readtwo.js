import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  useColorScheme,
} from 'react-native';
import React, {
  useFocusEffect,
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
} from 'react';
import ReadHeader from '../../../components/ReadHeader';
import {Color} from '../../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import ReadNavigator from '../../../components/ReadNavigator';
import {useNavigation} from '@react-navigation/native';
import ChapterOptionModal from '../../../components/Modals/ChapterOptionModal';
import FontModal from '../../../components/Modals/FontModal';
import DrawerScreen from '../../../components/DrawerScreen';

const Readtwo = () => {
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);

  const Theme = useColorScheme() === 'dark';
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);
  const toggleModalTwo = () => {
    setSecondModalVisible(!isSecondModalVisible);
  };

  const [showThirdModal, setshowThirdModal] = useState(false);
  const [isModalThreeVisible, setModalThreeVisible] = useState(false);
  const toggleModalThree = () => {
    setModalThreeVisible(!isModalThreeVisible);
  };

  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const text_color = Theme ? Color.White : Color.Black;


  const [backgroundColor, setBackgroundColor] = useState(Theme ? Color.DarkTheme : Color.White);
  
  const [textColor, setTextColor] = useState(text_color);

  const handlepressone = () => {
    setBackgroundColor('#F5F5F5');
    setTextColor(Color.Black);
  };
  const handlepresstwo = () => {
    setBackgroundColor('#F5EDD8');
    setTextColor(Color.Black);
  };

  const handlepressthree = () => {
    setBackgroundColor('#E5F1FD');
    setTextColor(Color.Black);
  };

  const handlepressfour = () => {
    setBackgroundColor('#DBE7E3');
    setTextColor(Color.Black);
  };

  const navigation = useNavigation();
  // useEffect(() => {
  //   navigation
  //     .getParent()
  //     ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false})
  //   return () =>
  //     navigation
  //       .getParent()
  //       ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined})
  // }, [navigation])

  return (
    <SafeAreaView
      style={[
        styles.MainContainer,
        {backgroundColor},
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReadHeader bookmark={true} backicon={true} />
        <View
          style={{
            paddingHorizontal:
              w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
          }}>
          <View style={{marginVertical: verticalScale(20)}}>
            <Text
              style={[
                {
                  fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(20),
                  
                },

                styles.Title,
                {color: textColor}
              ]}>
              Chapter 1
            </Text>
          </View>
          <View style={{marginVertical: verticalScale(15)}}>
            <Text
              style={[
                {fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15)},
                styles.TextStyle,
                {color : textColor},
              ]}>
              A book is a medium for recording information in the form of
              writing or images, typically composed of many pages (made of
              papyrus, parchment, vellum, or paper) bound together and protected
              by a cover.
            </Text>
            <Text
              style={[
                {fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15)},
                {color : textColor},
                styles.TextStyle,
              ]}>
              The technical term for this physical arrangement is codex (plural,
              codices). In the history of hand-held physical supports for
              extended written compositions or records, the codex replaces its
              predecessor, the scroll. A single sheet in a codex is a leaf and
              each side of a leaf is a page.
            </Text>
            <Text
              style={[
                {fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(15)},
                styles.TextStyle,
                {color : textColor},
              ]}>
              As an intellectual object, a book is prototypically a composition
              of such great length that it takes a considerable investment of
              time to compose and still considered as an investment of time to
              read. In a restricted sense, a book is a self-sufficient section
              or part of a longer composition, a usage reflecting that, in
              antiquity, long works had to be written on several scrolls and
              each scroll had to be identified by the book it contained. Each
              part of Aristotle's Physics is called a book. In an unrestricted
              sense, a book is the compositional whole of which such sections,
              whether called books or chapters or parts, are parts.
            </Text>
          </View>
        </View>
        <View style={{height:verticalScale(75)}}/>

        <ChapterOptionModal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          swipeDirection="down"
          onSwipeComplete={() => setModalVisible(false)}
          onRequestClose={() => setModalVisible(false)}
          HandlePressOne={handlepressone}
          HandlePressTwo={handlepresstwo}
          HandlePressThree={handlepressthree}
          HandlePressFour={handlepressfour}
          toggleModalTwo={() => {
            setShowSecondModal(toggleModalTwo(true));
          }}
        />

        <FontModal
          isVisible={isSecondModalVisible}
          onBackdropPress={() => setSecondModalVisible(false)}
          // swipeDirection="down"
          onSwipeComplete={() => setSecondModalVisible(false)}
          onRequestClose={() => setSecondModalVisible(false)}
          OptionSelect={() => setSecondModalVisible(false)}
        />

        <DrawerScreen
          isVisible={isModalThreeVisible}
          onBackdropPress={() => setModalThreeVisible(false)}
          // swipeDirection="slideInLeft"
          onSwipeComplete={() => setModalThreeVisible(false)}
          onRequestClose={() => setModalThreeVisible(false)}
          OptionSelect={() => setModalThreeVisible(false)}
        />
      </ScrollView>
      <View
        style={{
          flex: 1,
          // paddingHorizontal: moderateScale(10),

          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <ReadNavigator
          onPressTab={() => {
            setshowThirdModal(toggleModalThree(true));
          }}
          onPressModal={() => {
            setShowModal(toggleModal(true));
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Readtwo;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  Title: {
    fontFamily: Font.Libre400,
  },
  TextStyle: {
    fontFamily: Font.Libre400,
    marginBottom: verticalScale(20),
    // color:Color.Main
  },
});
