import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        placeholder='search...'
        styles={{
          textInput: {
            backgroundColor: '#eeeeee',
            borderRadius: 21,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eeeeee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons
              name='location-sharp'
              size={24}
              style={{ color: '#38b000' }}
            />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}
          >
            <AntDesign
              name='clockcircle'
              size={12}
              style={{ marginRight: 7 }}
            />
            <Text>search</Text>
          </View>
        )}
      />
    </View>
  )
}
