import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from "./screens/Home/index"
import Sobre from "./screens/Sobre/index"
import History from "./screens/History/index"


export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Sobre"  component={Sobre} />
                <Stack.Screen name="History" component={History} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}