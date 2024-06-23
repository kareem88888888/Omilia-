import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function KStack(){
    return <Stack>

        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="ExK" options={{headerShown:false}}/>
        <Stack.Screen name="wordsK" options={{headerShown:false}}/>

        


    

    </Stack>
}