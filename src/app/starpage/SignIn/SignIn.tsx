import { StyleSheet, Text, View,Image, TextInput,Pressable} from 'react-native'
import React, { useState } from 'react'
import { Ionicons,EvilIcons, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';


const SignIn = () => {
  const[UserName,setUserName]=useState('');
  const[Password,setPassword]=useState('')

  const OnSignInPressed=()=>{
    router.push('starpage/SignIn/(tabs)')
  }

  const OnForgottenPass=()=>{
    router.push('starpage/SignIn/Forgot/Forget')
  }
  const OnSignInFacebook=()=>{
    console.warn("FACE")
  } 
  const OnSignInTwitter=()=>{
    console.warn("TWITT")
  }
  
  const OnSignInGmail=()=>{
    console.warn("GML")
  }

  return (
    <>
    <View style={styles.TopContainer}>

      <View style={{flex:1, alignItems:'center',paddingTop:8}}>
      <Image source={require('../../../../assets/pana.png')} style={{alignItems:"center",justifyContent:"center",height:300}} resizeMode='contain'/>
      </View>


    <View style={styles.BottomContainer}>
      <View style={{alignItems:"center",paddingTop:15}}>
      <Text style={{fontSize:20,fontWeight:"800",color:"#9A69D8"}}>تسجيل الدخول</Text>
      </View>


      <View style={styles.Input}>
         <Ionicons    style={{paddingRight:20}} name="person-outline" size={20} color="#A6A6A6" />
          <TextInput
          style={{margin:10}} 
          placeholder='الأسم بالكامل'
          value={UserName}
         onChangeText={setUserName}
          textAlign='left'
          />
       </View>


      <View style={styles.Input}>
      <EvilIcons style={{paddingRight:20}}  name="lock" size={30} color="#A6A6A6" />
        <TextInput
         style={{margin:5}} 
         placeholder='كلمة المرور'
         value={Password}
         onChangeText={setPassword}
         secureTextEntry={true}
         textAlign='right'
          />
      </View>

      <Pressable onPress={OnForgottenPass} style={{alignItems:"flex-start", paddingLeft:32,paddingTop:8}} >
        <Text style={{fontSize:15}}>هل نسيت كلمة المرور؟</Text>
      </Pressable>

      <Pressable onPress={OnSignInPressed} style={styles.buttonOne}>
        <Text style={styles.textStyle}>تسجيل الدخول</Text>
      </Pressable>

<View style={{marginTop:15,marginLeft:15,flexDirection:'row',justifyContent:"center",alignItems:"center"}}>
      <View style={{height:3,width:90,backgroundColor:"#A6A6A6",margin:5}}/>
      <Text style={{fontSize:15,fontWeight:'700'}}>أو سجل الدخول عبر </Text>
      <View style={{height:3,width:90,backgroundColor:"#A6A6A6",margin:5}}/>
</View>


<View style={{flexDirection:"row" ,justifyContent:"center",marginTop:20,marginLeft:35}}>

  <Pressable onPress={OnSignInGmail} style={{marginRight:25}}>
  <Image source={require("../../../../assets/gmail.png")}/>
  </Pressable>

  <Pressable onPress={OnSignInFacebook}  style={{marginRight:25}}> 
  <FontAwesome name="facebook-f" size={32} color="#337FFF" />
  </Pressable>
  
  <Pressable onPress={OnSignInTwitter}  style={{marginRight:25}}>
  <FontAwesome name="twitter" size={32} color="#33CCFF" />
  </Pressable>

  



</View>


      
     </View>


     



    </View>

   
   
    </>
  )
}

export default SignIn

const styles = StyleSheet.create({

  TopContainer:{
    flex:1,
    backgroundColor:'#DBA6F7',
  
  },
  BottomContainer:{
  
    backgroundColor:"#FAFAFA",
    borderTopLeftRadius:35,
    borderTopRightRadius:35,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    height:'70%',
    width:'100%',
    marginTop:250,
    marginRight:250,
  },
  Input:{
    height:50,
    width:320,
    borderWidth:1,
    borderRadius:15,
    borderColor:"#DBA6F7",
    alignItems:'center',
    flexDirection:'row-reverse',
     marginTop:15,
     
     marginRight:30
    
  },

  buttonOne:{
    height:51,
    width:320,
    borderRadius:15,
    alignItems:'center',
    justifyContent:"center",
    margin:8,
    backgroundColor:"#DBA6F7",
    marginLeft:25,
    marginTop:20},

    textStyle:{
      color:"white",
      fontSize:20,
  
    fontWeight:'700',
  
    },




})