import { base_Url } from "../../utils/Url";

export const show_all_banner = async (setForImage,setForLink) =>{
    try {
        let base_url = `${base_Url}banner `;
      
  
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