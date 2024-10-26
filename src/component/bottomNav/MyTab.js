// MyTab.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import About from '../../screens/about/About';
import MyReservation from '../../screens/my reseve/MyReservation';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import Setting from '../../screens/setting/Setting';

const Tab = createBottomTabNavigator();

function MyTab() {

  const navigation = useNavigation();

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Choose the icon based on the route name
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Reservation') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // Return the Icon component from react-native-vector-icons
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', // Color when the tab is active
        tabBarInactiveTintColor: 'gray', // Color when the tab is inactive
        tabBarStyle: {
          backgroundColor: '#f8f8f8', // Tab bar background color
          borderTopWidth: 0,
          elevation: 5, // Shadow for Android
        },
        tabBarLabelStyle: {
          fontSize: 12, // Font size of the label
        },
        headerShown: false, // Disable header for each tab
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      
      <Tab.Screen name="Reservation" component={MyReservation} options={{headerShown:false}}/>

      <Tab.Screen name="About" component={About} options={{headerShown:false}}/>

      <Tab.Screen name="Setting" component={Setting} options={{headerShown:false}}/>

      
    </Tab.Navigator>
    
  );
}

export default MyTab;
