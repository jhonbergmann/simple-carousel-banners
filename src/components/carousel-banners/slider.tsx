import * as React from 'react'
import {Dimensions, FlatList, TouchableOpacity, View, Image, StyleSheet} from 'react-native'

import {ICarouselSlide} from './data'

export const Slider = ({sliderImages, flatListRef, resizeModeImage, viewabilityConfigCallbackPairs, width = Dimensions.get('screen').width, height = 285}: ICarouselSlide) => (
  <FlatList
    ref={flatListRef}
    data={sliderImages}
    renderItem={({item}) => (
      <TouchableOpacity style={styles.touchable} activeOpacity={0.9}>
        <View style={[styles.slide, {width, height}]}>
          <Image resizeMode={resizeModeImage} source={{uri: item?.img}} style={styles.image} />
        </View>
      </TouchableOpacity>
    )}
    pagingEnabled
    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
    horizontal
    keyExtractor={(_, index) => String(index)}
    showsHorizontalScrollIndicator={false}
  />
)

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
})
