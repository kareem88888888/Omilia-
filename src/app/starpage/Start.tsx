import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Start = () => {
  return (
    <View style={styles.container}>
     <ImageBackground style={styles.image} source={require('../../../assets/startpage.png')} >


<View style={{flex:1,alignItems:"center" ,justifyContent:"flex-end", paddingBottom:150}}>


      <Pressable onPress={()=>router.push('starpage/SignIn/SignIn')} style={styles.buttonOne}>
        <Text style={styles.textStyle}>تسجيل الدخول</Text>
      </Pressable>

      <Pressable onPress={()=>router.push('starpage/SignUp/SignUp')} style={styles.buttonTwo}>
        <Text style={styles.textStylo}>تسجيل جديد</Text>
      </Pressable>

      </View>
     </ImageBackground>
    </View>
  )
}

export default Start

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  image:{
flex:1
  },
  buttonOne:{
    height:51,
    width:248,
    borderRadius:15,
    alignItems:'center',
    justifyContent:"center",
    margin:8,
    backgroundColor:"#DBA6F7",},


  buttonTwo:{
    height:51,
    width:248,
    borderRadius:15,
    alignItems:'center',
    justifyContent:"center",
    margin:8,
    backgroundColor:"#FFFFFF",
    borderColor:"#DBA6F7",
    borderWidth:1

  },
  textStyle:{
    color:"white",
    fontSize:20,

  fontWeight:'700',

  },

  textStylo:{
    color:"#9A69D8",
    fontSize:20,

  fontWeight:'700',

  }
})