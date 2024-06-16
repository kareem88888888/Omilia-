import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const audioFile = require('../../../../../../assets/LSound/Recording.m4a');


const LispTest = () => {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const[pressedone,setpressedone]=useState(false)
  const[pressedtwo,setpressedtwo]=useState(false)


  const handleOnPressin=()=>{
    setpressedone(true)
  }
  
  const handleOnPressout=()=>{
    setpressedone(false)
  }

  const handleOnPressintwo=()=>{
    setpressedtwo(true)
  }
  
  const handleOnPressoutTwo=()=>{
    setpressedtwo(false)
  }




  return (
    <>
    <View style={{flex:1}}>

    <View style={{flexDirection:'row',justifyContent:"flex-end",paddingTop:12,}}>

    <View >
      <Text style={{color:"#9A69D8",fontSize:20,fontWeight:"800"}}>هيا نبدأ اختبار اللثغة</Text>
      <Text style={{color:"#455A64",fontSize:14,fontWeight:"500"}}>اسمع المقاطع الصوتيه التاليه جيدا و كررهم  ف التسجيل</Text>

    </View>

    <View>
      <Image source={require('../../../../../../assets/Idea.png')} resizeMode='contain'/>
    </View>
    </View>

    <View style={{height:3,width:'100%',backgroundColor:"#DBA6F7",marginRight:20,elevation:15}}/>


    <View style={styles.container}>
  <View style={styles.testo}>

    <Text style={{color:"#9A69D8",fontWeight:"800", padding:7}}>المقطع الصوتي الأول</Text>

    <View style={{alignItems:"center",marginTop:18,flex:1}}>
    <Text style={{fontSize:60,fontWeight:"bold"}}> سمكة</Text>
    </View>

    <View style={{alignItems:'center',marginBottom:100,flexDirection:"row-reverse",justifyContent:"center"}}>
    <Pressable style={{margin:15}}
    onPress={async () => {
      const { sound } = await Audio.Sound.createAsync(audioFile);
      sound.playAsync();
      setIsPlaying(true) }}
       onPressOut={handleOnPressout} onPressIn={handleOnPressin}>

    <AntDesign name="playcircleo" size={35} color=  {  pressedone ? 'pink': 'black' } />
    </Pressable>


    <Pressable 
    onPress={async () => {
      const { sound } = await Audio.Sound.createAsync(audioFile);
      sound.playAsync();
      setIsPlaying(true)
      }} onPressOut={handleOnPressoutTwo} onPressIn={handleOnPressintwo}
    >
    <MaterialIcons name="replay-circle-filled" size={40} color={  pressedtwo ? 'pink': 'black' } />
    </Pressable>

    
   
    </View>

    


  </View>

  
</View>
   

   
</View>







</>

  )
}

export default LispTest

const styles = StyleSheet.create({
  testo:{
    width: '80%',
    aspectRatio:1,
    backgroundColor: "white",
    margin:5,
    borderColor:"#DBA6F7",
    borderWidth:1,
    borderRadius:15,
  
  },
  container:{
    flex:1,
alignItems:"center",
justifyContent:"flex-start",
marginTop:20
  }
})