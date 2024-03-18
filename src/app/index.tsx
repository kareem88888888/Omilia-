import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View,Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';




export default function WelcomePage() {
  return (
    <View style={styles.container} >
<ImageBackground style={styles.container} source={require("../../assets/welcomecard.png")} resizeMode='cover' >
  

<View style={styles.bb}>
    <Pressable onPress={()=>router.push('starpage/Start')}   style={styles.button}>
        <AntDesign name="right" size={24} color="#FFFFFF" />
    </Pressable>

    </View>

  

</ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1, },

   button:{
    height:60,
    width:60,
    borderRadius:30,
    backgroundColor:"#DBA6F7",
    alignItems:"center",
    justifyContent:"center"
   },
   bb:{
flex:1,
alignItems:"flex-end",
justifyContent:"flex-end",
paddingBottom:20,
paddingRight:16
   }
});
