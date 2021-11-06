import React from 'react'
import { View, Text, Image } from 'react-native'

// const yelpRestaurantInfo = {
//   name: 'Thai cusine kitchen',
//   image: 'https://bit.ly/3q3LR8K',
//   price: '$$',
//   reviews: '1500',
//   rating: 5,
//   categories: [{ title: 'Thai' }, { title: 'Comfort Food' }],
// }

// const image = 'https://bit.ly/3q3LR8K'
// const title = 'Thai cusine kitchen'
// const description = 'Thai Confort food $$ (568+)'

export default function About(props) {
  const { name, image, price, reviews, rating, categories } = props.route.params
const formattedCategories = categories.map((cat) => cat.title).join(' • ')
const description = `${formattedCategories} ${
  price ? ' • ' + price : ''
} • 🎫 • ${rating} ⭐ (${reviews}+)`
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
)
const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 30,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
)
const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 15,
      fontWeight: '400',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
)
