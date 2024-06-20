import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function letterStack(){
    return <Stack>
        <Stack.Screen name="index"/>

        <Stack.Screen name="SpecExer" />
        <Stack.Screen name ="WordExer" />

        <Stack.Screen name ="breath" />
        <Stack.Screen name ="Lesan" />
        <Stack.Screen name ="mouth" />

    

    </Stack>
}