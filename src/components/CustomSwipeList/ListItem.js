import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, PanResponder, useColorScheme } from 'react-native';
import { Color } from '../../utils/Colors';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const ListItem = ({ text, success, setScrollEnabled }) => {
    // const Theme = useColorScheme() === 'dark'
    const Theme = useSelector(state => state.mode)
  const [position] = useState(new Animated.ValueXY());
  const gestureDelay = -35;
  const scrollViewEnabled = useRef(true);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 35) {
          setScrollViewEnabled(false);
          let newX = gestureState.dx + gestureDelay;
          position.setValue({ x: newX, y: 0 });
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < 150) {
          Animated.timing(position, {
            toValue: { x: 0, y: 0 },
            duration: 150,
          }).start(() => {
            setScrollViewEnabled(true);
          });
        } else {
          Animated.timing(position, {
            toValue: { x: width, y: 0 },
            duration: 300,
          }).start(() => {
            success(text);
            setScrollViewEnabled(true);
          });
        }
      },
    })
  ).current;

  const setScrollViewEnabledFn = (enabled) => {
    if (scrollViewEnabled.current !== enabled) {
      setScrollEnabled(enabled);
      scrollViewEnabled.current = enabled;
    }
  };

  return (
    <View style={styles.listItem}>
      <Animated.View style={[position.getLayout()]} {...panResponder.panHandlers}>
        <View style={styles.absoluteCell}>
          <Text style={styles.absoluteCellText}>DELETE</Text>
        </View>
        <View style={[styles.innerCell,{backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,}]}>
          <Text>{text}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 80,
    marginLeft: -100,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  absoluteCell: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  absoluteCellText: {
    margin: 16,
    color: '#FFF',
  },
  innerCell: {
    width: width,
    height: 80,
    marginLeft: 100,
    
    justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft:50
  },
});

export default ListItem;
