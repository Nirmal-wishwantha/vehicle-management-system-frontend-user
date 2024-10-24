import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/Home';
import About from '../about/About';
import MyTab from '../../component/bottomNav/MyTab';
import MyReservation from '../my reseve/MyReservation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            {/* <Drawer.Screen name="HomeTabs" component={MyTab} options={{ headerShown: false }} />
            <Drawer.Screen name="About" component={About} options={{ headerShown: false }} />
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}


            <Drawer.Screen name="All Page" component={MyTab}/>
            {/* <Drawer.Screen name="Home" component={Home} /> */}
            <Drawer.Screen name="reservation" component={MyReservation} />
            <Drawer.Screen name="About" component={About} />
            
        </Drawer.Navigator>
    )
}