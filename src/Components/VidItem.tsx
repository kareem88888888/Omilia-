import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState, useRef } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LispItem } from '../Types';
import { Video, ResizeMode } from 'expo-av';

export const defaultImage = require('../../assets/LSimages/1.png');
export const defaultAudio = require('../../assets/LSound/Recording.m4a');

export const defaultvedio = require('../../assets/Videos/Breathing.mp4');


type VideoCompenProps = {
  Problem: LispItem;
};

const VideoCompen = ({ Problem }: VideoCompenProps) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await video.current.pauseAsync();
    } else {
      await video.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const handleReplay = async () => {
    await video.current.replayAsync();
    setIsPlaying(true);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.testo}>
          <Text style={{ color: "#9A69D8", fontWeight: 'bold', padding: 10, fontSize: 17 }}>
            {Problem.name}
          </Text>
          <View style={styles.videoContainer}>
            <Video
              ref={video}
              style={styles.img}
              source={Problem.Video ||defaultvedio}
              // source={require("./demo.mp4")}
              useNativeControls
              resizeMode={ResizeMode.COVER}
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
          </View>
          <View style={styles.controls}>
            <Pressable style={styles.controlButton} onPress={handlePlayPause}>
              <AntDesign name={isPlaying ? "pausecircleo" : "playcircleo"} size={35} color='#9A69D8' />
            </Pressable>
            <Pressable style={styles.controlButton} onPress={handleReplay}>
              <MaterialIcons name="replay-circle-filled" size={40} color='#9A69D8' />
            </Pressable>
          </View>
          {Problem.desc && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText} numberOfLines={2}>
                {Problem.desc}
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  testo: {
    flex: 1,
    width: '80%',
    aspectRatio:0.8,
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
    width: "100%",
    height: 150,
    alignSelf: 'stretch',
    borderRadius: 15,
  },
  videoContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#DBA6F7",
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  controls: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  controlButton: {
    marginHorizontal: 10,
  },
  descriptionContainer: {
    padding:  10,
    marginTop:8,
    alignItems: "center",
    justifyContent:"center"
  },
  descriptionText: {
    color: "#000",
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: "#DBA6F7",
    marginTop: 5,
  },
});

export default VideoCompen;
