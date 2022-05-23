import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('SegundaPagina')
            }}>
                <View style={{ color: '#ffffff', padding: 10, borderWidth: 0.3, borderColor: '#ccc' }}>
                    <Text>Home Screen</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}