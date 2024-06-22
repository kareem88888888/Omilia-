import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'
import { useState,useContext } from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LispItem } from '../Types';
import FontAwesome from '@expo/vector-icons/FontAwesome';



import { Audio } from 'expo-av';





export const defaultImage = require('../../assets/LSimages/1.png')
export const defaultAudio = require('../../assets/LSound/Recording.m4a')


const recordingOptions = {
  android: {
    extension: '.m4a',
    outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
    audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
  },
  ios: {
    extension: '.m4a',
    audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
  web: {
    mimeType: 'audio/webm',
    bitsPerSecond: 128000,
  },
};




type LispTestProps={
Problem:LispItem
}


const LispTestItem = ({Problem}:LispTestProps) => {
  
  

    const [isPlaying, setIsPlaying] = useState(false);


  const[pressedone,setpressedone]=useState(false)
  const[pressedtwo,setpressedtwo]=useState(false)

const[recording,setRrecording]=useState<any>(null)



  

  

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

  

  const startRecording = async () => {
    try {
      console.log('Requesting permissions...');
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === 'granted') {
        console.log('Permissions granted.');
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        console.log('Starting recording...');
        const { recording } = await Audio.Recording.createAsync(recordingOptions);
        setRrecording(recording);
        console.log('Recording started.');
      } else {
        alert('Permission to access microphone is required!');
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    try {
      console.log('Stopping recording...');
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      addRecordingUri(uri); // Add the URI to context
      setRrecording(null);
      console.log('Recording stopped and URI added:', uri);
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  };

  return (
    <>
    



   
    <View style={styles.container}>
    <View style={styles.testo}>
  
      <Text style={{color:"#9A69D8",fontWeight:"800", padding:7}}>{Problem.name}</Text>
  
      <View style={{alignItems:"center",flex:1,marginBottom:80,}}>
      <Image source={Problem.image || defaultImage} style={styles.img} resizeMode="contain"/>
      </View>
  
      <View style={{alignItems:'center',marginBottom:100,flexDirection:"row-reverse",justifyContent:"center",marginTop:20}}>
      <Pressable style={{margin:15}}
      onPress={async () => {
        const { sound } = await Audio.Sound.createAsync(Problem.audio ||defaultAudio);
        sound.playAsync();
        setIsPlaying(true) }}
         onPressOut={handleOnPressout} onPressIn={handleOnPressin}>
  
      <AntDesign name="playcircleo" size={35} color=  {  pressedone ? 'pink': 'black' } />
      </Pressable>
  
  
      <Pressable 
      onPress={async () => {
        const { sound } = await Audio.Sound.createAsync(Problem.audio || defaultAudio);
        sound.playAsync();
        setIsPlaying(true)
        }} onPressOut={handleOnPressoutTwo} onPressIn={handleOnPressintwo}
      >
      <MaterialIcons name="replay-circle-filled" size={40} color={  pressedtwo ? 'pink': 'black' } />
      </Pressable>
      </View>



      
      <View style={styles.Reco}>
      <View style={styles.waveformContainer}>
        <View style={styles.waveform}>
          <Image source={require('../../assets/Voice.png')} resizeMode='stretch'/>
        </View>

        <Pressable style={styles.micButton} onPress={recording ? stopRecording : startRecording}>

         

         {recording ? <FontAwesome name="square" size={30} color="white" /> : <MaterialIcons name="mic" size={50} color="white" />}

        </Pressable>

      </View>
    </View>


  
  
    </View>



    
  </View>

<View style={{height:1,width:'100%',backgroundColor:"#DBA6F7",marginTop:5}}/>



</>

    
  )
}

export default LispTestItem

const styles = StyleSheet.create({
    testo:{
      flex:1,
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
    marginTop:15,
    
    
      },
      img:{
        width:'100%',
        aspectRatio:1,
        
      },
      Reco: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        paddingLeft:30,
        paddingRight:10,
        marginTop:5
        
        
      },
      waveformContainer: {
        position: 'relative',
        width: '100%',
        height: 63,
        backgroundColor: '#DBA6F7',
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom:160
      },
      micButton: {
        position: 'absolute',
        left: -25, // Adjust as necessary
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#DBA6F7',
        justifyContent: 'center',
        alignItems: 'center',
        elevation:8
        
      },
      waveform: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      waveText: {
        color: '#fff',
      },
})