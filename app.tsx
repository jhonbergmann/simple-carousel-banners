import {StatusBar} from 'expo-status-bar'
import {StyleSheet, View} from 'react-native'

import {CarouselBanner} from './src/components/carousel-banners'

const sliders = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/jhonbergmann/simple-carousel-banners/refs/heads/main/src/assets/slide1.jpg',
  },
  {
    id: 2,
    img: 'https://raw.githubusercontent.com/jhonbergmann/simple-carousel-banners/refs/heads/main/src/assets/slide2.jpg',
  },
  {
    id: 3,
    img: 'https://raw.githubusercontent.com/jhonbergmann/simple-carousel-banners/refs/heads/main/src/assets/slide3.jpg',
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CarouselBanner sliderImages={sliders} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})
