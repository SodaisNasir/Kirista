import AsyncStorage from '@react-native-async-storage/async-storage';
import { base_Url, token } from '../../utils/Url';
import { USER_DETAILS } from '../reducer';
import { OTP_SEND } from '../reducer';



export const sign_in = (data) => {
    return async (dispatch) => {
        try {

            let base_url = `${base_Url}login`
            let myData = new FormData()

            myData.append('token', token)

            const response = await fetch(base_url,{
                method: 'post',
                body: myData
            })
            const responseData = await response.json()

            if(responseData.status == true){
                console.log('responseData', responseData)
                dispatch({type: USER_DETAILS, payload: responseData.data});
                await AsyncStorage.setItem('user_details', JSON.stringify(responseData.data));
            }else{
                console.log('else error')
            }
            
        } catch (error) {
            console.log('catch error', error)
        }
    }
}
export const register = (data) => {
    return async (dispatch) => {
        try {

            let base_url = `${base_Url}register`
            let myData = new FormData()

            // myData.append('token', token)
            myData.append('name ', data.fullname)
            myData.append('email', data.email)
            myData.append('password', data.password)
            myData.append('password_confirmation', data.confirm_password)
            myData.append('phone_number', data.phonenumber)

            const response = await fetch(base_url,{
                method: 'post',
                body: myData
            })
            console.log('response', response)
            const responseData = await response.json()
            console.log('responseData', responseData)

            if(responseData.status == true){
                console.log('responseData', responseData)
                dispatch({type: OTP_SEND, payload: responseData.data.top});
                // dispatch({type: USER_DETAILS, payload: responseData.data});
                // await AsyncStorage.setItem('user_details', JSON.stringify(responseData.data));
            }else{
                console.log('else error')
            }
            
        } catch (error) {
            console.log('catch error', error)
        }
    }
}
export const verify_Email =  (data,navigation,type,setTime) => {
    return async (dispatch) => {
        try {
            let base_url = `${base_Url}verify_Email`
            let myData = new FormData()

            myData.append('token', token)
            myData.append('email', data.email)

            const response = await fetch(base_url,{
                method: 'post',
                body: myData
            })
            const responseData = await response.json()

            if(responseData.status == true){
                console.log('responseData', responseData)
                dispatch({type: OTP_SEND, payload: responseData.data.top});
                if(type == 'signup'){
                    navigation.navigate('OTP',{
                        type: type,
                        data: data
                    })
                }else{
                    console.log('===> V')
                    setTime(600)
                }
            }else{
                console.log('else error')
            }
            
        } catch (error) {
            console.log('catch error', error)
        }

    } 
}
export const verify_Email_befaorep = (data,navigation,type,setTime) => {
    return async (dispatch) => {
        try {
    
            let base_url = `${base_Url}verify_Email`
            let myData = new FormData()
    
            myData.append('token', token)
            myData.append('email', data.email)
    
            const response = await fetch(base_url,{
                method: 'post',
                body: myData
            })
            const responseData = await response.json()
    
            if(responseData.status == true){
                console.log('responseData', responseData)
                  dispatch({type: OTP_SEND, payload: responseData.data.top});
                if(type == 'forgot'){
                    navigation.navigate('OTP',{
                        type: 'forgot',
                        data: data
                    })
                }else{
                    console.log('===> ')
                    setTime(600)
                }
            }else{
                console.log('else error')
            }
            
        } catch (error) {
            console.log('catch error', error)
        }
    }

}
export const change_password = async (data) => {
    try {

        let base_url = `${base_Url}verify_Email`
        let myData = new FormData()

        myData.append('token', token)
        myData.append('password', data.comfirm_password)

        const response = await fetch(base_url,{
            method: 'post',
            body: myData
        })
        const responseData = await response.json()

        if(responseData.status == true){
            console.log('responseData', responseData)
        }else{
            console.log('else error')
        }
        
    } catch (error) {
        console.log('catch error', error)
    }
}