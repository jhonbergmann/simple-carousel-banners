import {MutableRefObject} from 'react'
import {FlatList, ImageResizeMode} from 'react-native'

export interface ISlide {
  id: number
  img: string
}

export interface ICarousel {
  threshold?: number
  width?: number
  height?: number
  sliderImages: ISlide[]
  delay?: number
}

export interface ICarouselSlide extends ICarousel {
  flatListRef: React.MutableRefObject<FlatList<ISlide> | null>
  sliderImages: ISlide[]
  activeBanner: number
  viewabilityConfigCallbackPairs: MutableRefObject<
    {viewabilityConfig: {itemVisiblePercentThreshold: number}; onViewableItemsChanged: ({viewableItems}: {viewableItems: any}) => void}[]
  >
  resizeModeImage?: ImageResizeMode
}

export interface ICarouselIndicator {
  sliderImages: ISlide[]
  activeBanner: number
}
