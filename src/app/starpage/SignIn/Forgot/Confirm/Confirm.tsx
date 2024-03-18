import { StyleSheet, Text, View,Image, TextInput,Pressable} from 'react-native'
import React, { useState } from 'react'
import {Fontisto} from '@expo/vector-icons';
import { router } from 'expo-router';

const Confirm = () => {
  const[Code,setCode]=useState('')

  const Conf=()=>{
    router.push('starpage/SignIn/Forgot/Confirm/ReConf/ReConf')

  }
  return (
    <View style={styles.TopContainer}>

    <View style={{flex:1, alignItems:'center',paddingTop:8}}>
    <Image source={require('../../../../../../assets/bro.png')} style={{alignItems:"center",justifyContent:"center",height:300}}  resizeMode='contain'/>
    </View>


  <View style={styles.BottomContainer}>

    <View style={{alignItems:"center",paddingTop:15}}>
    <Text style={{fontSize:20,fontWeight:"800",color:"#9A69D8"}}> تأكيد حسابك</Text>
    </View>

    <View style={{alignItems:'flex-end',paddingTop:15}}>
    <Text  style={{fontSize:16,color:"#88888B",marginRight:15}}>لقد أرسلنا رمزا الى بريدك الالكتروني برجاء ادخال هذا الرمز لتأكيد الحساب </Text>
    </View>



    <View style={styles.Input}>
      <TextInput
       style={{margin:5}} 
       value={Code}
       onChangeText={setCode}
       textAlign='right'
       keyboardType='numeric'
        />
    </View>
    
   

    <Pressable onPress={Conf} style={styles.buttonOne}>
      <Text style={styles.textStyle}>تأكيد</Text>
    </Pressable>






</View>


    
   </View>

 
 
  
)
}

export default Confirm

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
   
   marginRight:25
  
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