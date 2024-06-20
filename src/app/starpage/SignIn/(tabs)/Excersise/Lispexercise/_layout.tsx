import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function LispStack(){
    return <Stack>
        <Stack.Screen name="index"/>

        <Stack.Screen name="2AF" />
        <Stack.Screen name ="G" />
        <Stack.Screen name ="K" />
        <Stack.Screen name ="R" />
        <Stack.Screen name ="S" />
        <Stack.Screen name ="Z" />

        <Stack.Screen name ="breath" />
        <Stack.Screen name ="Lesan" />
        <Stack.Screen name ="mouth" />

    

    </Stack>
}