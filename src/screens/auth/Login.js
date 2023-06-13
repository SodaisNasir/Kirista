import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  useColorScheme,
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
import Password from '../../components/Password';
import {useDispatch} from 'react-redux';
import {LOGIN} from '../../redux/reducer';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { sign_in } from '../../redux/actions/AuthAction';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Login = ({navigation}) => {

  
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
  const Dispatch = useDispatch();
  const Theme = useColorScheme() === 'dark';
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );

  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(sign_in(data));
    console.log(data);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme ? Color.DarkTheme : Color.White,
        paddingHorizontal:
          w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(20),
      }}>
      <StatusBar backgroundColor={Theme ? Color.DarkTheme : Color.White} />
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
              color: Theme ? Color.White : Color.Black,
            }}>
            Welcome Back,
          </Text>
          <Text
            style={{
              fontFamily: Font.Poppins700,
              fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(20),
              color: Theme ? Color.White : Color.Black,
              alignSelf: 'center',
              marginTop:
                Platform.OS == 'ios' ? verticalScale(-5) : verticalScale(-10),
            }}>
            Brethren.
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
                required: 'Email is required',
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Enter a valid email',
              }}
              onChangeText={txt => {
                console.log('text ==>', email);
                setEmail(txt);
              }}
             
              text={'Email Address'}
              placeholder={'Email Address'}
              keyboardType={'email-address'}
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
              text={'Password'}
              placeholder={'Password'}
              control={control}
              name="password"
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: '*Password too short (minimum length is 8)',
                },
                maxLength: {
                  value: 16,
                  message: '*Password too long (maximum length is 16)',
                },
              }}
              keyboardType="default"
              maxLength={20}
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
            text={'Sign in'}
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
                color: Theme ? Color.White : Color.TextColor,
              }}>
              Forgot Password?
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
                color: Theme ? Color.White : Color.TextColor,
              }}>
              Don’t have an account?
              <Text
                onPress={() => navigation.navigate('SignUp')}
                style={{
                  fontFamily: Font.Poppins700,
                  fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(13),
                  color: Theme ? Color.White : Color.TextColor,
                }}>
                {' '}
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
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
