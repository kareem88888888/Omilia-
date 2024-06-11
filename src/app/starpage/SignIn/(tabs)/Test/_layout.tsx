import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function TestStack(){
    return <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="LispResult" options={{headerShown:false}}/>

        <Stack.Screen name="LispTest" options={{
        headerTitleAlign:"center",headerTitle:"الاختبارات",headerTitleStyle:{fontSize:18,fontWeight:"bold",color:"#9A69D8"}
    }}/>
        <Stack.Screen name="StutTest" options={{headerShown:false}}/>
        <Stack.Screen name="StutResult" options={{headerShown:false}}/>
    </Stack>
}