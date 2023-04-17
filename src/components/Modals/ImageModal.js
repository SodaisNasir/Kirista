import React, {useState} from 'react';
import {
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {verticalScale, scale} from 'react-native-size-matters';
const ImageModal = props => {
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;

  return (
    <View style={{flex: 1}}>
      <Modal
        blurRadius={14}
        isVisible={props.isVisible}
        backdropOpacity={0.9}
        //    onPress={() => setModalVisible(false)}
      >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.Btn} onPress={props.onPress}>
            <Fontisto name="close-a" size={ w >= 768 && h >= 1024 ? scale(14) : scale(18)} color={'#fff'} />
          </TouchableOpacity>
        
          <Image
            style={[
              {
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(200)
                    : verticalScale(200),
                   
              },
              styles.image,
            ]}
            resizeMode="stretch"
            source={require('../../assets/images/modalimg.png')}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '95%',
  },
  Btn: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    top: scale(20),
    right: scale(20),
  },
});

export default ImageModal;
