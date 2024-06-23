import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const ExerHome = () => {
  return (
    <>
    <View style={{flex:1}}>

    <View style={{flexDirection:"row-reverse",paddingTop:50,paddingRight:50,margin:20}}>

<View>
      <Text style={styles.txtone}>هيا لنبدأ رحلتنا معا</Text>
      <Text numberOfLines={3} style={styles.txtwo}>
        {`قم باجراء التمارين لمعالجة مشكلتك التي تعاني منها و مساعدتك في تحسين نطقك ` }</Text>
    </View>
  <Image source={require('../../../../../../assets/Sec.png')} style={styles.pic} resizeMode='cover'/>

    </View>


    <View style={{alignItems:"center"}}>
    <Pressable  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Lispexercise')}>
        <Text style={styles.textStylo}>تمارين اللثغه</Text>
      </Pressable>

      <Pressable  style={styles.buttonTwo}  onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Stutexercise')}>
        <Text style={styles.textStylo}>تمارين التلعثم</Text>
      </Pressable>

    </View>

    </View>
    </>
    
  )
}

export default ExerHome

const styles = StyleSheet.create({
  txtone:{
    color:'#9A69D8',
    fontSize:20,
    fontWeight:'700'
  },
  txtwo:{
    color:'#455A64',
    fontSize:17,
  },
  pic:{
    width:'30%',
    aspectRatio:1,
  },
  buttonTwo:{
   aspectRatio:6,
    width:'90%',
    borderRadius:20,
    alignItems:'center',
    justifyContent:"center",
    margin:8,
    backgroundColor:"#DBA6F7",
    elevation:15

},
textStylo:{
  color:"white",
  fontSize:20,

fontWeight:'700',

}})