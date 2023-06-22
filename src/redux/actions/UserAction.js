import AsyncStorage from "@react-native-async-storage/async-storage";
import { base_Url } from "../../utils/Url";
import { CHAPTERS, SEARCH_DATA, USER_DETAILS } from "../reducer";

export const show_all_banner = async (setForImage) =>{
    try {
        let base_url = `${base_Url}banner-active`;
  
        const response = await fetch(base_url, {
          method: 'GET',
        });
        const responseData = await response.json();
  
        if (responseData.success.status === 200) {
         console.log('responseData.success.data[0].app_page ==>', responseData.success.data)
         setForImage(responseData.success.data)
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
     setEvent(responseData.success.data)
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
     setData( responseData.success.data)
    } else {
      console.log('else error');
    }
  } catch (error) {
    console.log('error', error)
  }
}
export const updateProfile = (data,userData,saveimage,text,navigation,country,setLoader,setCheck) => {
  return async (dispatch) => {
    setLoader(true)
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

      {
        country != null &&
        myData.append('country',country.country_name)
      }
      
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
        setLoader(false)
        dispatch({type: USER_DETAILS, payload: responseData.success});
        await AsyncStorage.setItem('user_details', JSON.stringify(responseData.success));
        // alert('Profile has been succesfully updated')
        setCheck(true)
        setTimeout(() => {
          setCheck(false)
        }, 3000);
      } else {
        console.log('else error');
        setLoader(false)
      }
      
    } catch (error) {
      console.log('error', error)
      setLoader(false)
    }
  }
}
export const getBooks = async (setData) => {
  try {
    let base_url = `${base_Url}book-active`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setData(responseData.success.data)
      }else{
        console.log('first')
      }
     }catch (error) {
    console.log('error', error)
  }
}
export const getChaptersByID = async (setData,id) => {
  try {
    let base_url = `${base_Url}chapter/${id}`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setData(responseData.success.data)
      }else{
        console.log('first')
      }
     }catch (error) {
    console.log('error', error)
  }
}
export const getChapters =  (setData,id) => {
  return async (dispatch) => {

    try {
      let base_url = `${base_Url}book-chapter/${id}`;
      
      const response = await fetch(base_url, {
        method: 'GET',
      });
      const responseData = await response.json();
      
      if (responseData.success.status === 200) {
        setData(responseData.success.data[0])
        dispatch({type: CHAPTERS, payload: responseData.success.data})
        
      }else{
        console.log('first')
      }
    }catch (error) {
      console.log('error', error)
    }
  }
}
export const getFAQ = async (setData,setLoading) => {
  setLoading(true)
  try {
    let base_url = `${base_Url}faq`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setData(responseData.success.data)
      setLoading(false)
      }else{
        console.log('first')
        setLoading(false)
      }
     }catch (error) {
    console.log('error', error)
    setLoading(false)
  }
}
export const getPerishRegion = async (setData) => {
  try {
    let base_url = `${base_Url}region`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setData(responseData.success.data)
      }else{
        console.log('first')
      }
     }catch (error) {
    console.log('error', error)
  }
}
export const getPerishCountry = async (setData) => {
  try {
    let base_url = `${base_Url}parish-country-category`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setData(responseData.success.data)
      }else{
        console.log('first')
      }
     }catch (error) {
    console.log('error', error)
  }
}
export const getPerishProvince = async (setData) => {
  try {
    let base_url = `${base_Url}province`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setData(responseData.success.data)
      }else{
        console.log('first')
      }
     }catch (error) {
    console.log('error', error)
  }
}
export const searchPerish = async (country,province,region,navigation) => {
  console.log('country,province,region', country,province,region)
  try {
    let base_url = `${base_Url}search-parish`;
    let myData = new FormData()

    myData.append('region',region)
    myData.append('country',country)
    myData.append('province',province)
  
    const response = await fetch(base_url, {
      method: 'post',
      body:myData
    });
    const responseData = await response.json();
    console.log('responseData', responseData)

    if(responseData?.error?.status === 400){
      alert('Result not found')
    }

    if (responseData?.success?.status === 200) {
      // setData(responseData.success.data)
      navigation.navigate('ParishesResult',{
        data:responseData.success.data
      })
      }else{
        console.log('first')
      }
  } catch (error) {
    console.log('error', error)
  }
}
export const getSearchData =  () => {
  return async (dispatch) => {
    try {
      let base_url = `${base_Url}all-data`;
  
      const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();
    
    if (responseData.success.status === 200) {
      // setData(responseData.success.data)
      dispatch({type: SEARCH_DATA, payload: responseData.success.result})
      }else{
        console.log('first')
      }
    }catch (error) {
      console.log('error', error)
    }
  }
}
export const getfeaturedcountry = async (setData) => {
  try {
    let base_url = `${base_Url}country-featured`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setData(responseData.success.data)
      }else{
        console.log('first')
      }
     }catch (error) {
    console.log('error', error)
  }
}
export const getRCCData = async (setData,type,language,setLoader) => {
  setLoader(true)
  try {
    let base_url = `${base_Url}show-about`;
    let myData = new FormData();

    myData.append('type', type);
    myData.append('language', language);

    const response = await fetch(base_url, {
      body: myData,
      method: 'post',
    });

    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setData(responseData.success.data.description);
      setLoader(false)
    }else{
      setLoader(false)
    }
  } catch (error) {
    console.log('error', error);
    setLoader(false)
  }
}
export const markData = async (type,id,userData) => {
  console.log('type,id,userData', type,id,userData)
  try {
    let base_url = `${base_Url}mark/${userData.data.id}`;
    let myData = new FormData();

    myData.append('type', type);
    myData.append('type_id', id);

    const response = await fetch(base_url, {
      body: myData,
      method: 'post',
    });
    
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      console.log(responseData.success);
    }else{
      console.log('first')
    }
  } catch (error) {
    console.log('error', error);
  }
}
