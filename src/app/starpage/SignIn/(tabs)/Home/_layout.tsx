import { Stack } from "expo-router";

export default function MenuStack(){
    return <Stack>
        <Stack.Screen name="Homie" options={{headerShown:false}}/>
        
    </Stack>
}