import {View, Switch, useColorScheme,Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Color} from '../utils/Colors';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { editNotification } from '../redux/actions/UserAction';

const CustomSwitch = props => {
  const Theme = useSelector(state => state.mode)

  const userData =  useSelector(state => state.user_details)
  useEffect(() => {
    console.log(Theme);
  }, [Theme]);
  const [isEnabled, setIsEnabled] = useState(userData?.data?.notification_status == "Active" ?  true : false);
  const toggleSwitch = () => {setIsEnabled(previousState => !previousState)
    editNotification(userData);
  };

  return (
    <View style={props.restyleSwitch}>
      <Switch
        onChange={console.log(isEnabled == true ? 'its true' : 'its false')}
        trackColor={{
          false: '#EBEAEA',
          true: Color.Main,
        }}
        thumbColor={Theme === 'dark' ? '#0e346c' : Color.White}
        ios_backgroundColor="#D3D3D3"
        onValueChange={toggleSwitch}
        value={isEnabled}
        // style={{transform: [{scaleX: scale(0.8)}, {scaleY: scale(0.8)}]}}
        // style={{height}}
        // style={{ transform: Platform.OS === 'ios' ?  [{ scaleX:  moderateScale(1, -3) }, { scaleY:  
        //   moderateScale(1, -3) }]}}
      />
    </View>
  );
};

export default CustomSwitch;
