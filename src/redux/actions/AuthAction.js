import AsyncStorage from '@react-native-async-storage/async-storage';
import {base_Url, token} from '../../utils/Url';
import {IS_GUEST, RCCG_DATA, USER_DETAILS} from '../reducer';
import {OTP_SEND} from '../reducer';

export const sign_in = (data,setCheck,setLoader) => {
  return async (dispatch) => {
    try {
      setLoader(true);
      let base_url = `${base_Url}login`;
      let formdata = new FormData();
     const notiToken =  await AsyncStorage.getItem('onesignaltoken')
      formdata.append(
        'token',
        token,
      );
      formdata.append('email', data.email);
      formdata.append('password', data.password);
      formdata.append("device_token",notiToken)
      const response = await fetch(base_url, {
        method: 'POST',
        body: formdata,
      });

      const responseData = await response.json();

      if (responseData?.success?.status === 200) {
        dispatch({type: USER_DETAILS, payload: responseData.success});
        dispatch({type: IS_GUEST, payload: false});
        await AsyncStorage.setItem('user_details', JSON.stringify(responseData.success));
        setLoader(false);
      } else {
        console.log('else error');
        setCheck(true)
        setLoader(false);
      }
    } catch (error) {
      console.log('catch error', error);
      
    }
  };
};
export const register =  (data, device,setEmail,setCheck,country,setLoader,language) => {
  return async dispatch => {
    setLoader(true)
    try {
     const notification_token = await AsyncStorage.getItem('onesignaltoken')
      let base_url = `${base_Url}register`;
      let myData = new FormData();

      myData.append('name', data.full_name);
      myData.append('email', data.email);
      myData.append('password', data.password);
      myData.append('password_confirmation', data.confirm_password);
      myData.append('phone_number', data.phonenumber);
      myData.append('device', device);
      myData.append('country', country.country_name);
      myData.append('device_token', notification_token);
      myData.append('language', language);

      const response = await fetch(base_url, {
        body: myData,
        method: 'post',
      });

      const responseData = await response.json();

      if(responseData?.error?.email){
        setEmail(responseData?.error.email[0])
        setCheck(true)
        setLoader(false)
      }else if(responseData?.error?.phone_number){
        setEmail(responseData?.error?.phone_number[0])
        setCheck(true)
        setLoader(false)
      }else if (responseData?.success?.status === 200) {
        await AsyncStorage.setItem('user_details', JSON.stringify(responseData.success));
        setLoader(false)
        
        dispatch({type: USER_DETAILS, payload: responseData.success});
      } else {
        setLoader(false)
         console.log('else error');
      }
    } catch (error) {
      setLoader(false)
      console.log('catch error', error);
    }
  };
};
export const verify_Email_before_password =  (data,navigation,type,setTime,applanguage) => {
  return async (dispatch) => {
    try {
      let base_url = `${base_Url}verifyemail`;
      let myData = new FormData();

      myData.append('email', data.email);

      const response = await fetch(base_url, {
        method: 'POST',
        body: myData,
      });


      const responseData = await response.json();



      if(responseData?.error?.message === 'Email Not Exit'){
        setTime(applanguage.EmailNotExt)
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
export const change_password = async (data,id,navigation,setCheck) => {
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
      setCheck(true)
      console.log('responseData', responseData);
      setTimeout(() => {
        navigation.navigate('Login')
        // setCheck(false)
      }, 1500);
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
export const skipGuest = (device) => {
  return async (dispatch) => {
   try {
    const notification_token = await AsyncStorage.getItem('onesignaltoken')
    let baseUrl = `${base_Url}skip`
    let myData = new FormData()

    myData.append('device_name',device)
    myData.append('device_token',notification_token)

    const response = await fetch(baseUrl,{
      body: myData,
      method: 'post'
    })

    const responseData = await response.json()

    if(responseData?.success?.status === 200){
      dispatch({type: IS_GUEST, payload: true});
      dispatch({type: USER_DETAILS, payload: 'guest'});
    }else{
      console.log('else error')
      dispatch({type: IS_GUEST, payload: true});
      dispatch({type: USER_DETAILS, payload: 'guest'});
    }

   } catch (error) {
    console.log('error', error)
    dispatch({type: IS_GUEST, payload: true});
    dispatch({type: USER_DETAILS, payload: 'guest'});
   }
  }
}
export const LogOut = (setloader) => {
return async dispatch => {
  try {
    setloader(true);
   const data =  await AsyncStorage.getItem('user_details')
   const userData = JSON.parse(data);
console.log('userData.data.id', userData.data.id)
    let base_url = `${base_Url}logout-notify/${userData.data.id}`;

    const response = await fetch(base_url, {
      method: 'post',
    });

    
    const responseData = await response.json();
console.log('responseData', responseData)
    if (responseData?.success?.status === 200) {
      await AsyncStorage.removeItem('user_details')
      const data = await AsyncStorage.getItem('user_details');
      const userData = JSON.parse(data);
      dispatch({type: USER_DETAILS, payload: null})
      setloader(false);
      console.log(responseData.success);
    }else{
      console.log('else error')
      setloader(false);
    }
  } catch (error) {
    console.log('error', error);
  }
}

}
export const get_rccgData = (language) => {
  return async dispatch => {
    try {
      let base_url = `${base_Url}about`;
      let myData = new FormData()

      myData.append('language',language)

      const response = await fetch(base_url, {
        method: 'post',
        body:myData
      });
      
      const responseData = await response.json();
      console.log('responseData ===>', responseData)
  
      if (responseData?.success?.status === 200) {
        await AsyncStorage.setItem('rccgData', JSON.stringify(responseData.success.data));
        dispatch({type: RCCG_DATA, payload: responseData.success.data})
      }else{
        console.log('first =====>')
      }
    } catch (error) {
      console.log('error =====>', error);
    }
  }
  
}