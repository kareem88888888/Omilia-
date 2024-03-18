import { StyleSheet, Text, View,Image, TextInput,Pressable} from 'react-native'
import React, { useState } from 'react'
import { EvilIcons,} from '@expo/vector-icons';
import { router } from 'expo-router';


const ReConf = () => {
    const[NewPass,setNewPass]=useState('')
    const[RePass,setRePass]=useState('')
    const onSignInPressed=()=>{
        router.push('starpage/SignIn/SignIn')
    }
  return (
    <View style={styles.TopContainer}>

    <View style={{flex:1, alignItems:'center',paddingTop:8}}>
    <Image source={require('../../../../../../../assets/amico.png')} style={{alignItems:"center",justifyContent:"center",height:300}} resizeMode='contain'/>
    </View>


  <View style={styles.BottomContainer}>
    <View style={{alignItems:"center",paddingTop:15}}>
    <Text style={{fontSize:20,fontWeight:"800",color:"#9A69D8"}}>اعادة تعيين كلمة المرور </Text>
    </View>


    <View style={styles.Input}>
    <EvilIcons style={{paddingRight:20}}  name="lock" size={30} color="#A6A6A6" />
      <TextInput
       style={{margin:5}} 
       placeholder=' كلمة المرور الجديدة '
       value={NewPass}
       onChangeText={setNewPass}
       secureTextEntry={true}
       textAlign='right'
        />
    </View>


    <View style={styles.Input}>
    <EvilIcons style={{paddingRight:20}}  name="lock" size={30} color="#A6A6A6" />
      <TextInput
       style={{margin:5}} 
       placeholder='تأكيد  كلمة المرور الجديدة '
       value={NewPass}
       onChangeText={setNewPass}
       secureTextEntry={true}
       textAlign='right'
        />
    </View>


    <Pressable onPress={onSignInPressed} style={styles.buttonOne}>
      <Text style={styles.textStyle}>تسجيل الدخول</Text>
    </Pressable>







</View>


    
   </View>


   





 
 
  
)
}

export default ReConf

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