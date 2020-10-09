import React from 'react'
import { View, Text } from 'react-native'

export default function HomeScreen() {
    return (
        <View style={{
            backgroundColor: '#fff',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{color: 'black', fontSize: 24}}>This is Home Screen</Text>
        </View>
    )
}
