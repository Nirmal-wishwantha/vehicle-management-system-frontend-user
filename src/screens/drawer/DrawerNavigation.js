import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/Home';
import About from '../about/About';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}