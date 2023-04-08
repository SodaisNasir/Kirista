import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  
  const RedeemImageCard = () => {
    return (
      <>
        <View style={styles.TopBox} />
        <View style={styles.container}>
          <ImageBackground
            style={{flex: 1}}
            resizeMode="cover"
            source={require('../assets/images/modalimg.png')}>
            <ImageBackground
              style={styles.firstImg}
              source={require('../assets/images/redeemImgradiant.png')}>
              <View style={styles.mainBox}>
                <Image style={styles.image} source={require('../assets/images/rccg.png')} />
                <View style={{marginLeft: 10}}>
                  <Text style={styles.text}>
                    THE REDEEMED {`\n`}CHRISTIAN {`\n`}CHURCH OF GOD.
                  </Text>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.readmore}>Read More</Text>
                    <Fontisto
                      name="angle-right"
                      color="#FFF"
                      size={18}
                      style={{marginLeft: 10}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </ImageBackground>
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      height: 200,
      width: 350,
    },
    mainBox: {
      flexDirection: 'row',
    },
    text: {
      fontSize: 25,
      fontWeight: '800',
      color: '#FFF',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    image: {
      width: 80,
      height: 80,
      marginHorizontal: 20,
    },
    btn: {
      flexDirection: 'row',
      marginTop: 20,
    },
    readmore: {
      fontSize: 18,
      fontWeight: '800',
      color: '#FFF',
    },
    TopBox: {
      height: 10,
      width: 350,
      backgroundColor: '#28166F',
    },
    firstImg: {flex: 1, justifyContent: 'center'},
  });
  
  export default RedeemImageCard;
  