import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

const LispResult = () => {
  return (
    <>
    
    <View style={{flex:1,alignItems:"center",}}>

      <Image source={require('../../../../../../assets/rafiki.png')} resizeMode='contain' style={{}}/>  
    </View>

<View style={{justifyContent:"flex-start",alignItems:"center",flex:1,marginBottom:50}}>
    <View style={styles.resbox}>
      <View>
        <Text style={{color:"#9A69D8",fontSize:18,fontWeight:"600"}}>مراجعة النتائج</Text>
        <Text>الحروف التي يوجد فيها لثغه لديك</Text>
      </View>

      <View style={{alignItems:"center",}}>


        <View style={{flexDirection:'row',}}>

        <View style={styles.letter}> 
           <Text style={styles.txto}>س</Text>
            </View>

        <View style={styles.letter}><Text style={styles.txto}>ق</Text></View>

        <View style={styles.letter}><Text style={styles.txto}>ر</Text></View>
        </View>

        <View style={{flexDirection:"row",}}>

        <View style={styles.letter}><Text style={styles.txto}>ك</Text></View>
        <View style={styles.letter}><Text style={styles.txto}>ز</Text></View>
        <View style={styles.letter}><Text style={styles.txto}>ج</Text></View>
        </View>

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

export default LispResult

const styles = StyleSheet.create({

  resbox:{
    flex:0.6,
    marginBottom:15,
  

    borderColor:'#E1C4FF',
    borderWidth:2,
    width:'10%',
    aspectRatio:2,
    borderRadius:15,
    

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