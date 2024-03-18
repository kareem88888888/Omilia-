import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name='starpage/Start' options={{headerShown:false}}/>
        <Stack.Screen name='starpage/SignIn/SignIn' options={{headerShown:false}}/>
        <Stack.Screen name='starpage/SignUp/SignUp' options={{headerShown:false}}/>

        <Stack.Screen name='starpage/SignIn/Forgot/Forget' options={{headerShown:false}}/>
        <Stack.Screen name='starpage/SignIn/Forgot/Confirm/Confirm' options={{headerShown:false}}/>
        <Stack.Screen name='starpage/SignIn/Forgot/Confirm/ReConf/ReConf' options={{headerShown:false}}/>

        <Stack.Screen name='starpage/SignIn/HomePage/HomePage' options={{headerShown:false}}/>


       



    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})