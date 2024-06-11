import { StyleSheet, Text, View,Image,Pressable,ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';


const Home = () => {
  return (
<View style={{flex:0.3}}>
      <View >
      <LinearGradient
        
        style={styles.linear}
        colors={['#DBA6F7', '#f0f3f7' ]}>

      <Image source={require("../../../../../../assets/patrik.jpg")} style={styles.Pic}/>

      <Text style={styles.headertext}>مرحبا بك</Text>

      <MaterialIcons name="waving-hand" size={30} color="white" style={{marginTop:20,marginRight:8}}/>
      
      </LinearGradient>
      </View>


      <View style={{height:3,width:'100%',backgroundColor:"#E1C4FF",margin:5}}/>



      

<View style={{margin:3}}>
<Text style={styles.txt}>بدء الاختبار</Text>

<View style={{alignItems:'center'}}>
<Pressable style={styles.buttonCard} onPress={()=>router.push('starpage/SignIn/(tabs)/Test')}>
<Text style={{fontSize:18,color:"white", padding:5}}>ابدأ الاختبار</Text>
<Text style={{fontSize:18,color:"#455A64", padding:5}}>يمكنك بدءالاختبار للتعرف على المشاكل لديك  أو يمكنك اعادة الاختبار مرة اخرى لمعرفة مدى تقدم مستواك</Text>
</Pressable>
</View>

</View>


<View style={{margin:3}}>

<Text style={styles.txt}> التدريبات</Text>

   <View style={{alignItems:'center'}}>

<Pressable style={styles.buttonCard}>
<Text style={{fontSize:18,color:"white", padding:5}}>ابدأالتدريبات</Text>
<Text style={{fontSize:18,color:"#455A64", padding:5}}>يمكنك بدءالاختبار للتعرف على المشاكل لديك  أو يمكنك اعادة الاختبار مرة اخرى لمعرفة مدى تقدم مستواك</Text>
</Pressable>

   </View>

</View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  linear:{
    borderRadius:10,
    width:360,
    height:200,
   paddingTop:50,
   paddingLeft:15,
    flexDirection:'row-reverse',
    justifyContent:'flex-start',
    
    
    
    
  },
  headertext:{
    fontSize:25,
    fontWeight:"bold",
    color:"#9A69D8",
    marginTop:20,
    marginRight:20

  },

  Pic:{
     height:80,
    width:80,
  borderRadius:40},

  txt:{
    fontSize:25,
    fontWeight:"bold",
    color:"#9A69D8",
    padding:15,
    

  },
  buttonCard:{
    width:"90%",
    height:"80%",
    borderRadius:15,
    backgroundColor:"#DBA6F7",
    
  }
})