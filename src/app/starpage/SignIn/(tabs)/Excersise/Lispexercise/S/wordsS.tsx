
// صفحة كلمات الراء

import { StyleSheet, Text, StatusBar,View ,Image, Pressable,FlatList,ScrollView,SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useContext ,useState,useEffect } from 'react'
import SWordSound from '../../../../../../../../assets/data/wordS'
import WordsSound from '../../../../../../../Components/WordItem'



const STest = () => {
 


  return (
    <>
  
    <View style={{flex:1}}>
      <StatusBar backgroundColor='#DBA6F7' />
        
    <View style={styles.FirstView}>
        <TouchableOpacity onPress={() => {}}>
         <Image resizeMode='contain' source={require('../../../../../../../../assets/icons/arrowWhite.png')} style={{width:25,height:25,}}/>
         </TouchableOpacity>
         <Text style={styles.txt}>كلمات حرف السين</Text>
        <View style={{width:20,height:20}}></View>
      </View>


<SafeAreaView style={{flex:1}}>



<FlatList 

data={SWordSound} 
renderItem={({item})=><WordsSound Problem={item}/>}
ListFooterComponent={
<View style={{alignItems:"center"}}>


</View>}
/>
</SafeAreaView>


</View>




</>

  )
}

export default STest

const styles = StyleSheet.create({
  buttonTwo:{
    aspectRatio:5,
     width:'68%',
     borderRadius:15,
     alignItems:'center',
     justifyContent:"center",
     margin:20,
     backgroundColor:"#DBA6F7",
     elevation:10
 
 },
 txt:{
  fontSize:22,
  fontWeight:"bold",
  color:"#FFF",
},
FirstView:{
    backgroundColor:"#DBA6F7",
    padding:40,
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    // justifyContent:'space-around',
    alignItems:'center',
    // alignSelf:'flex-end'
  },
 textStylo:{
   color:"white",
   fontSize:20,
 
 fontWeight:'400',
 }
 
 
})