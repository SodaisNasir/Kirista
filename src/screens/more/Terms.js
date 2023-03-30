import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Color} from '../../utils/Colors';
import {verticalScale,scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import CustomNavigator from '../../components/CustomNavigator';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Terms = () => {
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.White}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header text={'Terms'} />
        <View style={styles.Container}>
          <View style={{marginVertical: verticalScale(12)}}>
            <Text style={styles.TextStyle}>Terms of Use</Text>
          </View>
          <Text style={styles.TextStyle}>
            This platform is powered by RCCG Africa Continent 2 and developed by
            IDC Platforms Limited ("we", "us" or "our"). The use, content and
            information available on this Mobile App shall be subject to
            acceptance of and compliance with the terms and conditions set forth
            in these terms of use and elsewhere on this Mobile App. The terms
            "you," "your", "yours", "member" "members" and "yourself" refer to
            all visitors/members to this Mobile App. Your agreement to comply
            with and be bound by these Terms of Use is deemed to occur upon your
            first use of the Mobile App.
          </Text>
          <Text style={styles.TextStyle}>
            If you do not agree to these Terms of Use, you should not review
            information from this Mobile App. We have the total right to edit or
            delete any content in this Mobile Platform, including this
            Agreement, without notifying you.
          </Text>
        </View>
        <View style={{height:verticalScale(85)}}/>
      </ScrollView>
      <View style={{position:'absolute',bottom:0,width:'100%',backgroundColor:Color.White}}>
          <CustomNavigator />
        </View>
    </SafeAreaView>
  );
};

export default Terms;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal:
      w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
  },
  TextStyle: {
    color: Color.DarkTextColor,
    fontFamily: Font.Libre400,
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(15),
  },
});
