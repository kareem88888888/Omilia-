import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function GStack(){
    return <Stack>

        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="ExG" options={{headerShown:false}}/>
        <Stack.Screen name="wordsG" options={{headerShown:false}}/>

        


    

    </Stack>
}