import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
  Image,
  StatusBar,
} from 'react-native';
import React, {useCallback} from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Color} from '../../../utils/Colors';
import {Font} from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';
import Header from '../../../components/Header';
import CustomNavigator from '../../../components/CustomNavigator';
import {useFocusEffect} from '@react-navigation/native';

const Rccg = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  const Theme = useColorScheme() === 'dark';
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={[
          {
            backgroundColor: Theme ? Color.DarkTheme : Color.White,
            flex: 1,
          },
        ]}>
        <StatusBar backgroundColor={ Theme ? Color.ExtraViewDark : Color.HeaderColor}/>

        <Header
          text={'RCCG'}
          welcomeText={{paddingTop:moderateScale(5)}}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
            }}>
            <View
              style={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(80)
                    : verticalScale(100),
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(15) : verticalScale(30),
                marginBottom:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(5),
              }}>
              <Image
                resizeMode="contain"
                source={require('../../../assets/images/rccg_logo.png')}
                style={{height: '100%', width: '100%'}}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(15),
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                The Redeemed Christian Church of God
              </Text>
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                RCCG is one of the world's largest and fastest growing
                Pentecostal churches, having been founded in 1952. The church
                has now grown into a megachurch, with at least 2000 parishes of
                the RCCG in Nigeria and parishes spread across the world's five
                continents, according to the most recent count.
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(8) : scale(14),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                Mission and Vision
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                1) To make heaven.
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                1) To make heaven.
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                2) To take as many people with us.
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                3) To have a member of RCCG in every family of all nations.
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                4) To accomplish No. 1 above, holiness will be our lifestyle.
              </Text>

              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                5) To accomplish No. 2 and 3 above, we will plant churches
                within five minutes walking distance in every city and town of
                developing countries and within five minutes driving distance in
                every city and town of developed countries.
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                6) We will pursue these objectives until every Nation in the
                world is reached for the Lord Jesus Christ.
              </Text>
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(10),
              }}>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                  fontFamily: Font.Poppins700,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                History
              </Text>
              <Text
                style={{
                  fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                  fontFamily: Font.Poppins500,
                  color: Theme ? Color.White : Color.DarkTextColor,
                }}>
                In July 1909, a son was born into the Akindayomi family of Ondo
                State of Nigeria. Even though this child grew up surrounded by
                idol worshippers, he knew there existed a greater power and
                yearned to know, “The God who created the earth and everyone on
                it”. This pursuit for God led him to the Church Missionary
                Society where he was baptized in 1927. Still spiritually
                unfulfilled, he joined the Cherubim and Seraphim church in 1931.
              </Text>

              <View
                style={{
                  marginVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(10)
                      : verticalScale(15),
                }}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  Whilst there, he began to hear a voice within him saying, “You
                  will be my servant.” Since this was not his intention, he
                  decided to ignore the voice. This went on for seven years
                  during which all the business ventures that he tried resulted
                  into failure. In debt and without peace of mind, he found
                  himself totally dependent on the grace of God. Here marked the
                  beginning of a definite relationship with God. Totally broken,
                  he yielded saying, “Lord, I will go wherever you want me to
                  go.” He asked for signs to confirm that this was indeed God’s
                  call. The confirmation came through the Bible passages of
                  Jeremiah 1:4-10, Isaiah 41:10-13 and Romans 8:29-31. The Lord
                  assured him that He would provide for all his needs, as he
                  would not receive any salary from that point on. This proved
                  to be a comforting reminder during the trials in the months
                  ahead. He became married in 1941. He continued to worship with
                  the Cherubim and Seraphim. In 1947, he started to become
                  concerned that the church was departing from the true Word of
                  God in some of its practices. By 1952, he felt totally
                  persuaded to leave the church. He started at Willoughby
                  Street, Ebute-Metta, Lagos a house fellowship called, the
                  Glory of God Fellowship. Initially there were nine members but
                  before long the fellowship rapidly grew as the news of the
                  miracles that occurred in their midst spread.
                </Text>
              </View>

              <View
                style={{
                  marginVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(10)
                      : verticalScale(15),
                }}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  Akindayomi also had a vision of words that appeared to be
                  written on a blackboard. The words were “The Redeemed
                  Christian Church of God.” Amazingly, Pa Akindayomi who could
                  not read or write was supernaturally able to write these words
                  down. In this visitation, God also said to him that this
                  church would go to the ends of the earth and that when the
                  Lord Jesus Christ appeared in glory, He would meet the church.
                  The Lord then established a covenant with Pa Akindayomi,
                  synonymous to the Abrahamic covenant in the Bible. He said
                  that He the Lord would meet all the needs of the church in an
                  awesome way if only members would serve Him faithfully and be
                  obedient to His Word. It is upon this covenant that the
                  Redeemed Christian Church of God was built.
                </Text>
              </View>

              <View
                style={{
                  marginVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(10)
                      : verticalScale(15),
                }}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  Thus, the Redeemed Christian Church of God was born in 1952,
                  destined by the Lord Himself to take the world for Him. The
                  church continued to meet at 9 Willoughby Street until they
                  were able to acquire some land thereby witnessing a relocation
                  to the present site of the Headquarters of the church at 1-5
                  Redemption Way, Ebute-Metta, Lagos (formerly 1a, Cemetery
                  Street).
                </Text>
              </View>

              <View
                style={{
                  marginVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(10)
                      : verticalScale(15),
                }}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  Sometime in the early 70s, God had spoken to Pa Akindayomi
                  about his successor. The Lord told him that this man who was
                  not a member of the church then, would be a young educated
                  man. Thus when a young university lecturer joined the church
                  in 1973, Papa was able to recognize him in the Spirit as the
                  one that the Lord had spoken about in the past. This man,
                  Enoch Adejare Adeboye who was then a lecturer of Mathematics
                  at the University of Lagos soon became involved in the church.
                  He became one of the interpreters translating Pa Akindayomi’s
                  sermons from Yoruba to English. He was ordained a pastor of
                  the church in 1975.
                </Text>
              </View>

              <View
                style={{
                  marginVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(10)
                      : verticalScale(15),
                }}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  Since 1981, an open explosion began with the number of
                  parishes growing in leaps and bounds. At the last count, there
                  are at least about 2000 parishes of the Redeemed Christian
                  Church of God in Nigeria. On the International scene, the
                  church is present in other African nations including C’ote
                  D’Ivoire, Ghana, Zambia, Malawi, Zaire, Tanzania, Kenya,
                  Uganda, Gambia, Cameroon, and South Africa. In Europe the
                  church is spread in England, Germany, and France. In the
                  United States there are parishes in Dallas, Tallahassee,
                  Houston, New York, Washington, and Chicago and also in the
                  Caribbean states of Haiti and Jamaica.
                </Text>
              </View>
              <View
                style={{
                  marginVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(10)
                      : verticalScale(15),
                }}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(12),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  Today, God is still doing marvellous deeds through the
                  Redeemed Christian Church of God, worldwide. One of the
                  well-known programs of the church is the Holy Ghost Service,
                  an all-night miracle service that holds on the first Friday of
                  every month at the Redemption Camp at Km. 46, Lagos-Ibadan
                  expressway. The average headcount of those who attend the
                  Service is about 500,000. The Holy Ghost Service now holds in
                  different parts of the world which includes the United
                  Kingdom, India, USA, Canada, South Africa, Australia, Dubai,
                  Ghana, Philippines and many more.
                </Text>
              </View>

              <View
                style={{
                  borderColor: Theme ? Color.DarkBorderColor : '#E5E5E5',
                  borderWidth: 0.5,
                  width: w >= 768 && h >= 1024 ? '70%' : '100%',
                  alignSelf: 'center',
                }}
              />
              <View
                style={{
                  alignItems: 'center',
                  marginVertical: verticalScale(15),
                  paddingVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(15)
                      : verticalScale(20),
                }}>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                    fontFamily: Font.Poppins500,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  Pastor E.A. Adeboye
                </Text>
                <Text
                  style={{
                    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
                    fontFamily: Font.Poppins700,
                    color: Theme ? Color.White : Color.DarkTextColor,
                  }}>
                  General Overseer, RCCG World Wide
                </Text>
              </View>

              <View
                style={{
                  borderColor: Theme ? Color.DarkBorderColor : '#E5E5E5',
                  borderWidth: 0.5,
                  width: w >= 768 && h >= 1024 ? '70%' : '100%',
                  alignSelf: 'center',
                }}
              />
              <View
                style={{
                  marginVertical:
                    w >= 768 && h >= 1024
                      ? verticalScale(15)
                      : verticalScale(15),
                }}>
                <CustomButton restyle={{width: '95%'}} text={'Read More'} />
              </View>
            </View>
          </View>
          <View
            style={{
              height: verticalScale(95),
            }}
          />
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: Color.White,
          }}>
          <CustomNavigator />
        </View>
      </View>
    </>
  );
};

export default Rccg;

const styles = StyleSheet.create({});
