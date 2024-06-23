import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function RStack(){
    return <Stack>

        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="ExR" options={{headerShown:false}}/>
        <Stack.Screen name="wordsR" options={{headerShown:false}}/>

        


    

    </Stack>
}