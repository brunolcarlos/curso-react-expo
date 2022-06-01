import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home'
import Video from './src/pages/Video'
import SegundaPagina from './src/pages/SegundaPagina'
import FlatListPage from './src/pages/FlatListPage'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="SegundaPagina"
          component={SegundaPagina}
        />
        <Stack.Screen
          name="Video"
          component={Video}
        />
        <Stack.Screen
          name="FlatListPage"
          component={FlatListPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;