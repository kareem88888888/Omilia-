import { StyleSheet, Text, View ,Image, Pressable,FlatList} from 'react-native'
import React from 'react'

import Lisps from '../../../../../../assets/data/Lisp'
import LispTestItem from '../../../../../Components/LispTestItem'





const LispTest = () => {
  
  

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

  <FlatList data={Lisps} renderItem={({item})=><LispTestItem Problem={item}/>}/>

    



    

   
</View>







</>

  )
}

export default LispTest

const styles = StyleSheet.create({
 
})