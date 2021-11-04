import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery')
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton
        text='Delivery'
        btnColor='#38b000'
        textColor='white'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text='Pickup'
        btnColor='white'
        textColor='#38b000'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  )
}
const HeaderButton = ({
  text,
  btnColor,
  textColor,
  activeTab,
  setActiveTab,
}) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === text ? '#38b000' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === text ? 'white' : '#38b000',
          fontSize: 16,
          fontWeight: '900',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
)
