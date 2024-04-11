import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from "./screens/Home/index"
import Cont from "./screens/Cont/index"


export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cont"  component={Cont} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}