import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  ScrollView,
  Platform,
  StyleSheet,
  StatusBar,
  Dimensions
} from 'react-native';
import React, {useState} from 'react';
import Kiristalogo from '../../constant/Kiristalogo';
import {Font} from '../../assets/fonts/PoppinsFont';
import {scale, verticalScale,moderateScale} from 'react-native-size-matters';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../utils/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import { sign_in } from '../../redux/actions/AuthAction';
import IncorrectModal from '../../components/Modals/IncorrectModal';
import Loader from '../../components/Modals/Loader';
import BlockedAccModal from '../../components/Modals/BlockedAccModal';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;

  const iosTab = w >= 820 && h >= 1180;
  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 600 && height <= 350;
  const tabPotrait = width >= 768 && height >= 1024;
  // const tabPotrait = w >= 768 && h >= 1024;
  // const standardLandscape = w >= 684 && h >= 360;
  // const tabLandscape = w >= 768 && h >= 1024;
  // const fourInchPotrait = w <= 350 && h <= 600;
  // const fourInchLandscape = w <= 350 && h <= 600;

  const [email, setEmail] = useState(null);
  const [check, setCheck] = useState(false)
  const [isVisible, setVisible] = useState(true);
  const [loader, setLoader] = useState(false);
  const [blocked, setBlocked] = useState(false);
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );

  const onSubmit = data => {
    dispatch(sign_in(data,setCheck,setLoader,setBlocked));
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        paddingHorizontal:
          w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
      }}>
      <StatusBar backgroundColor={Theme === 'dark' ? Color.DarkTheme : Color.White} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: '0%',
          }}>
          <Kiristalogo />
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: '0%',
            // backgroundColor:'red',
          }}>
          <Text
            style={{
              fontFamily: Font.Poppins700,
              fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(20),
              color: Theme === 'dark' ? Color.White : Color.Black,
            }}>
            {/* Welcome Back, */}
            {applanguage.Welcome}
          </Text>
          <Text
            style={{
              fontFamily: Font.Poppins700,
              fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(20),
              color: Theme === 'dark' ? Color.White : Color.Black,
              alignSelf: 'center',
              marginTop:
                Platform.OS == 'ios' ? verticalScale(-5) : verticalScale(-10),
            }}>
            {applanguage.Brethen}.
          </Text>
        </View>

        <View style={{marginTop: verticalScale(20)}}>
          <View
            style={{
              paddingVertical:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
            }}>
               
            <CustomInput
              control={control}
              name="email"
              rules={{
                required: applanguage.RequiredEmail,
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: applanguage.ValidEmail,
                },
              }}
              onChangeText={txt => {
                setEmail(txt);
              }}
             
              text={applanguage.EmailAddress}
              placeholder={applanguage.EmailAddress}
              keyboardType="email-address"
            />
               {errors.email && (
            <Text style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>{errors.email.message} </Text>
          )}
          
          </View>

       

          <View
            style={{
              // paddingTop:
              // w >= 768 && h >= 1024 ? moderateScale(10) : moderateScale(10),
              paddingBottom:
                w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
            }}>
            <CustomInput
              password={true}
              text={applanguage.Password}
              placeholder={applanguage.Password}
              control={control}
              name="password"
              rules={{
                required: applanguage.RequiredPassword,
                minLength: {
                  value: 8,
                  message: applanguage.PasswordMax,
                },
                maxLength: {
                  value: 16,
                  message: applanguage.PasswordMin,
                },
              }}
              keyboardType="default"
              maxLength={20}
              secureTextEntry={isVisible}
              PIname={isVisible ? 'eye-off-outline' : 'eye-outline'}
              onShowPass={() => setVisible(!isVisible)}
            />
            
              {errors.password && (
            <Text style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>{errors.password.message} </Text>
          )}
          </View>

        
        </View>

        <View
          style={{
            // marginHorizontal: '5%',
            paddingVertical:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(30),
          }}>
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            // onPress={() =>
            //   email != null
            //     ? Dispatch({type: LOGIN, payload: email})
            //     : alert('Complete the form')
            // }
            text={applanguage.SignIn}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: Font.Poppins700,
                fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(15),
                color: Theme === 'dark' ? Color.White : Color.TextColor,
              }}>
             {applanguage.ForgotPassword}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop:
                Platform.OS == 'ios' ? (iosTab ? '46%' : '52%') : '39%',
              // alignSelf:'center'
              // backgroundColor:'red',
              //
            }}>
            <Text
              style={{
                fontFamily: Font.Poppins400,
                fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(13),
                color: Theme === 'dark' ? Color.White : Color.TextColor,
              }}>
             {applanguage.LoginText}
              <Text
                onPress={() => navigation.navigate('SignUp')}
                style={{
                  fontFamily: Font.Poppins700,
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(13),
                  color: Theme === 'dark' ? Color.White : Color.TextColor,
                }}>
                {' '}
                {applanguage.SignUp}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>

      <BlockedAccModal
      onBackdropPress={() => setBlocked(false)}
      isVisible={blocked}
      text={applanguage.CheckAcc}
      text2={applanguage.ContctSup}
      />


      <IncorrectModal
          text={applanguage.Invalid}
          onPress={() => setCheck(false)}
          onBackdropPress={() => setCheck(false)}
          isVisible={check}
        />
        <Loader
   onBackdropPress={() => setLoader(false)}
   isVisible={loader}
/> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: Color.Main,
    fontFamily: Font.Inter500,
    alignSelf: 'flex-start',
    // marginLeft: scale(25),
    marginTop: 5,
    paddingHorizontal: verticalScale(10),
   
  },
});

export default Login;
