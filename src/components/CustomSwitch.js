import { View, Switch, useColorScheme } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Color } from '../utils/Colors';
import { scale } from 'react-native-size-matters';

const CustomSwitch = props => {
  const Theme = useColorScheme();
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
      <Switch
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
      />
    </View>
  );
};

export default CustomSwitch;
