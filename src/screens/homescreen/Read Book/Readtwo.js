import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useFocusEffect, useCallback, useEffect, useState} from 'react';
import ReadHeader from '../../../components/ReadHeader';
import {Color} from '../../../utils/Colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import ReadNavigator from '../../../components/ReadNavigator';
import {useNavigation} from '@react-navigation/native';
import ChapterOptionModal from '../../../components/Modals/ChapterOptionModal';
import FontModal from '../../../components/Modals/FontModal';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Readtwo = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handlePress = () => {
    setBackgroundColor('#F5EDD8');
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  
  const toggleModalTwo = () => {
    setSecondModalVisible(!isSecondModalVisible);
  };

  const navigation = useNavigation();
  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.MainContainer, {backgroundColor}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReadHeader />
        <View style={styles.Container}>
          <View style={{marginVertical: verticalScale(20)}}>
            <Text style={styles.Title}>Chapter 1</Text>
          </View>
          <View style={{marginVertical: verticalScale(15)}}>
            <Text style={styles.TextStyle}>
              A book is a medium for recording information in the form of
              writing or images, typically composed of many pages (made of
              papyrus, parchment, vellum, or paper) bound together and protected
              by a cover.
            </Text>
            <Text style={styles.TextStyle}>
              The technical term for this physical arrangement is codex (plural,
              codices). In the history of hand-held physical supports for
              extended written compositions or records, the codex replaces its
              predecessor, the scroll. A single sheet in a codex is a leaf and
              each side of a leaf is a page.
            </Text>
            <Text style={styles.TextStyle}>
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
        {showModal == false ? (
          <ChapterOptionModal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            swipeDirection="down"
            onSwipeComplete={() => setModalVisible(false)}
            onRequestClose={() => setModalVisible(false)}
          />
        ) : (
          setShowModal(false)
        )}

        {showSecondModal == false ? (
          <FontModal
            isVisible={isSecondModalVisible}
            onBackdropPress={() => setSecondModalVisible(false)}
            swipeDirection="down"
            onSwipeComplete={() => setSecondModalVisible(false)}
            onRequestClose={() => setSecondModalVisible(false)}
            OptionSelect={() => setSecondModalVisible(false)}
          />
        ) : (
          setShowSecondModal(false)
        )}
      </ScrollView>
      <View
        style={{
          flex: 1,
          // backgroundColor: Color.Main,
          paddingHorizontal: moderateScale(10),
          // paddingVertical: 24,
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <ReadNavigator
          onPress={() => {
            setShowModal(toggleModal(true));
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Readtwo;

const styles = StyleSheet.create({
  MainContainer: {flex: 1},
  Container: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
  },
  Title: {
    color: Color.Black,
    fontFamily: Font.Libre400,
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(20),
  },
  TextStyle: {
    color: Color.TextColor2,
    fontFamily: Font.Libre400,
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(15),
    marginBottom: verticalScale(20),
  },
});
