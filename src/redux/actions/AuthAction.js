import AsyncStorage from '@react-native-async-storage/async-storage';
import {base_Url, token} from '../../utils/Url';
import {USER_DETAILS} from '../reducer';
import {OTP_SEND} from '../reducer';

export const sign_in = data => {
  return async (dispatch) => {
    try {
      let base_url = `${base_Url}login`;
      let formdata = new FormData();

      formdata.append(
        'token',
        token,
      );
      formdata.append('email', data.email);
      formdata.append('password', data.password);

      const response = await fetch(base_url, {
        method: 'POST',
        body: formdata,
      });
      const responseData = await response.json();

      if (responseData.success.status === 200) {
        dispatch({type: USER_DETAILS, payload: responseData.success});
        await AsyncStorage.setItem('user_details', JSON.stringify(responseData.success));
        console.log('responseData if for otpMEthod', responseData);
        console.log('USER_DETAILS', USER_DETAILS)
      } else {
        console.log('else error');
      }
    } catch (error) {
      console.log('catch error', error);
    }
  };
};

export const register =  (data, device) => {
  return async dispatch => {
    try {
      let base_url = `${base_Url}register`;
      let myData = new FormData();
      
      myData.append('name', data.full_name);
      myData.append('email', data.email);
      myData.append('password', data.password);
      myData.append('password_confirmation', data.confirm_password);
      myData.append('phone_number', data.phonenumber);
      myData.append('device', device);

      const response = await fetch(base_url, {
        body: myData,
        method: 'post',
      });

      const responseData = await response.json();

      if (responseData.success.status === 200) {
        dispatch({type: USER_DETAILS, payload: responseData.success});
        await AsyncStorage.setItem('user_details', JSON.stringify(responseData.success));
        console.log('responseData register', responseData);
        console.log('USER_DETAILS', USER_DETAILS)
      } else {
        console.log('else error');
      }
    } catch (error) {
      console.log('catch error', error);
    }
  };
};

// export const verify_Email = (data, navigation, type, setTime) => {
//   return async dispatch => {
//     try {
//       let base_url = `${base_Url}verify_Email`;
//       let myData = new FormData();

//       myData.append('token', token);
//       myData.append('email', data.email);

//       const response = await fetch(base_url, {
//         method: 'post',
//         body: myData,
//       });
//       const responseData = await response.json();

//       if (responseData.status == true) {
//         console.log('responseData', responseData);
//         dispatch({type: OTP_SEND, payload: responseData.data.top});
//         if (type == 'signup') {
//           navigation.navigate('OTP', {
//             type: type,
//             data: data,
//           });
//         } else {
//           console.log('===> V');
//           setTime(600);
//         }
//       } else {
//         console.log('else error');
//       }
//     } catch (error) {
//       console.log('catch error', error);
//     }
//   };
// };

export const verify_Email_before_password =  (data,navigation,type,setTime) => {
  return async (dispatch) => {
    console.log('data', data.email)
    try {
      let base_url = `${base_Url}verifyemail`;
      let myData = new FormData();

      myData.append('email', data.email);

      const response = await fetch(base_url, {
        method: 'POST',
        body: myData,
      });

      console.log('response', response)
      const responseData = await response.json();

      console.log('responseData', responseData)

      if(responseData?.error?.message === 'Email Not Exit'){
        setTime('Email Does Not Exist')
      }else{
        console.log('first')
      }

      if (responseData?.success?.status === 200) {
        dispatch({type: OTP_SEND, payload: responseData.success.Reset_code});
        if (type == 'forgot') {
          navigation.navigate('OTP', {
            type: type,
            data: data,
            id: responseData.success.id
          });
        } else {
          console.log('===> ');
          setTime(2);
        }
      } else {
        console.log('else error');
      }
    } catch (error) {
      console.log('catch error in verify email', error);
    }
  };
};


export const change_password = async (data,id,navigation) => {
  console.log('first',
  data.password,
  data.confirm_password,
  id
  )
  try {
    let base_url = `${base_Url}resetpassword/${id}`;
    let myData = new FormData();

    myData.append('password', data.password);
    myData.append('password_confirmation', data.confirm_password);

    const response = await fetch(base_url, {
      method: 'post',
      body: myData,
    });
    const responseData = await response.json();

    console.log('responseData', responseData)

    if (responseData.success.status === 200) {
      console.log('responseData', responseData);
      navigation.navigate('Login')
    } else {
      console.log('else error');
    }
  } catch (error) {
    console.log('catch error', error);
  }
};

export const OTPMethod = (id) => {
    return async (dispatch) => {
    try {
        let base_url = `${base_Url}approved/${id}`;

        const response = await fetch(base_url, {
          method: 'POST',
        });
        const responseData = await response.json();
        if (responseData.success.status === 200) {
            dispatch({type: USER_DETAILS, payload: responseData.success});
            await AsyncStorage.setItem('user_details', JSON.stringify(responseData.success));
            console.log('responseData if for otpMEthod', responseData);
            console.log('USER_DETAILS', USER_DETAILS)
          } else {
            console.log('else error');
          }
    } catch (error) {
        console.log('error', error)
    }
}}