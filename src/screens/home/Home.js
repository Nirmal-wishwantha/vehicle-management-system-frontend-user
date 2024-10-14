import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

export default function Home() {
    return (
        <View>
            <Text>Home</Text>

            <View>
                <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
            </View>
        </View>
    )
}