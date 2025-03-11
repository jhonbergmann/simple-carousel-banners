import * as React from 'react'
import {useState, useEffect, useRef} from 'react'
import {FlatList, View} from 'react-native'

import {Slider} from './slider'
import {Indicator} from './indicator'

import {ICarousel} from './data'

export const CarouselBanner = (props: ICarousel) => {
  const {threshold = 80, sliderImages = [], delay = 5000} = props

  const [activeBanner, setActiveBanner] = useState<number>(0)

  const flatListRef = useRef<FlatList<any> | null>(null)

  useEffect(() => {
    const first: number = 0
    const isLast: boolean = activeBanner === sliderImages?.length - 1

    const timeId = setTimeout(() => {
      try {
        flatListRef.current?.scrollToIndex({index: isLast ? first : activeBanner + 1, animated: true})
        setActiveBanner(isLast ? first : (old) => old + 1)
      } catch {}
    }, delay)

    return () => clearTimeout(timeId)
  }, [activeBanner, delay])

  const onViewableItemsChanged: ({viewableItems}: {viewableItems: any}) => void = ({viewableItems}) => {
    if (viewableItems[0] !== undefined) setActiveBanner(viewableItems[0]?.index)
  }

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {itemVisiblePercentThreshold: threshold},
      onViewableItemsChanged,
    },
  ])

  return (
    <View>
      {sliderImages?.length && (
        <>
          <Slider {...{flatListRef, activeBanner, viewabilityConfigCallbackPairs, ...props}} />
          <Indicator {...{sliderImages, activeBanner}} />
        </>
      )}
    </View>
  )
}
