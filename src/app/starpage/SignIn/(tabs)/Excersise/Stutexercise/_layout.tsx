import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function StutStack(){
    return <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>


    </Stack>
}