import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function KKStack(){
    return <Stack>

        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="Ex2" options={{headerShown:false}}/>
        <Stack.Screen name="words2" options={{headerShown:false}}/>

        


    

    </Stack>
}