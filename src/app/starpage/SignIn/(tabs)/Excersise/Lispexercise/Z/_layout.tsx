import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function ZStack(){
    return <Stack>

        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="ExZ" options={{headerShown:false}}/>
        <Stack.Screen name="wordsZ" options={{headerShown:false}}/>

        


    

    </Stack>
}