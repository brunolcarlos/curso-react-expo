import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native';
import Item from "./item";

const App = () => {
    const [data, setData] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-14557858555',
            title: 'Quarto Item 4',
        },
    ])

    const renderItem = ({ item }) => <Item title={item.title} />;

    const newData = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
            title: 'Novo First Item 1',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
            title: 'Novo Second Item 2',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d723',
            title: 'Novo Third Item 3',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145578585554',
            title: 'Novo Quarto Item 4',
        },
    ]

    useEffect(() => {
        setData(data => [
            ...data,
            ...newData
        ])
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                windowSize={5}
                ListEmptyComponent={<Text>Empty</Text>}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default App;