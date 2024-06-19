import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import * as Progress from 'react-native-progress';


const StutResult = () => {
  return (
    <>
    
    <View style={{flex:1,alignItems:"center",}}>

      <Image source={require('../../../../../../assets/rafiki.png')} resizeMode='contain' style={{}}/>  
    </View>

<View style={{justifyContent:"flex-start",alignItems:"center",flex:1,marginBottom:50}}>
    <View style={styles.resbox}>
      <View>
        <Text style={{color:"#9A69D8",fontSize:18,fontWeight:"600", padding:8}}>مستوى التلعثم لديك</Text>
      </View>





<View>
   

<View style={{flexDirection:"row",justifyContent:"space-between"}}>

<View style={{alignItems:'flex-start', paddingLeft:15}}>
<Text style={{fontSize:18,color:"#9A69D8",}}>50%</Text>
</View>

<View style={{alignItems:"flex-end",paddingRight:6}}>
  <Text style={{fontSize:18,color:"#9A69D8"}}>متوسط</Text>
  </View>


</View>











<View style={{alignItems:"center",}}>
 <Progress.Bar progress={0.7} width={280} height={12} borderRadius={10} color='#DBA6F7'/>
 </View>

      </View>

      <View style={{flexDirection:'row-reverse',padding:8}}>
        <Text style={{fontSize:15,color:"#9A69D8",fontWeight:'700'}}>نوع التلعثم الذي تعاني منه :</Text>
        <Text style={{fontSize:15,marginRight:8}}>تكراري</Text>

      </View>

</View>
     

    <View style={styles.forward}>

      <LinearGradient
      colors={['#E1C4FF','white']}


   style={{width:'100%',
    aspectRatio:3,
    borderRadius:15, 
    flexDirection:'row-reverse',
    flexGrow:0.45}}
      >

<View>
      <Text style={{color:"#9669D8",fontSize:20,paddingRight:4,paddingTop:5,fontWeight:"600"}} >التمارين</Text>
      <Text style={{fontSize:15,paddingRight:4,paddingTop:5}}>{`مجموعة من التمارين المتنوعة لمعالجتك
من اللثفه و تحسين مستوى النطق لديك`}</Text>
      </View>

     

<Pressable  style={styles.buttonTwo}  onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise')}>
        <Text style={styles.textStylo}>هيا لنبدأ</Text>
      </Pressable>


      </LinearGradient>

     


    </View>

   
    </View>
    
    

    



   
    </>
  )
}

export default StutResult

const styles = StyleSheet.create({

  resbox:{
    flex:0.6,
    marginBottom:15,
  

    borderColor:'#E1C4FF',
    borderWidth:2,
    width:'10%',
    aspectRatio:2,
    borderRadius:15,
    shadowColor:'#E1C4FF',
    shadowOpacity:0.6,
    shadowOffset:{width:15,height:15},
    elevation:1,
    backgroundColor:"white"
    
    

  },
  letter:{
    marginTop:1,
    width: "16%",
    aspectRatio:1.,
    borderRadius: 100,
    borderColor:"pink",
    borderWidth:2,
    
    alignItems:'center',
    justifyContent:"center",
    marginRight:15,
    
    
    
    
    
    
  },
  txto:{
    fontSize:30,
    
  },

  forward:{
    flex:0.4,
    borderColor:'#E1C4FF',
    borderWidth:1,
    width:'10%',
    aspectRatio:3,
    borderRadius:15, 
    flexDirection:'row-reverse',
    flexGrow:0.45

  },



    buttonTwo:{
      flex:1,
      marginBottom:35,
      aspectRatio:2.5,
       width:'10%',
       borderRadius:15,
       alignItems:'center',
       justifyContent:"center",
       margin:20,
       backgroundColor:"#9669D8",
       elevation:10
   
   },
   textStylo:{
     color:"white",
     fontSize:20,
   
   fontWeight:'400',
   }
   

 

})