import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

type button={
  text:'String',
}

const BigButton = ({text,buttonOne,txtcolor}) => {
  return (
    <Pressable style={[styles.button,buttonOne]}>
    <Text style={[styles.textStyle,txtcolor]}>{text}</Text>
  </Pressable>
  )
}

export default BigButton

const styles = StyleSheet.create({
    button:{
      height:51,
      width:248,
      borderRadius:15,
      alignItems:'center',
      justifyContent:"center",
      margin:8,
},

textStyle:{
  fontSize:20,

  fontWeight:'700',

  
},
})