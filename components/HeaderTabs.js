import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton text='Delivery' btnColor='#38b000' textColor='white' />
      <HeaderButton text='Pickup' btnColor='white' textColor='#38b000' />
    </View>
  )
}
const HeaderButton = ({ text, btnColor, textColor }) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: btnColor,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
    >
      <Text style={{ color: textColor, fontSize: 16, fontWeight: '900' }}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
)
