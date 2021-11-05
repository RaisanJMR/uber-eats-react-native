import React from 'react'
import { View, Text, Image } from 'react-native'

const image = 'https://bit.ly/3q3LR8K'
const title = 'Thai cusine kitchen'
const description = 'Thai Confort food $$ (568+)'

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
)
const RestaurantTitle = (props) => (
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
