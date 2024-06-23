// تمارين حرف السين

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,Dimensions, TouchableOpacity, Pressable} from 'react-native';
import { router } from 'expo-router';

export default function App() {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#DBA6F7' />
      <View style={styles.FirstView}>
        <TouchableOpacity onPress={() => {}}>
         <Image resizeMode='contain' source={require('../../../../../../../../assets/icons/arrowWhite.png')} style={{width:25,height:25,}}/>
         </TouchableOpacity>
         <Text style={styles.txt}>تمارين حرف السين</Text>
        <View style={{width:20,height:20}}></View>
      </View>



      <View style={{alignItems:'center',}}>

      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/breath')}>
      <Text style={styles.textStylo}>تمرين التنفس </Text>

      </TouchableOpacity>

      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/mouth')}>
        <Text style={styles.textStylo}>تمرين تقويه الفم والفكين </Text>
      
      </TouchableOpacity>



      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Lesan')}>
        <Text style={styles.textStylo}>تمارين تقوية اللسان </Text>
       
      </TouchableOpacity>



      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Lispexercise/S/ExS')}>
        <Text style={styles.textStylo}>تمارين خاصة بلثغة حرف السين </Text>
       
      </TouchableOpacity>


      <TouchableOpacity  style={styles.buttonTwo} onPress={()=>router.push('starpage/SignIn/(tabs)/Excersise/Lispexercise/S/wordsS')}>
        <Text style={styles.textStylo}>{"كلمات بحرف السين"}</Text>
      

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
    color:"#FFF",
  },
  FirstView:{
      backgroundColor:"#DBA6F7",
      padding:20,
      marginTop:20,
      flexDirection:"row-reverse",
      justifyContent:"space-between",
      // justifyContent:'space-around',
      alignItems:'center',
      // alignSelf:'flex-end'
    },
    buttonTwo:{
       aspectRatio:6,
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
     fontSize:23,
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





