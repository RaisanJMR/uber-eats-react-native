import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItem from '../components/restaurantDetail/MenuItem'
import ViewCart from '../components/restaurantDetail/ViewCart'

export default function RestaurantDetails({ route,navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1} style={{ marginVertical: 20 }} />
      <MenuItem />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  )
}
