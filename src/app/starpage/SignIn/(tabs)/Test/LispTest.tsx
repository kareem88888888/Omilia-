import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, Pressable, SafeAreaView, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';
import Lisps from '../../../../../../assets/data/Lisp';
import { LispItem } from '../../../../../Types';

export const defaultImage = require('../../../../../../assets/LSimages/1.png');
export const defaultAudio = require('../../../../../../assets/LSound/Recording.m4a');

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

type LispTestProps = {
  Problem: LispItem;
  addRecordingUri: (uri: string) => void;
};

const LispTestItem = ({ Problem, addRecordingUri }: LispTestProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [pressedone, setPressedOne] = useState(false);
  const [pressedtwo, setPressedTwo] = useState(false);
  const [recording, setRecording] = useState<any>(null);

  const handleOnPressIn = () => setPressedOne(true);
  const handleOnPressOut = () => setPressedOne(false);
  const handleOnPressInTwo = () => setPressedTwo(true);
  const handleOnPressOutTwo = () => setPressedTwo(false);

  const startRecording = async () => {
    try {
      console.log('Requesting permissions...');
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Permission to access microphone is required!');
        return;
      }

      console.log('Permissions granted.');
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording...');
      const { recording } = await Audio.Recording.createAsync(recordingOptions);
      setRecording(recording);
      console.log('Recording started.');
    } catch (err) {
      console.error('Failed to start recording', err);
      Alert.alert('Error', 'Failed to start recording: ' + (err as Error).message);
    }
  };

  const stopRecording = async () => {
    try {
      console.log('Stopping recording...');
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();

      // Save the recording to the user's device
      const newUri = FileSystem.documentDirectory + uri.split('/').pop();
      await FileSystem.moveAsync({
        from: uri,
        to: newUri,
      });
      

      addRecordingUri(newUri);
      setRecording(null);
      console.log('Recording stopped and URI added:', newUri);
    } catch (err) {
      console.error('Failed to stop recording', err);
      Alert.alert('Error', 'Failed to stop recording: ' + (err as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.testo}>
        <Text style={{ color: "#9A69D8", fontWeight: "800", padding: 7 }}>{Problem.name}</Text>
        <View style={{ alignItems: "center", flex: 1, marginBottom: 80 }}>
          <Image source={Problem.image || defaultImage} style={styles.img} resizeMode="contain" />
        </View>
        <View style={{ alignItems: 'center', marginBottom: 100, flexDirection: "row-reverse", justifyContent: "center", marginTop: 20 }}>
          <Pressable style={{ margin: 15 }}
            onPress={async () => {
              const { sound } = await Audio.Sound.createAsync(Problem.audio || defaultAudio);
              sound.playAsync();
              setIsPlaying(true);
            }}
            onPressOut={handleOnPressOut} onPressIn={handleOnPressIn}>
            <AntDesign name="playcircleo" size={35} color={pressedone ? 'pink' : 'black'} />
          </Pressable>
          <Pressable
            onPress={async () => {
              const { sound } = await Audio.Sound.createAsync(Problem.audio || defaultAudio);
              sound.playAsync();
              setIsPlaying(true);
            }} onPressOut={handleOnPressOutTwo} onPressIn={handleOnPressInTwo}>
            <MaterialIcons name="replay-circle-filled" size={40} color={pressedtwo ? 'pink' : 'black'} />
          </Pressable>
        </View>
        <View style={styles.Reco}>
          <View style={styles.waveformContainer}>
            <View style={styles.waveform}>
              <Image source={require('../../../../../../assets/Voice.png')} resizeMode='stretch' />
            </View>
            <Pressable style={styles.micButton} onPress={recording ? stopRecording : startRecording}>
              {recording ? <FontAwesome name="square" size={30} color="white" /> : <MaterialIcons name="mic" size={50} color="white" />}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const CombinedScreen = () => {
  const [recordingUris, setRecordingUris] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const NS_API_KEY = 'sk_7cd7d2ecd5f66a4bfc4214c93e436c6c1184f62025f5d68e40b32db8ceb50563';

  const addRecordingUri = (uri: string) => {
    setRecordingUris(prevUris => [...prevUris, uri]);
  };

  const analyzeRecordings = async () => {
    setLoading(true);
    console.log('Starting analysis of recordings...');
    try {
      const results = await Promise.all(recordingUris.map(async (uri) => {
        try {
          console.log(`Uploading file: ${uri}`);
          const fileUploadResponse = await FileSystem.uploadAsync('https://voice.neuralspace.ai/api/v2/jobs', uri, {
            headers: {
              'Authorization': `sk_7cd7d2ecd5f66a4bfc4214c93e436c6c1184f62025f5d68e40b32db8ceb50563`,
              'Content-Type': 'multipart/form-data'
            },
            httpMethod: 'POST',
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
            fieldName: 'files',
            parameters: {
              'config': JSON.stringify({
                file_transcription: {
                  language_id: 'ar',
                  mode: 'advanced'
                }
              })
            }
          });

          const data1 = JSON.parse(fileUploadResponse.body);
          console.log(data1)
          console.log(data1.data.jobId)
          const jobId = data1.data.jobId
          

          // Wait for some time to ensure the job is processed
          await new Promise(resolve => setTimeout(resolve, 60000));

          console.log(`Fetching transcription for Job ID: ${jobId}`);

          const response2 = await fetch(`https://voice.neuralspace.ai/api/v2/jobs/${jobId}`, {
            method: 'GET',
            headers: {
              'Authorization': `sk_7cd7d2ecd5f66a4bfc4214c93e436c6c1184f62025f5d68e40b32db8ceb50563`
            }
          });

          const data2 = await response2.json();
          console.log(data2);

          return data2;


        } catch (error) {
          console.error('Error processing URI:', uri, error);
          return null;
        }
      }));

      setResults(results);
      console.log('Analysis complete. Results:', results);
    } catch (error) {
      console.error('Error during analysis:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: "flex-end", paddingTop: 12 }}>
          <View>
            <Text style={{ color: "#9A69D8", fontSize: 20, fontWeight: "800" }}>هيا نبدأ اختبار اللثغة</Text>
            <Text style={{ color: "#455A64", fontSize: 14, fontWeight: "500" }}>اسمع المقاطع الصوتيه التاليه جيدا و كررهم  ف التسجيل</Text>
          </View>
          <View>
            <Image source={require('../../../../../../assets/Idea.png')} resizeMode='contain' />
          </View>
        </View>
        <View style={{ height: 3, width: '100%', backgroundColor: "#DBA6F7", marginRight: 20, elevation: 15 }} />
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={Lisps}
            renderItem={({ item }) => <LispTestItem Problem={item} addRecordingUri={addRecordingUri} />}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={
              <View style={{ alignItems: "center" }}>
                {loading ? (
                  <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                  <Pressable style={styles.buttonTwo} onPress={analyzeRecordings}>
                    <Text style={styles.textStylo}>انهاء الاختبار و اظهار النتيجه</Text>
                  </Pressable>
                )}
              </View>
            }
          />
          
        </SafeAreaView>
      </View>
    </>
  );
};

export default CombinedScreen;

const styles = StyleSheet.create({
  buttonTwo: {
    aspectRatio: 5,
    width: '68%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: "center",
    margin: 20,
    backgroundColor: "#DBA6F7",
    elevation: 10
  },
  textStylo: {
    color: "white",
    fontSize: 20,
    fontWeight: '400',
  },
  list: {
    marginTop: 20,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultText: {
    fontSize: 18,
  },
  testo: {
    flex: 1,
    width: '80%',
    aspectRatio: 1,
    backgroundColor: "white",
    margin: 5,
    borderColor: "#DBA6F7",
    borderWidth: 1,
    borderRadius: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 15,
  },
  img: {
    width: '100%',
    aspectRatio: 1,
  },
  Reco: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 30,
    paddingRight: 10,
    marginTop: 5,
  },
  waveformContainer: {
    position: 'relative',
    width: '100%',
    height: 63,
    backgroundColor: '#DBA6F7',
    borderRadius: 15,
    justifyContent: 'center',
    marginBottom: 160,
  },
  micButton: {
    position: 'absolute',
    left: -25,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#DBA6F7',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  waveform: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveText: {
    color: '#fff',
  },
});
