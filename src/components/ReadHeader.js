import {StyleSheet, Text, View,Dimensions,TouchableOpacity} from 'react-native';
import React ,{useState} from 'react';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const ReadHeader = (props) => {
   const navigation = useNavigation();
    const [isSelect, setisSelect] = useState(false)
    const handleClick=()=>{
        setisSelect(!isSelect)
        if (props.onPress) {
            props.onPress(!isSelect);
          }
        
    }
    const selected = isSelect ? 'bookmark-outline' : 'bookmark'
    
    
        

    
  return (
    <View style={styles.AuthHeaderStyle}>
      <View
        style={{
          flexDirection: 'row',

          marginBottom:
            w >= 768 && h >= 1024 ? verticalScale(12) : verticalScale(8),
          paddingHorizontal:
            w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(15),
          justifyContent: 'space-between',
        }}>
        <View style={{justifyContent: 'center'}}>
          <AntDesign
            name="arrowleft"
            size={w >= 768 && h >= 1024 ? scale(16) : scale(24)}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>

        <TouchableOpacity 
         onPress = {handleClick}
        style={{justifyContent: 'center'}}>
          <Ionicons 
            name={selected}
            size={w >= 768 && h >= 1024 ? scale(16) : scale(22)}
            color={ Color.Main}
           
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReadHeader;

const styles = StyleSheet.create({
  AuthHeaderStyle: {
    backgroundColor: Color.HeaderColor,
    height: verticalScale(90),
    justifyContent: 'flex-end',
  },
});
