import { View, Switch, useColorScheme,Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Color } from '../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import SwitchToggle from 'react-native-switch-toggle';


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CustomSwitch = props => {
  
  const Theme = useColorScheme() === 'dark';
  useEffect(() => {
    console.log(Theme);
  }, [Theme]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleSwitch = () => {
    if (toggleSwitch == setIsEnabled) {
      console.log('on');
    } else {
      console.log('Off');
    }
  };

  return (
    <View style={props.restyleSwitch}>
      <SwitchToggle
        switchOn={isEnabled}
        onPress={toggleSwitch}
        circleColorOff={Theme ? Color.DarkTheme : Color.White}
        circleColorOn={Theme ? Color.DarkTheme : Color.White}
        backgroundColorOn={Color.Main}
        backgroundColorOff= { Theme ? Color.InputBoxColor : '#D3D3D3'}
        duration={200}
        containerStyle={{
          width: w >= 768 && h >= 1024 ? scale(25) : scale(38),
          height: w >= 768 && h >= 1024 ? verticalScale(18) : verticalScale(26),
          borderRadius: scale(100),
          padding: moderateScale(5),
        }}
        circleStyle={{
          width: w >= 768 && h >= 1024 ? scale(8) : scale(13),
          height: w >= 768 && h >= 1024 ? scale(8) : scale(14),
          borderRadius: scale(100),
        
        }}
      />
      {/* <Switch
        onChange={handleSwitch()}
        trackColor={{
          false: Color.switchColor,
          true: Color.Main,
        }}
        thumbColor={Theme === 'dark' ? Color.DarkTheme : Color.White}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: scale(0.8) }, { scaleY: scale(0.8) }] }}
      /> */}
    </View>
  );
};

export default CustomSwitch;
