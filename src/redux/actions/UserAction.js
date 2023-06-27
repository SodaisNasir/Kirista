import AsyncStorage from "@react-native-async-storage/async-storage";
import { base_Url } from "../../utils/Url";
import { CHAPTERS, SEARCH_DATA, USER_DETAILS } from "../reducer";

export const show_all_banner = async (setForImage) =>{
    try {

      const noti =await AsyncStorage.getItem("onesignaltoken");
        let base_url = `${base_Url}banner-active/${noti}`;
  
        const response = await fetch(base_url, {
          method: 'GET',
        });
       
        const responseData = await response.json();

        if (responseData.success.status === 200) {
         setForImage(responseData.success.data)
        //  setForLink( responseData.success.data[0].app_page)
        } else {
          console.log('else error');
        }
    } catch (error) {
        console.log('error in banner api', error)
    }
}
export const show_popup = async (setForImage, setForTitle,setForLink,setData,Device) =>{
    try {
        let base_url = `${base_Url}popup-active`;
        let myData = new FormData()

        myData.append('platform',Device)

        const response = await fetch(base_url, {
          method: 'post',
          body: myData,
        });
        const responseData = await response.json();
  
        if (responseData.success.status === 200) {
         console.log('responseData.success.data[0].app_page ==>', responseData.success.data)
         setData(responseData.success.data)
        //  setForImage(responseData.success.data[0].image)
        //  setForTitle(responseData.success.data[0].title)
        //  setForLink(responseData.success.data[0].app_page)
       
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
export const parish_by_id = async (setData, id,setLoading,setmap) => {
  setLoading(true)
  try {
    let base_url = `${base_Url}parish/${id}`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      console.log("====================");
      console.log("====================>",JSON.parse(responseData.success.data["map"]));  
      console.log("====================");
      setmap(JSON.parse(responseData.success.data["map"]))
      setLoading(false)
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
export const event_by_id = async (setData, id,setLoading,setmap) => {

  setLoading(true)
  try {
    let base_url = `${base_Url}event/${id}`;
  
    const response = await fetch(base_url, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (responseData.success.status === 200) {
      setLoading(false)
      console.log("====================");
      console.log("====================>",JSON.parse(responseData.success.data["map"]));  
      console.log("====================");
      setmap(JSON.parse(responseData.success.data["map"]))
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
export const getFAQ = async (setData,setLoading,language) => {
  setLoading(true)
  try {
    let base_url = `${base_Url}faq-language`;
    let myData = new FormData()

    myData.append('language',language)

    const response = await fetch(base_url, {
      method: 'post',
      body: myData
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
export const getPerishRegion = async (setData,dataType) => {
  try {
    let base_url = `${base_Url}region-country`;
    let myData = new FormData()

    myData.append('country',dataType)
  
    const response = await fetch(base_url, {
      method: 'post',
      body: myData
    });

    console.log('response', response)
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
export const getPerishProvince = async (setData,dataType) => {
  try {
    let base_url = `${base_Url}province-region`;
    let myData = new FormData()

    myData.append('region',dataType)

    const response = await fetch(base_url, {
      method: 'post',
      body: myData
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
export const searchPerish = async (country,province,region,navigation,setMessage,setCheck,applanguage) => {
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

    if(responseData?.error?.status === 400){
      setMessage(applanguage.NofounD)
      setCheck(true)
    }else if (responseData?.success?.status === 200) {
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
export const editNotification = async (userData) => {

  try {
    let base_url = `${base_Url}edit-notification/${userData.data.id}`;
    const response = await fetch(base_url, {
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