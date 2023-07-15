import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import {Color} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomInput from '../CustomInput';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import CustomButton from '../CustomButton';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const BookMarkModal = props => {
  const Theme = useSelector(state => state.mode);
  const applanguage = useSelector(state => state.applanguage);
  const [email, setEmail] = useState(null);
  const standardLandscape = width >= 684 && height >= 360;
  const tabLandscape = width >= 768 && height >= 1024;
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const tabPotrait = width >= 768 && height >= 1024;
  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 600 && height <= 350;
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  return (
    <Modal
      backdropOpacity={0.4}
      onBackdropPress={props.onBackdropPress}
      isVisible={props.isVisible}
      animationIn="slideInDown" // Set the animationIn property to slideInDown
      animationInTiming={400} // Adjust the animationInTiming value as needed
      animationOut="slideOutUp" // Set the animationOut property to slideOutUp
      animationOutTiming={400} // Adjust the animationOutTiming value as needed
      style={{
        flex: 1,
        justifyContent: 'flex-start',
      }}>
      <View
        style={[
          styles.ModalMain,
          {
            backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
          },
        ]}>
        <ScrollView>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(18),
              color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
              fontFamily: Font.Poppins700,
            }}>
            Enter you bookmark name
          </Text>

          <View
            style={{
              paddingVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(20) : moderateScale(15),
            }}>
            <CustomInput
              control={control}
              name="mark"
              //   rules={{
              //     required: applanguage.RequiredEmail,
              //     // value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              //     // pattern: {
              //     //   value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              //     //   message: applanguage.ValidEmail,
              //     // },
              //   }}
              //   onChangeText={txt => {
              //     setEmail(txt);
              //   }}
              onChangeText={props.onChangeText}
              //   text={applanguage.EmailAddress}
              placeholder={'Bookmark Name'}
              keyboardType="default"
            />
            {errors.email && (
              <Text
                style={[
                  {
                    fontSize: tabPotrait
                      ? verticalScale(11)
                      : fourInchLandscape
                      ? scale(12)
                      : scale(14),
                  },
                  styles.error,
                ]}>
                {errors.email.message}{' '}
              </Text>
            )}
          </View>

          <View
            style={{
              // marginHorizontal: '5%',
              paddingVertical:
                w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(15),
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(20) : moderateScale(15),
            }}>
            <CustomButton onPress={handleSubmit(props.onPress)} text={'Save'} />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  ModalMain: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: '45%',
    paddingVertical: moderateVerticalScale(20),
  },
});
export default BookMarkModal;
