import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/Home';
import About from '../about/About';
import MyTab from '../../component/bottomNav/MyTab';
import MyReservation from '../my reseve/MyReservation';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (




        <Drawer.Navigator>

            {/* <Drawer.Screen
                name="Riyapola"
                component={MyTab}
                options={{
                    headerLeft: () => (
                        <Image
                            source={require('../../resources/assets/carlogo.png')}
                            style={{ width: 30, height: 30, marginLeft: 50 }}
                        />
                    ),
                    // headerTitle: "Riyapola" 
                }}

            /> */}

            <Drawer.Screen name="Riyapola" component={MyTab}/>
            <Drawer.Screen name="reservation" component={MyTab} />
            <Drawer.Screen name="About" component={MyTab} />
        </Drawer.Navigator>

    )
}