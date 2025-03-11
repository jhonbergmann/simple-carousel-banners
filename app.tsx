import {StatusBar} from 'expo-status-bar'
import {StyleSheet, View} from 'react-native'

import {CarouselBanner} from './src/components/carousel-banners'

const sliders = [
  {
    id: 1,
    img: 'https://randomwordgenerator.com/img/picture-generator/54e9d4464357ab14f1dc8460962e33791c3ad6e04e507440772d73d69e44cc_640.jpg',
  },
  {
    id: 2,
    img: 'https://randomwordgenerator.com/img/picture-generator/54e4d4454c57b10ff3d8992cc12c30771037dbf8525478497d2873d7934f_640.jpg',
  },
  {
    id: 3,
    img: 'https://randomwordgenerator.com/img/picture-generator/5ee2dd4a4e57b10ff3d8992cc12c30771037dbf85254794e73287add9449_640.jpg',
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
