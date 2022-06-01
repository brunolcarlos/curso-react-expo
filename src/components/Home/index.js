import React from 'react'
import { View } from 'react-native';
import Botao from '../Botao';

export default function Home() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Botao corText={'white'} cor={'#1e88e5'} url={'SegundaPagina'} />
            <Botao corText={'white'} cor={'#ff6f00'} url={'Video'} />
            <Botao corText={'white'} cor={'#ad1457'} url={'FlatListPage'} />
        </View>
    );
}