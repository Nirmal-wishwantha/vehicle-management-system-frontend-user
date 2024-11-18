import React, { useState } from 'react';
import Login from './src/screens/login/Login';
import Register from './src/screens/register/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './src/screens/drawer/DrawerNavigation';
import MyTab from './src/component/bottomNav/MyTab';
import Toast from 'react-native-toast-message';


const Stack = createStackNavigator();

export default function App() {

    const [login, setLogin] = useState(true);



    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!login && (
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                )}

                <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </Stack.Navigator>
            <Toast/>
        </NavigationContainer>
    );
}
