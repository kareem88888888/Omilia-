import { Stack } from "expo-router";
import { View,Text } from "react-native";

export default function LispStack(){
    return <Stack>

        <Stack.Screen name="index" options={{headerShown:false}}/>

        <Stack.Screen name="2AF" options={{headerShown:false}} />
        <Stack.Screen name ="G"  options={{headerShown:false}}/>
        <Stack.Screen name ="K" options={{headerShown:false}} />
        <Stack.Screen name ="R"  options={{headerShown:false}}  />
        <Stack.Screen name ="S"  options={{headerShown:false}} />
        <Stack.Screen name ="Z"  options={{headerShown:false}}/>

        

    

    </Stack>
}