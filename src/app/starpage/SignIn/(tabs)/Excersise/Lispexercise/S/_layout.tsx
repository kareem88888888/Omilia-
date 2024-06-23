import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function SStack(){
    return <Stack>

        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="ExS" options={{headerShown:false}}/>
        <Stack.Screen name="wordsS" options={{headerShown:false}}/>

        


    

    </Stack>
}