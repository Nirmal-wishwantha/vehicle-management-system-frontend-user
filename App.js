import React, { useState } from 'react';
import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './src/screens/drawer/DrawerNavigation';

const Stack = createStackNavigator();

export default function App() {

    const [login, setLogin] = useState(false);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !login &&

                    <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                }

                <Stack.Screen options={{ headerShown: false }} name="Drawer" component={DrawerNavigation} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
