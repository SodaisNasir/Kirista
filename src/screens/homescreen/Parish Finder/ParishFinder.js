import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import HomeHeader from '../../../components/HomeHeader';
import {Color} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import CustomInput from '../../../components/CustomInput';
import SelectDropdown from '../../../components/SelectDropdown';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const ParishFinder = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader
          ParishRestyle={{color: Color.Main, fontFamily: Font.Poppins700}}
          ParishUnderLineStyle={{
            width: '25%',
            backgroundColor: Color.Main,
            height: verticalScale(2),
            bottom: scale(4),
          }}
        />
        <View style={styles.ViewStyling}>
          <View style={styles.ViewStyling}>
            <SelectDropdown text={'Country'} title={'Select Country'} />
          </View>
          <View style={styles.ViewStyling}>
            <SelectDropdown text={'Region'} title={'Select Region'} />
          </View>
          <View style={styles.ViewStyling}>
            <SelectDropdown text={'Province'} title={'Select Province'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParishFinder;

const styles = StyleSheet.create({
  ViewStyling: {
    marginVertical: w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(15),

  },
});
