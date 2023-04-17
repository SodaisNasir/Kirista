import Slider from 'react-native-custom-slider';

 <View>
        <Slider
          style={{width: '100%'}}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={data.value}
          onValueChange={setSliderValue}
          minimumTrackTintColor="#8CE04F"
          maximumTrackTintColor="#fff"
          thumbTintColor="#8CE04F"
          thumbStyle={{
            borderWidth: scale(1),
            borderColor: '#8CE04F',
            height: w >= 768 && h >= 1024 ? scale(15) : scale(15),
            width: w >= 768 && h >= 1024 ? scale(15) : scale(15),
            borderRadius: scale(10),
          }}
          trackStyle={{
            height:
              w >= 768 && h >= 1024 ? verticalScale(10) : verticalScale(8),
            borderRadius: scale(100),
          }}
        />
      </View>