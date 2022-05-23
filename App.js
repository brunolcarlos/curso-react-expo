import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home'
import SegundaPagina from './src/pages/SegundaPagina'

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;