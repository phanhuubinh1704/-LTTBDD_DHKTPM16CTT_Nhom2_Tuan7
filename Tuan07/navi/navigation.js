import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Shop from '../screens/Shop';
const Stack = createNativeStackNavigator();
const navi =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Shop' component={Shop}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default navi;