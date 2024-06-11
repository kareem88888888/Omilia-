import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Foundation, Entypo,FontAwesome5,MaterialCommunityIcons  } from '@expo/vector-icons';

import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: '#9A69D8',headerShown:false }}>

      
  
<Tabs.Screen
        name="Profile/Prof"
        options={{
          title: 'حسابي',
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-circle" size={28} color={color} />,
        }}
      />


<Tabs.Screen
        name="Excersise/Excer"
        options={{
          title: 'التمارين',
          tabBarIcon: ({ color }) => <Entypo name="stopwatch" size={28} color={color} />,
        }}
      />

<Tabs.Screen
        name="Test"
        options={{
          title: 'الاختبارات',
          tabBarIcon: ({ color }) => <Foundation name="results" size={28} color={color}  />,
        }}
      />


<Tabs.Screen
        name="Home"
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-heart" size={35} color={color} />,
        }}
      />

    </Tabs>
  );
}
