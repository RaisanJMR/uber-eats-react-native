import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'
import Categories from '../components/home/Categories'
import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItem, { localRestaurants } from '../components/home/RestaurantItem'
import SearchBar from '../components/home/SearchBar'

// 1:35:00 timestamp 2:10:00
const YELP_API_KEY =
  'oxIltECgo8k0r6R_wrT84o1ayH2QWeRN4lOd1S3FD_LVr6d3S0z3SwuW8JdjeAtJ9KTsdAo72d82ttxVgWHBzWqUVNUqGVl5a6MAdnxFkhkb7QGAJ-gVc1sdsaKDYXYx'

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  // console.log(restaurantData)
  const [city, setCity] = useState('Los Angles')
  const [activeTab, setActiveTab] = useState('Delivery')

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
  }

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [city, activeTab])

  return (
    <SafeAreaView style={{ backgroundColor: '#eeeeee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  )
}
