import AsyncStorage from '@react-native-async-storage/async-storage';
import {base_Url, token} from '../../utils/Url';
import {USER_DETAILS} from '../reducer';
import {OTP_SEND} from '../reducer';

export const sign_in = data => {
    console.log(data,'data in signin')
    console.log('USER_DETAILS', USER_DETAILS)
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

export const register =  (data, navigation, device) => {

  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return async dispatch => {
    try {
      let base_url = `${base_Url}register`;
      let formdata = new FormData();

      formdata.append('name', data.full_name);
      formdata.append('email', data.email);
      formdata.append('password', data.password);
      formdata.append('password_confirmation', data.confirm_password);
      formdata.append('phone_number', data.phonenumber);
      formdata.append('device', device);

      const response = await fetch(base_url, {
        body: formdata,
        method: 'post',
      });
      const responseData = await response.json();
      if (responseData.success.status === 200) {
        // dispatch({type: OTP_SEND, payload: responseData.success.otp});
        navigation.navigate('OTP', {
            Code: responseData.success.otp,
            data: data,
            type: 'signup',
            id: responseData.success.data.id
          });
        console.log('Code: responseData.success.otp', responseData.success.data.id)
      } else {
        console.log('else error');
      }
    } catch (error) {
      console.log('catch error', error);
    }
  };
};
export const verify_Email = (data, navigation, type, setTime) => {
  return async dispatch => {
    try {
      let base_url = `${base_Url}verify_Email`;
      let myData = new FormData();

      myData.append('token', token);
      myData.append('email', data.email);

      const response = await fetch(base_url, {
        method: 'post',
        body: myData,
      });
      const responseData = await response.json();

      if (responseData.status == true) {
        console.log('responseData', responseData);
        dispatch({type: OTP_SEND, payload: responseData.data.top});
        if (type == 'signup') {
          navigation.navigate('OTP', {
            type: type,
            data: data,
          });
        } else {
          console.log('===> V');
          setTime(600);
        }
      } else {
        console.log('else error');
      }
    } catch (error) {
      console.log('catch error', error);
    }
  };
};
export const verify_Email_before_password = async (data,navigation,type) => {
//   return async (dispatch) => {
    try {
      let base_url = `${base_Url}verifyemail`;
      let myData = new FormData();

      myData.append('token', token);
      myData.append('email', data.email);

      const response = await fetch(base_url, {
        method: 'POST',
        body: myData,
      });
      const responseData = await response.json();

      if (responseData.success.status === 200) {
        // console.log('responseData', responseData.success.Reset code);
        if (type == 'forgot') {
          navigation.navigate('OTP', {
            type: 'forgot',
            data: data,
          });
        } else {
          console.log('===> ');
        //   setTime(600);
        }
      } else {
        console.log('else error');
      }
    } catch (error) {
      console.log('catch error in verify email', error);
    }
//   };
};
export const change_password = async data => {
  try {
    let base_url = `${base_Url}verify_Email`;
    let myData = new FormData();

    myData.append('token', token);
    myData.append('password', data.comfirm_password);

    const response = await fetch(base_url, {
      method: 'post',
      body: myData,
    });
    const responseData = await response.json();

    if (responseData.status == true) {
      console.log('responseData', responseData);
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