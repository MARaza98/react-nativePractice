import { View, Text } from 'react-native'
import React from 'react'

export default function AboutUs() {
    console.log('debug > in about us')
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is About US screen</Text>
        </View>
    )
}