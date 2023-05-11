import {View, Switch, useColorScheme,Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Color} from '../utils/Colors';
import { moderateScale } from 'react-native-size-matters';

const CustomSwitch = props => {
  const Theme = useColorScheme() === 'dark';
  useEffect(() => {
    console.log(Theme);
  }, [Theme]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={props.restyleSwitch}>
      <Switch
        onChange={console.log(isEnabled == true ? 'its true' : 'its false')}
        trackColor={{
          false: '#EBEAEA',
          true: Color.Main,
        }}
        thumbColor={Theme ? '#0e346c' : Color.White}
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
