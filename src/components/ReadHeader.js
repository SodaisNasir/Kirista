import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color} from '../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {Font} from '../utils/font';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ReadHeader = props => {
  const Theme = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const [isSelect, setisSelect] = useState(false);
  const handleClick = () => {
    setisSelect(!isSelect);
    if (props.onPress) {
      props.onPress(!isSelect);
    }
  };
  const selected = isSelect ? 'bookmark-outline' : 'bookmark';

  return (
    <View
      style={[
        {backgroundColor: Theme ? Color.DarkTheme : Color.HeaderColor},
        styles.AuthHeaderStyle,
      ]}>
      <View
        style={{
          flexDirection: 'row',

          marginBottom:
            w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(15),
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(15),
          justifyContent: 'space-between',
        }}>
        {props.textshown ? (
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text
              style={[
                {color: Theme ? Color.White : '#797B7F'},
                styles.WelcomeText,
              ]}>
              {props.text}
            </Text>
          </View>
        ) : null}

        {props.backicon ? (
          <View style={{justifyContent: 'center'}}>
            <AntDesign
              name="arrowleft"
              size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
              color={Theme ? Color.White : Color.Black}
              onPress={() => navigation.goBack()}
            />
          </View>
        ) : null}

        <TouchableOpacity
          onPress={handleClick}
          style={{justifyContent: 'center'}}>
          {props.bookmark ? (
            <Ionicons
              name={selected}
              size={w >= 768 && h >= 1024 ? scale(16) : scale(20)}
              color={Color.Main}
            />
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReadHeader;

const styles = StyleSheet.create({
  AuthHeaderStyle: {
    height: verticalScale(90),
    justifyContent: 'flex-end',
  },
  WelcomeText: {
    fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
    fontFamily: Font.Poppins400,
  },
});
