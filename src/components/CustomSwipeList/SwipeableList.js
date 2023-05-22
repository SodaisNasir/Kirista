import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';

const SwipeableList = ({ data, style }) => {
  const [enable, setEnable] = useState(true);

  const renderSeparator = () => (
    <View style={styles.separatorViewStyle}>
      <View style={styles.separatorStyle} />
    </View>
  );

  const success = (key) => {
    const updatedData = data.filter(item => item.key !== key);
    setEnable(false);
    setEnable(true);
    setEnable(true);
    setEnable(true);
    setEnable(true);
  };

  const setScrollEnabled = (isEnabled) => {
    setEnable(isEnabled);
  };

  const renderItem = ({ item }) => (
    <ListItem
      text={item.key}
      success={success}
      setScrollEnabled={setScrollEnabled}
    />
  );

  return (
    <FlatList
      style={style}
      data={data}
      ItemSeparatorComponent={renderSeparator}
      renderItem={renderItem}
      scrollEnabled={enable}
    />
  );
};

const styles = StyleSheet.create({
  separatorViewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  separatorStyle: {
    height: 1,
    backgroundColor: '#000',
  },
});

export default SwipeableList;
