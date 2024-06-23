// التمارين

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,Dimensions, TouchableOpacity, Pressable} from 'react-native';
import { router } from 'expo-router';

export default function App() {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <View
      style={styles.FirstView}>
        <TouchableOpacity onPress={() => {}}>
        <Image resizeMode='contain' source={require('../../../../../../../assets/icons/arrow.png')} style={{width:25,height:25,marginLeft:15}}/>

         </TouchableOpacity>
         <Text style={styles.txt}>التمارين</Text>
      </View>

      <View style={{alignItems:'center',}}>

      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Lispexercise/R')}>
        <Text style={styles.textStylo}>تمارين حرف الراء</Text>
        <View  style={styles.boxStyle}>

  
        <Image resizeMode='contain' source={require('../../../../../../../assets/icons/r.png')} style={{width:30,height:30,}}/>


        </View>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Lispexercise/S')}>
        <Text style={styles.textStylo}>تمارين حرف السين</Text>
        <View  style={styles.boxStyle}>

  
        <Image resizeMode='contain' source={require('../../../../../../../assets/icons/s.png')} style={{width:30,height:30,}}/>


        </View>
      </TouchableOpacity>



      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Lispexercise/K')}>
        <Text style={styles.textStylo}>تمارين حرف الكاف</Text>
        <View  style={styles.boxStyle}>

  
        <Image resizeMode='contain' source={require('../../../../../../../assets/icons/kk.png')} style={{width:30,height:30,}}/>


        </View>
      </TouchableOpacity>



      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Lispexercise/Z')}>
        <Text style={styles.textStylo}>تمارين حرف الزاي</Text>
        <View  style={styles.boxStyle}>

  
        <Image resizeMode='contain' source={require('../../../../../../../assets/icons/z.png')} style={{width:30,height:30,}}/>


        </View>
      </TouchableOpacity>


      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Lispexercise/2AF')}>
        <Text style={styles.textStylo}>تمارين حرف القاف</Text>
        <View  style={styles.boxStyle}>

  
        <Image resizeMode='contain' source={require('../../../../../../../assets/icons/k.png')} style={{width:30,height:30,}}/>


        </View>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Lispexercise/G')}>
        <Text style={styles.textStylo}>تمارين حرف الجيم</Text>
        <View  style={styles.boxStyle}>
  
        <Image resizeMode='contain' source={require('../../../../../../../assets/icons/g.png')} style={{width:30,height:30,}}/>


        </View>
      </TouchableOpacity>
    
    

      
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  txt:{
    fontSize:22,
    fontWeight:"bold",
    color:"#9A69D8",
  },
  FirstView:{
    
      backgroundColor:"#FFF",
     
      padding:20,
      marginTop:20,
      flexDirection:"row-reverse",
      justifyContent:"space-between",
      alignItems:'center',
      alignSelf:'flex-end'
    },
    buttonTwo:{
       aspectRatio:5,
       width:'90%',
       borderRadius:20,
      //  padding:20,
       backgroundColor:"#FFF",
       elevation:15,
       borderColor:"#DBA6F7",
       borderWidth:1,
       flexDirection:"row-reverse",
       justifyContent:"space-between",
       marginVertical:10
      
   },
   textStylo:{
    color:"#9A69D8",
     fontSize:20,
     fontWeight:'bold',
     textAlign:'center',
     alignSelf:"center",
     marginRight:20
   },
   enterText:{
    color:"#FFF",
    fontSize:50,
    fontWeight:'bold',
    textAlign:'center',
    
   },
   boxStyle:{
    
         
      padding:20,
      backgroundColor:"#DBA6F7",
      borderTopRightRadius:40,
      borderBottomRightRadius:40,
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      alignItems:'center',
      justifyContent:'center',
   
    
   }
  
});

