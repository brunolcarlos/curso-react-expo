import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
export default function Botao(props) {
    const navigation = useNavigation()
    const { url, cor, corText } = props
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate(url)
        }}
            style={{ marginBottom: 5 }}>
            <View style={{ padding: 10, borderWidth: 0.3, borderColor: '#ccc', backgroundColor: cor, width: 300, alignItems: 'center' }}>
                <Text style={{ color: corText }}>{url}</Text>
            </View>
        </TouchableOpacity>
    )
}