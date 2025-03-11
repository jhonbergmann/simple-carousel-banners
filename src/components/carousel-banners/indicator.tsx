import * as React from 'react'
import {View, FlatList, StyleSheet} from 'react-native'

import {ICarouselIndicator} from './data'

export const Indicator = ({sliderImages, activeBanner}: ICarouselIndicator) => (
  <View style={styles.container}>
    <FlatList
      data={sliderImages}
      contentContainerStyle={styles.indicatorContainer}
      renderItem={({index}) => <View style={[styles.indicator, {backgroundColor: activeBanner === index ? 'blue' : 'gray'}]} />}
      onScrollToIndexFailed={() => {}}
      scrollEnabled={false}
      horizontal
      keyExtractor={(_, index) => String(index)}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    marginHorizontal: 4,
    height: 4,
    width: 24,
    borderRadius: 2,
  },
})
