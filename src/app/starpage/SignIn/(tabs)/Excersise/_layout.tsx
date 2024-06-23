import { Stack } from "expo-router";

export default function ExerStack(){
    return <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>

        <Stack.Screen name="Lispexercise" options={{headerShown:false}}/>

        <Stack.Screen name ="Stutexercise" options={{headerShown:false}} />
        
        <Stack.Screen name ="breath" options={{headerShown:false}}/>
        <Stack.Screen name ="Lesan" options={{headerShown:false}} />
        <Stack.Screen name ="mouth" options={{headerShown:false}} />

    </Stack>
}