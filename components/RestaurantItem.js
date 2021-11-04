import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url: 'https://bit.ly/31oAQEB',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
    time: '09-14 • min',
  },
  {
    name: 'Benihana',
    image_url: 'https://bit.ly/3EFUBGb',
    categories: ['Cussine', 'Hotel'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
    time: '20-30 • min',
  },
  {
    name: "India's Grill",
    image_url: 'https://bit.ly/3CMaev0',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
    time: '30-45 • min',
  },
  {
    name: 'Street tower',
    image_url: 'https://bit.ly/3BKhJBl',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.1,
    time: '10-15 • min',
  },
]

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {localRestaurants.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} time={restaurant.time}/>
        </View>
      ))}
    </TouchableOpacity>
  )
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: '100%',
        height: 190,
        borderRadius: 5
      }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
      <MaterialCommunityIcons name='heart-outline' size={25} color='#ffffff' />
    </TouchableOpacity>
  </>
)
const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: '#888' }}>{props.time}</Text>
    </View>
    <View
      style={{
        backgroundColor: '#38b000',
        height: 30,
        width: 30,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white' }}>{props.rating}</Text>
    </View>
  </View>
)
