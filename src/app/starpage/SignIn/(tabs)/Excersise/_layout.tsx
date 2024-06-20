import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function ExerStack(){
    return <Stack>
        <Stack.Screen name="index"/>

        <Stack.Screen name="Lispexercise" />
        <Stack.Screen name ="Stutexercise" />
    </Stack>
}