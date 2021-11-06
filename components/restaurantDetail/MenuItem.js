import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
const foods = [
  {
    title: 'Lasagna',
    descritpion: 'Snap off the woody dry ends of the asparagus.',
    price: '$13.58',
    image:
      'https://images.unsplash.com/photo-1574484284002-952d92456975?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Chicken Cacciatore',
    descritpion:
      'Cacciatore means hunter in Italian, ‘hunter-style’ meal with chicken',
    price: '$45.50',
    image:
      'https://images.unsplash.com/photo-1619526881542-c81baff85fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    title: 'Pinot Noir',
    descritpion:
      'bell peppers, onions, carrots and olives swimming in a rustic tomato.',
    price: '$56.58',
    image:
      'https://images.unsplash.com/photo-1603122876935-13e7f40c3984?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  },
  // {
  //   title: 'Lambrusco',
  //   descritpion: 'asparagus stuffed chicken recipe comes to you just in time!',
  //   price: '$32.11',
  //   image:
  //     'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
  // },
  // {
  //   title: 'Rice Pilaf with Orzo',
  //   descritpion: 'rice pilaf with orzo is one of our all-time favorite',
  //   price: '$20.33',
  //   image:
  //     'https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=909&q=80',
  // },
  // {
  //   title: 'Nohutlu pilav',
  //   descritpion:
  //     'his pilaf is made with a combination of white rice, chickpeas, oil.',
  //   price: '$61.02',
  //   image:
  //     'https://images.unsplash.com/photo-1575932444877-5106bee2a599?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
  // },
  // {
  //   title: 'Drape Perde',
  //   descritpion: 'filled with rice, chicken, currants, almonds, pine nuts.',
  //   price: '$78.00',
  //   image:
  //     'https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  // },
]

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 15,
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: '600',
  },
})

export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              fillColor='#38b000'
              iconStyle={{ borderRadius: 5 }}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation='vertical'
            style={{ marginHorizontal: 0 }}
          />
        </View>
      ))}
    </ScrollView>
  )
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: 'space-evenly' }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.descritpion}</Text>
    <Text>{props.food.price}</Text>
  </View>
)

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 5 }}
    />
  </View>
)
