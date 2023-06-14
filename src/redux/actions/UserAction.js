import AsyncStorage from "@react-native-async-storage/async-storage";
import { base_Url } from "../../utils/Url";
import { USER_DETAILS } from "../reducer";

export const show_all_banner = async (setForImage,setForLink) =>{
    try {
        let base_url = `${base_Url}banner`;
  
        const response = await fetch(base_url, {
          method: 'GET',
        });
        const responseData = await response.json();
  
        if (responseData.success.status === 200) {
         console.log('responseData.success.data[0].app_page ==>', responseData.success.data[0].app_page)
         setForImage( responseData.success.data[0].image)
        //  setForLink( responseData.success.data[0].app_page)
        } else {
          console.log('else error');
        }
    } catch (error) {
        console.log('error', error)
    }
}
export const show_popup = async (setForImage, setForTitle,setForLink) =>{
    try {
        let base_url = `${base_Url}popup-active`;
  
        const response = await fetch(base_url, {
          method: 'GET',
        });
        const responseData = await response.json();
  
        if (responseData.success.status === 200) {
         console.log('responseData.success.data[0].app_page ==>', responseData)
         setForImage( responseData.success.data[0].image)
         setForTitle( responseData.success.data[0].title)
         setForLink( responseData.success.data[0].app_page)
       
        } else {
          console.log('else error');
        }
    } catch (error) {
        console.log('error', error)
    }
}

<<<<<<< Updated upstream
export const parish = async (setData) => {
  try {
    let base_url = `${base_Url}parish-active`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
     console.log('responseData in parish ==>', responseData)
     setData( responseData.success.data)
    } else {
      console.log('else error');
    }
  } catch (error) {
    console.log('error', error)
  }
}
export const parish_by_id = async (setData, id,setLoading) => {
  setLoading(true)
  try {
    let base_url = `${base_Url}parish/${id}`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setLoading(false)
     console.log('responseData in parish ==>', responseData)
     setData( responseData.success.data)
    } else {
      console.log('else error');
    }
  } catch (error) {
    console.log('error', error)
  }
}

export const active_event = async (setEvent) => {
  try {
    let base_url = `${base_Url}event-active`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
     console.log('responseData in active_event ==>', responseData)
     setEvent( responseData.success.data)
    } else {
      console.log('else error');
    }
  } catch (error) {
    console.log('error', error)
  }
}

export const event_by_id = async (setData, id,setLoading) => {
  setLoading(true)
  try {
    let base_url = `${base_Url}event/${id}`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setLoading(false)
     console.log('responseData in parish ==>', responseData)
     setData( responseData.success.data)
    } else {
      console.log('else error');
    }
  } catch (error) {
    console.log('error', error)
=======
export const updateProfile = (data,userData,saveimage,text,navigation) => {
  return async (dispatch) => {
    try {

      let base_url = `${base_Url}edituser/${userData.data.id}`;

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${userData.token}`)

      let myData = new FormData()

      {
        data.full_name === userData.data.full_name &&
        myData.append('name',data.full_name)
      }
      {
        data.email   != userData.data.email &&

        myData.append('email', data.email)
      }
      {
        data.phonenumber != userData.data.phone_number &&
        myData.append('phone_number',data.phonenumber)
      }
      myData.append('country',)
      {
        saveimage &&
        myData.append('profile_image',saveimage)
      }
      {
        text != ''  &&
        myData.append('old_password', data.password)
        myData.append('password',text != '' ? text : null)
      }
  
      const response = await fetch(base_url, {
        method: 'post',
        body: myData,
        headers: myHeaders,
        redirect: 'follow'
      });
      const responseData = await response.json();

      if (responseData.success.status === 200) {
        dispatch({type: USER_DETAILS, payload: responseData.success});
        await AsyncStorage.setItem('user_details', JSON.stringify(responseData.success));
        alert('Profile has been succesfully updated')
      } else {
        console.log('else error');
      }
      
    } catch (error) {
      console.log('error', error)
    }
>>>>>>> Stashed changes
  }
}